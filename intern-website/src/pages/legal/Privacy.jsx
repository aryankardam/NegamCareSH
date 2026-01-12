// src/pages/Privacy.jsx
const Privacy = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">

        {/* Header */}
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Last updated: January 2026
          </p>
        </header>

        {/* Intro */}
        <section className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
          <p>
            Your privacy is important to{" "}
            <strong>Negam Care Private Limited</strong> (“Negam Care”, “We”, “Us”, or “Our”).
            This Privacy Policy explains how we collect, use, disclose, and protect
            your information when you use our website, services, or applications.
          </p>

          <p>
            This policy applies to users of our website{" "}
            <a
              href="https://www.negamcare.com"
              className="text-brand-primary underline"
              target="_blank"
              rel="noreferrer"
            >
              www.negamcare.com
            </a>{" "}
            and Negam Care’s digital platforms.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Interpretation & Definitions */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Interpretation and Definitions
          </h2>

          <div className="space-y-4 text-sm md:text-base text-gray-800">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Company:</strong> Negam Care Private Limited</li>
              <li><strong>App:</strong> Any web application operated by Negam Care</li>
              <li><strong>Personal Data:</strong> Information relating to an identifiable individual</li>
              <li><strong>Service:</strong> Services provided through the Site or platforms</li>
              <li><strong>You:</strong> The individual or entity accessing the Service</li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Data Collection */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Collecting and Using Your Personal Data
          </h2>

          <h3 className="text-lg font-semibold text-brand-dark">
            Types of Data Collected
          </h3>

          <div className="space-y-4 text-sm md:text-base text-gray-800">
            <p><strong>Personal Data</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Designation</li>
              <li>Organization</li>
            </ul>

            <p><strong>Usage Data</strong></p>
            <p>
              Usage Data is collected automatically and may include IP address,
              browser type, device identifiers, pages visited, and duration of visits.
            </p>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Cookies */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Tracking Technologies and Cookies
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Negam Care uses Cookies and similar tracking technologies to enhance
            user experience, analyze usage, and improve service quality.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-800">
            <li><strong>Essential Cookies</strong> – Required for core functionality</li>
            <li><strong>Consent Cookies</strong> – Store cookie preferences</li>
            <li><strong>Functionality Cookies</strong> – Remember user settings</li>
          </ul>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Use of Data */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Use of Your Personal Data
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-800">
            <li>To provide and maintain Negam Care services</li>
            <li>To respond to enquiries and requests</li>
            <li>To communicate updates and operational information</li>
            <li>To analyze usage and improve service quality</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Security */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Security of Your Personal Data
          </h2>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Negam Care uses reasonable administrative, technical, and physical
            safeguards to protect your Personal Data. However, no system is
            completely secure.
          </p>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">
            Contact Us
          </h2>

          <p className="text-sm md:text-base text-gray-800">
            If you have any questions about this Privacy Policy, you may contact us at:
          </p>

          <p className="text-sm md:text-base font-medium text-brand-dark">
            📧 info@negamcare.com
          </p>
        </section>

      </section>
    </main>
  );
};

export default Privacy;
