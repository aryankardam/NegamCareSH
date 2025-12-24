import React from "react";
import CareerForm from "../components/CareerForm";

const Careers = () => {
  return (
    <main className="bg-[#f7faf9]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        {/* PAGE HEADER */}
        <div className="mb-14 text-center">
          <p className="mb-2 font-heading text-sm uppercase tracking-[0.25rem] text-[color:var(--color-brand-primary)]">
            Careers
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-[color:var(--color-brand-dark)]">
            Join Our Team
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We are always looking for passionate professionals to grow with us.
            Submit your application and we&apos;ll get back to you if there&apos;s a match.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white shadow-xl rounded-2xl px-6 sm:px-8 py-10 sm:py-12 border border-[color:var(--color-brand-primary)]/10">
          <CareerForm />
        </div>
      </section>
    </main>
  );
};

export default Careers;
