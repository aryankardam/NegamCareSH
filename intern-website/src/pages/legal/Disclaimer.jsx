// src/pages/Disclaimer.jsx
const Disclaimer = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">

        {/* Header */}
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
            Legal Disclaimer
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Last updated: January 2026
          </p>
        </header>

        {/* Intro */}
        <section className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
          <p>
            By accessing and using this website (the “Site”), you accept and agree
            to be bound by and comply with this Legal Disclaimer (“Disclaimer”).
            By using this Site, you represent that you have read, understood, and
            agree to these terms and conditions.
          </p>

          <p>
            If you are accessing this Site on behalf of a company or other legal
            entity, you represent that you have the authority to bind such entity
            to this Disclaimer.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* General */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            General
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            All products and services referenced on this Site are subject to the
            applicable terms and conditions governing their use and may change
            from time to time.
          </p>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            This Disclaimer should be read together with any additional terms,
            conditions, or product-specific disclaimers provided on the Site. In
            the event of any conflict, the specific terms applicable to the
            product or service shall prevail.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Information Accuracy */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Information Accuracy
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            The information, materials, and content provided on this Site may be
            changed at any time without notice. While Negam Care believes the
            information to be reliable when posted, it does not guarantee that
            such information is accurate, complete, or current at all times.
          </p>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Use of this Site is entirely at your own risk. No content may be
            modified or taken out of context in a manner that creates a false or
            misleading impression regarding Negam Care.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Conditions for Products & Services */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Conditions for Products and Services
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            The terms and conditions applicable to any product or service shall
            be those in effect at the time the product or service is provided.
            You are responsible for complying with all applicable local,
            national, and international laws when accessing this Site.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Confidentiality */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Confidentiality
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Negam Care treats information regarding users as confidential and
            will not disclose such information except where required by law,
            with prior authorization, in the company’s legitimate interest, or
            in the public interest.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* No Warranties */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            No Warranties
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            This Site and its contents are provided on an “as-is” and “as-available”
            basis. Negam Care makes no warranties, express or implied, including
            but not limited to warranties of accuracy, completeness, reliability,
            or fitness for a particular purpose.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* No Liability */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Limitation of Liability
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Negam Care shall not be liable for any damages arising out of or in
            connection with the use of or inability to use this Site or its
            contents, including direct, indirect, incidental, consequential, or
            punitive damages.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Jurisdiction */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Jurisdiction
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            This Site is controlled and operated from India. This Disclaimer
            shall be governed by and construed in accordance with the laws of
            India, and the courts of India shall have exclusive jurisdiction.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Footer Note */}
        <section className="text-sm text-gray-600 mt-12">
          <p>© Negam Care Private Limited. All rights reserved.</p>
        </section>

      </section>
    </main>
  );
};

export default Disclaimer;
