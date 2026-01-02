import ContactForm from "./ContactForm";

const ContactStrip = () => {
  const handleSubmit = async (data) => {
    console.log("Contact enquiry:", data);
    // API call here
  };

  return (
    <section
      id="contact-strip"
      className="bg-brand-accent/15 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-dark mb-3">
            Enquire now
          </h2>

          <p className="mx-auto max-w-3xl text-base md:text-lg text-brand-dark/70">
            Connect with Negam Care to explore partnerships, research
            collaborations, and market enablement opportunities across
            agricultural value chains.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="mx-auto max-w-3xl rounded-2xl
                     bg-brand-white
                     border border-brand-dark/10
                     px-6 py-8 md:px-10 md:py-10"
        >
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
