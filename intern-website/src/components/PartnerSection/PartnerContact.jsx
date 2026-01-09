// src/components/PartnerSection/PartnerContact.jsx
import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

const PartnerContact = () => {
  const handleSubmit = async (data) => {
    console.log("Partner enquiry:", data);
  };

  return (
    <section
      className="relative min-h-150 overflow-hidden bg-linear-to-br from-emerald-50 via-green-50 to-emerald-100"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(var(--color-brand-primary-rgb), 0.08) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(var(--color-brand-accent-rgb), 0.06) 0%, transparent 40%),
          linear-gradient(135deg, rgba(var(--color-brand-primary-rgb), 0.03) 0%, transparent 70%)
        `,
      }}
      id="contact-strip"
    >
      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-linear-to-r from-brand-primary/10 to-brand-accent/10 rounded-full blur-xl opacity-60"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-24 h-24 bg-linear-to-b from-brand-accent/8 to-transparent rounded-full blur-lg opacity-50"
        animate={{
          x: [0, 10, 0],
          rotate: [0, 180],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 relative z-10">
        {/* SECTION HEADING */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="mb-3 font-heading text-xs md:text-sm uppercase tracking-[0.2rem] 
                       text-brand-primary bg-linear-to-r from-brand-primary/20 to-brand-accent/20 
                       px-3 py-1.5 rounded-full inline-block backdrop-blur-sm border border-brand-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.p>
          <motion.h1
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-dark leading-tight 
                       bg-linear-to-r from-brand-dark/90 via-brand-primary to-brand-accent/90 
                       bg-clip-text drop-shadow-sm"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Let's Start a Partnership Conversation
          </motion.h1>
          <motion.p
            className="mt-4 text-sm md:text-base text-brand-dark/75 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to explore how Negam Care can support structured, transparent,
            and scalable agri-value chains? Connect with us to discuss
            partnerships, projects, and collaboration opportunities.
          </motion.p>
        </motion.div>

        {/* MAIN CONTAINER */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden 
                     border border-emerald-100/50 hover:shadow-emerald-100/50 hover:border-emerald-200/50
                     transition-all duration-500"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{
            y: -4,
            boxShadow: "0 35px 80px -20px rgba(16,185,129,0.15)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          {/* FLEX LAYOUT */}
          <div className="flex flex-col lg:flex-row">
            {/* LEFT: Corporate Office + Map */}
            <motion.div
              className="w-full lg:w-[38%] 
                         bg-linear-to-br from-brand-dark via-brand-primary/95 to-brand-primary/80
                         px-6 md:px-8 py-8 md:py-12 text-white relative overflow-hidden"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iOCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPgo8L3N2Zz4K')] opacity-20" />

              <motion.h2
                className="mb-5 md:mb-6 font-heading text-xl md:text-2xl relative z-10"
                whileInView={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Corporate Office
              </motion.h2>

              <div className="space-y-1.5 text-xs md:text-sm leading-relaxed text-white/95 relative z-10">
                <p className="font-semibold text-white text-sm md:text-base">
                  Negam Care Pvt. Ltd.
                </p>
                <p>Plot No. E-259,</p>
                <p>Helipad Road,</p>
                <p>Namsai Circle,</p>
                <p>P.O. & P.S. Namsai – 792103,</p>
                <p className="text-xs">Arunachal Pradesh, India</p>
              </div>

              {/* MAP */}
              <motion.div
                className="mt-6 md:mt-8 rounded-2xl overflow-hidden border border-white/20 
                           bg-white/5 backdrop-blur-sm hover:scale-[1.01]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-full pb-[60%]">
                  <iframe
                    title="Negam Care Office – Namsai, Arunachal Pradesh"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4735946007117!2d95.8559229!3d27.6717538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373efbacc9e7d15b%3A0x10cddc5f41e8748!2sHelipad%20Rd%2C%20Namsai%2C%20Arunachal%20Pradesh!5e0!3m2!1sen!2sin!4v1767883048170!5m2!1sen!2sin"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.a
                href="mailto:info@negamcare.com"
                className="mt-6 md:mt-8 flex items-center gap-2.5 text-sm text-white/95 
                           hover:text-white hover:bg-white/15 px-4 py-2.5 rounded-xl 
                           backdrop-blur-sm border border-white/15 transition-all duration-300 relative z-10"
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center 
                                rounded-lg bg-white/20 shrink-0 font-medium text-xs"
                >
                  ✉
                </span>
                info@negamcare.com
              </motion.a>
            </motion.div>

            {/* RIGHT: Enquire Now */}
            <motion.div
              className="flex-1 px-6 md:px-8 py-8 md:py-12 bg-white/80 backdrop-blur-xl 
                         border-l border-emerald-100/30 relative"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="mb-6 md:mb-8 font-heading text-2xl md:text-3xl 
                           text-brand-dark/95 bg-linear-to-r from-brand-dark/80 
                           to-brand-primary/60 bg-clip-text relative z-10"
                id="partner-enquiry"
                whileInView={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Enquire Now
              </motion.h2>

              <motion.div
                className="relative z-10"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(var(--color-brand-accent-rgb), 0.08) 100%)",
                    "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(var(--color-brand-primary-rgb), 0.06) 100%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <ContactForm onSubmit={handleSubmit} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerContact;
