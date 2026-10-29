"use client";

import { business } from "@/lib/business";
import { normalizeGhanaNumber } from "@/lib/whatsapp";
import { useCart } from "@/components/cart/cart-provider";

export function ContactSelect() {
  const { contactId, setContactId } = useCart();

  return (
    <fieldset>
      <legend className="text-sm font-medium">Ordering contact</legend>
      <p className="mt-1 text-sm leading-relaxed text-stone">
        Choose who should receive the enquiry. The choice stays on this device.
      </p>
      <div className="mt-4 grid gap-2">
        {business.contacts.map((contact) => {
          const valid = normalizeGhanaNumber(contact.phone) != null;
          return (
            <label
              key={contact.id}
              className={`flex cursor-pointer items-start gap-3 border px-3 py-3 ${
                contactId === contact.id ? "border-ink bg-paper" : "border-line"
              }`}
            >
              <input
                type="radio"
                name="ordering-contact"
                value={contact.id}
                checked={contactId === contact.id}
                onChange={() => setContactId(contact.id)}
                className="mt-1"
              />
              <span>
                <span className="block text-sm font-medium">
                  {contact.name}
                  <span className="ml-2 font-normal text-stone">{contact.phone}</span>
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-stone">
                  {contact.note}
                  {valid ? "" : " This number cannot be opened in WhatsApp until it is corrected."}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
