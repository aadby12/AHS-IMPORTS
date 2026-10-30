import { EnquiryComposer } from "@/components/contact/enquiry-composer";
import { business } from "@/lib/business";
import { normalizeGhanaNumber, whatsAppUrl, buildEnquiryMessage } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AHS Imports on WhatsApp or Instagram to ask about a product, price, availability, or shipping timeline.",
};

export default function ContactPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-none md:text-7xl">Let&apos;s talk about your next find</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone">
            Need help with a product or preorder? Contact AHS Imports to ask about the items you are interested in and confirm the details before proceeding.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-14 px-5 py-14 md:px-8 lg:grid-cols-12">
        <div className="grid gap-10 lg:col-span-5">
          <section>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-stone">You can ask about</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-relaxed">
              <li>A product in the catalogue</li>
              <li>Pricing</li>
              <li>Availability</li>
              <li>Expected shipping or arrival timing</li>
              <li>An enquiry you have already sent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-stone">Profiles</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              <li>
                <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Instagram {business.handle}
                </a>
              </li>
              <li>
                <a href={business.beaconsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Beacons link in bio
                </a>
              </li>
              <li className="text-stone">Listed publicly as {business.locationLabel}.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-stone">Ordering contacts</h2>
            <ul className="mt-4 grid gap-4">
              {business.contacts.map((contact) => {
                const href = whatsAppUrl(
                  contact.phone,
                  buildEnquiryMessage([], business.siteUrl),
                );
                const valid = normalizeGhanaNumber(contact.phone) != null;
                return (
                  <li key={contact.id} className="border-t border-line pt-4">
                    <p className="font-medium">
                      {contact.name} · {contact.phone}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{contact.note}</p>
                    {href && valid ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm underline underline-offset-4">
                        Send a WhatsApp enquiry
                      </a>
                    ) : (
                      <p className="mt-2 text-sm">This number needs to be checked before a link can be created.</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-stone">Public WhatsApp groups</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              These links are listed on the public Beacons profile. Joining a group is separate
              from a direct order enquiry.
            </p>
            <ul className="mt-4 grid gap-2 text-sm">
              {business.whatsappGroups.map((group) => (
                <li key={group.url}>
                  <a href={group.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    {group.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="lg:col-span-7">
          <h2 className="font-display text-4xl">Write an enquiry</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone">
            This prepares a WhatsApp message. It is not stored on the website, and it does not confirm an order.
          </p>
          <div className="mt-6">
            <EnquiryComposer />
          </div>
        </section>
      </div>
    </>
  );
}
