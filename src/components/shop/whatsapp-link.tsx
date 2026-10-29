"use client";

import { useCart } from "@/components/cart/cart-provider";
import { business } from "@/lib/business";
import { whatsAppUrl, type EnquiryLine, buildEnquiryMessage } from "@/lib/whatsapp";
import type { ReactNode } from "react";

export function WhatsAppLink({
  lines,
  message,
  className,
  children,
}: {
  lines?: EnquiryLine[];
  message?: string;
  className?: string;
  children: ReactNode;
}) {
  const { contact, contactReady } = useCart();
  const text =
    message ??
    buildEnquiryMessage(lines ?? [], business.siteUrl);
  const href = contact && contactReady ? whatsAppUrl(contact.phone, text) : null;

  if (!href) {
    return (
      <p className="text-sm text-stone">
        The selected contact number needs to be corrected before a WhatsApp link can be
        created.
      </p>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
