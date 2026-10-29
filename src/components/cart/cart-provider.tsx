"use client";

import { getProductById } from "@/data/products";
import { business } from "@/lib/business";
import { clampQuantity } from "@/lib/cart-math";
import { normalizeGhanaNumber } from "@/lib/whatsapp";
import type { CartLine, Product } from "@/lib/types";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const CART_KEY = "ahs-imports-cart-v1";
const CONTACT_KEY = "ahs-imports-contact-v1";
const CHANGE_EVENT = "ahs-imports-cart-change";

export type ResolvedLine = {
  product: Product;
  quantity: number;
};

type Snapshot = {
  lines: CartLine[];
  contactId: string;
  ready: boolean;
};

const SERVER_SNAPSHOT: Snapshot = {
  lines: [],
  contactId: business.contacts[0].id,
  ready: false,
};

let cachedKey = "";
let cachedSnapshot: Snapshot = SERVER_SNAPSHOT;

function isLine(value: unknown): value is CartLine {
  if (!value || typeof value !== "object") return false;
  const line = value as CartLine;
  return (
    typeof line.productId === "string" &&
    typeof line.quantity === "number" &&
    getProductById(line.productId) != null
  );
}

function readSnapshot(): Snapshot {
  let lines: CartLine[] = [];
  let contactId = business.contacts[0].id;
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        lines = parsed.filter(isLine).map((line) => ({
          productId: line.productId,
          quantity: clampQuantity(line.quantity),
        }));
      }
    }
    const saved = localStorage.getItem(CONTACT_KEY);
    if (saved && business.contacts.some((contact) => contact.id === saved)) {
      contactId = saved;
    }
  } catch {
    lines = [];
  }
  return { lines, contactId, ready: true };
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot() {
  const raw = localStorage.getItem(CART_KEY) ?? "";
  const contact = localStorage.getItem(CONTACT_KEY) ?? "";
  const key = `${raw}|${contact}`;
  if (key !== cachedKey) {
    cachedKey = key;
    cachedSnapshot = readSnapshot();
  }
  return cachedSnapshot;
}

function writeSnapshot(next: Snapshot) {
  localStorage.setItem(CART_KEY, JSON.stringify(next.lines));
  localStorage.setItem(CONTACT_KEY, next.contactId);
  cachedKey = `${JSON.stringify(next.lines)}|${next.contactId}`;
  cachedSnapshot = next;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

type CartContextValue = {
  ready: boolean;
  lines: CartLine[];
  resolved: ResolvedLine[];
  count: number;
  contactId: string;
  setContactId: (id: string) => void;
  contact: (typeof business.contacts)[number] | undefined;
  contactReady: boolean;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => SERVER_SNAPSHOT);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const resolved = snapshot.lines.flatMap((line) => {
      const product = getProductById(line.productId);
      return product ? [{ product, quantity: line.quantity }] : [];
    });
    const contact = business.contacts.find((item) => item.id === snapshot.contactId);

    const commit = (lines: CartLine[], contactId = snapshot.contactId) => {
      writeSnapshot({ lines, contactId, ready: true });
    };

    return {
      ready: snapshot.ready,
      lines: snapshot.lines,
      resolved,
      count: resolved.reduce((sum, line) => sum + line.quantity, 0),
      contactId: snapshot.contactId,
      setContactId: (id: string) => {
        if (!business.contacts.some((item) => item.id === id)) return;
        commit(snapshot.lines, id);
      },
      contact,
      contactReady: contact ? normalizeGhanaNumber(contact.phone) != null : false,
      drawerOpen,
      setDrawerOpen,
      addItem: (productId, quantity = 1) => {
        if (!getProductById(productId)) return;
        const nextQuantity = clampQuantity(quantity);
        const existing = snapshot.lines.find((line) => line.productId === productId);
        const lines = existing
          ? snapshot.lines.map((line) =>
              line.productId === productId
                ? { ...line, quantity: clampQuantity(line.quantity + nextQuantity) }
                : line,
            )
          : [...snapshot.lines, { productId, quantity: nextQuantity }];
        commit(lines);
        setDrawerOpen(true);
      },
      setQuantity: (productId, quantity) => {
        const nextQuantity = clampQuantity(quantity);
        commit(
          snapshot.lines.map((line) =>
            line.productId === productId ? { ...line, quantity: nextQuantity } : line,
          ),
        );
      },
      removeItem: (productId) => {
        commit(snapshot.lines.filter((line) => line.productId !== productId));
      },
      clear: () => commit([]),
    };
  }, [drawerOpen, snapshot]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
