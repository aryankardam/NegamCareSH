// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* SECTION HEADING */}
        <div className="mb-14 text-center">
          <p className="mb-2 font-heading text-sm uppercase tracking-[0.25rem] text-brand-primary">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-brand-dark">
            Let&apos;s Start a Conversation
          </h1>
          <p className="mt-4 text-sm md:text-base text-brand-dark/70 max-w-2xl mx-auto">
            Share your requirements with the Negam team and we&apos;ll respond within one business day.
          </p>
        </div>

        {/* OUTER CONTAINER */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-brand-primary/10">
          {/* FLEX LAYOUT */}
          <div className="flex flex-col lg:flex-row">
            {/* LEFT: Corporate Office + Map */}
            <div className="w-full lg:w-95 bg-brand-dark px-8 md:px-10 py-10 md:py-12 text-white">
              <h2 className="mb-6 font-heading text-2xl">
                Corporate Office
              </h2>

              <div className="space-y-2 text-sm leading-relaxed text-white/85">
                <p className="font-semibold text-white">
                  Stemztech Industries Pvt. Ltd.
                </p>
                <p>Plot No. B-23A, B-24,</p>
                <p>Block Ecotech Extension,</p>
                <p>Sector Ecotech-1,</p>
                <p>Greater Noida, G.B. Nagar – 201310,</p>
                <p>Uttar Pradesh, India</p>
              </div>

              {/* MAP (responsive container) */}
              <div className="mt-8 rounded-lg overflow-hidden border border-white/10 bg-black/10">
                <div className="relative w-full pb-[56.25%]"> {/* 16:9 */}
                  <iframe
                    title="Corporate Office Location"
                    src="https://www.google.com/maps?q=Greater%20Noida%20Ecotech%201&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-8 flex items-center gap-3 text-sm text-white/85">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  ✉
                </span>
                <a
                  href="mailto:info@stemztech.com"
                  className="underline-offset-2 hover:underline hover:text-brand-accent transition-colors"
                >
                  info@stemztech.com
                </a>
              </div>
            </div>

            {/* RIGHT: Enquire Now */}
            <div className="flex-1 px-6 md:px-10 py-10 md:py-12 bg-brand-accent/5">
              <h2 className="mb-8 font-heading text-3xl text-brand-dark"
              id="contact-strip"
              >
                Enquire Now
              </h2>

              {/* ContactForm already has branded focus states */}
              <ContactForm className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
