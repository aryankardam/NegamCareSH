import React from "react";
import ContactForm from "./ContactForm";

const ContactStrip = () => (
  <section
    id="contact-strip"
    className="w-full bg-white border-t border-gray-200"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="mb-6 font-heading text-3xl text-[color:var(--color-brand-dark)] text-center">
        Enquire Now
      </h2>
      <ContactForm />
    </div>
  </section>
);

export default ContactStrip;
