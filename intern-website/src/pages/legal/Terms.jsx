// src/pages/Terms.jsx
const Terms = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">

        {/* Document Header */}
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="font-heading text-3xl md:text-4xl text-brand-dark font-bold">
            Standard Terms and Conditions for Purchase Orders
          </h1>

          <p className="mt-3 text-sm text-gray-600">
            Applicable to all Purchase Orders issued by Negam Care
          </p>
        </header>

        {/* Intro */}
        <section className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
          <p>
            These Standard Terms and Conditions (“Terms”) shall govern all
            Purchase Orders (“PO”) issued by <strong>Negam Care</strong> to the
            supplier, vendor, or service provider (“Supplier”), unless
            otherwise agreed in writing.
          </p>

          <p>
            By accepting, acknowledging, or fulfilling a Purchase Order, the
            Supplier confirms acceptance of these Terms in full.
          </p>
        </section>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Clause 1 */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-brand-dark">
            1. Scope of Supply
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            The Supplier shall supply goods and/or services strictly in
            accordance with the specifications, quantities, quality standards,
            delivery schedules, and other requirements specified in the
            Purchase Order.
          </p>
        </section>

        {/* Clause 2 */}
        <section className="mt-8 space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-brand-dark">
            2. Pricing and Payment
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Prices stated in the Purchase Order are firm and inclusive of all
            applicable taxes, duties, levies, packaging, and transportation
            costs unless explicitly stated otherwise.
          </p>
        </section>

        {/* Clause 3 */}
        <section className="mt-8 space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-brand-dark">
            3. Delivery and Performance
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Time is of the essence. The Supplier shall ensure delivery or
            performance strictly within the timelines specified in the
            Purchase Order.
          </p>
        </section>

        {/* Placeholder for Legal Expansion */}
        <section className="mt-10 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6">
          <p className="text-sm text-gray-600 italic">
            Additional clauses including warranties, indemnity, limitation of
            liability, confidentiality, force majeure, governing law, and
            dispute resolution will be incorporated as per the finalized legal
            document.
          </p>
        </section>

        {/* Footer Note */}
        <footer className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            This document is intended for informational purposes and does not
            constitute a legally binding agreement unless expressly stated in a
            Purchase Order or contract.
          </p>
        </footer>

      </section>
    </main>
  );
};

export default Terms;
