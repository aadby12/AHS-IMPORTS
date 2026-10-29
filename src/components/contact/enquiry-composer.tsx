"use client";

import { useCart } from "@/components/cart/cart-provider";
import { ContactSelect } from "@/components/cart/contact-select";
import { business } from "@/lib/business";
import { buildCustomEnquiryMessage, whatsAppUrl } from "@/lib/whatsapp";
import { useState } from "react";

export function EnquiryComposer() {
  const { contact, contactReady } = useCart();
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function openWhatsApp() {
    if (!note.trim()) {
      setError("Write a short note before opening WhatsApp.");
      return;
    }
    if (!contact || !contactReady) {
      setError("The selected contact number needs to be corrected first.");
      return;
    }
    const href = whatsAppUrl(contact.phone, buildCustomEnquiryMessage({ name, note }));
    if (!href) {
      setError("A WhatsApp link could not be created for that number.");
      return;
    }
    setError("");
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        openWhatsApp();
      }}
    >
      <ContactSelect />
      <div>
        <label htmlFor="enquiry-name" className="text-sm">
          Your name <span className="text-stone">(optional)</span>
        </label>
        <input
          id="enquiry-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 h-12 w-full border border-line bg-paper px-3"
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="enquiry-note" className="text-sm">
          What would you like to ask?
        </label>
        <textarea
          id="enquiry-note"
          required
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={5}
          className="mt-2 w-full border border-line bg-paper px-3 py-3"
        />
      </div>
      {error ? (
        <p className="text-sm" role="alert">
          {error}
        </p>
      ) : (
        <p className="text-sm text-stone">
          This opens WhatsApp with {contact?.name ?? "the selected contact"}. It does not send a
          message through this website, and it does not confirm an order.
        </p>
      )}
      <button type="submit" className="btn">
        Continue on WhatsApp
      </button>
      <p className="text-xs text-stone">No email address is published for this demo.</p>
      <p className="sr-only">{business.name}</p>
    </form>
  );
}
