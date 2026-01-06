// src/components/ContactStrip.jsx
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactStrip = () => {
  const handleSubmit = async (data) => {
    console.log("Contact enquiry:", data);
    // API call here
  };

  return (
    <section
      id="contact-strip"
      className="bg-brand-accent/15 py-20 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ scale: 1.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, var(--color-brand-primary) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--color-brand-accent) 0%, transparent 50%)",
        }}
      />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Heading */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            id="contact-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-dark mb-6 bg-linear-to-r from-brand-dark to-brand-primary/70 bg-clip-text"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Enquire Now
          </motion.h2>

          <motion.p 
            className="mx-auto max-w-3xl text-base md:text-lg text-brand-dark/70 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with Negam Care to explore partnerships, research
            collaborations, and market enablement opportunities across
            agricultural value chains.
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl bg-brand-white/80 backdrop-blur-xl
                     border border-brand-dark/5 shadow-2xl hover:shadow-3xl
                     px-6 py-8 md:px-10 md:py-12 transition-all duration-500
                     hover:-translate-y-2 focus-within:-translate-y-2"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            borderColor: "rgba(var(--color-brand-primary-rgb), 0.2)"
          }}
          whileFocus={{ ring: "4px solid rgba(var(--color-brand-primary-rgb), 0.3)" }}
        >
          <motion.div
            animate={{ 
              background: [
                "linear-gradient(135deg, rgba(var(--color-brand-white-rgb)) 0%, rgba(var(--color-brand-white-rgb)) 50%, rgba(var(--color-brand-accent-rgb), 0.02) 100%)",
                "linear-gradient(135deg, rgba(var(--color-brand-white-rgb)) 0%, rgba(var(--color-brand-accent-rgb), 0.05) 50%, rgba(var(--color-brand-white-rgb)) 100%)"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute inset-0 rounded-3xl -z-10 opacity-50"
          />
          
          <ContactForm onSubmit={handleSubmit} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactStrip;
