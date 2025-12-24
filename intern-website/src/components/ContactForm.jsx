import React, { useState } from "react";

const ContactForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    designation: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = { ...formData };

    try {
      // TODO: replace with real API call (fetch/axios)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", payload);

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        designation: "",
        organization: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field) =>
    `
    w-full rounded-xl px-5 py-4 text-sm font-medium text-[color:var(--color-brand-dark)]
    bg-white/90 backdrop-blur-sm border border-white/30
    focus:outline-none focus:ring-4 focus:ring-[color:var(--color-brand-accent)]/50 
    focus:border-[color:var(--color-brand-accent)]/50 transition-all duration-300
    hover:border-[color:var(--color-brand-accent)]/30
    placeholder:text-[color:var(--color-brand-dark)]/60
    ${
      errors[field]
        ? "ring-2 ring-red-400 border-red-400 bg-red-50/50"
        : ""
    }
  `;

  return (
    <section
      className={`
        relative w-full 
        bg-gradient-to-br from-[color:var(--color-brand-dark)] via-[color:var(--color-brand-primary)]/95 to-[color:var(--color-brand-primary)]
        py-24 overflow-hidden
        ${className}
      `}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_#83c714_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_#ffffff10_0%,_transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="mb-6 font-heading text-5xl md:text-6xl text-white drop-shadow-lg leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear about your agricultural health requirements.
            Our team responds within 24 hours.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                name="firstName"
                type="text"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                className={inputClasses("firstName")}
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
              />
              {errors.firstName && (
                <p
                  id="firstName-error"
                  className="mt-1 text-xs text-red-300 ml-1"
                >
                  • {errors.firstName}
                </p>
              )}
            </div>

            <div>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={inputClasses("lastName")}
              />
            </div>

            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-red-300 ml-1">
                  • {errors.phone}
                </p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-300 ml-1">
                  • {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                name="designation"
                type="text"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                className={inputClasses("designation")}
              />
            </div>

            <div>
              <input
                name="organization"
                type="text"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
                className={inputClasses("organization")}
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell us about your requirements *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={inputClasses("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-300 ml-1">
                • {errors.message}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                group relative inline-flex items-center gap-3
                rounded-2xl bg-white px-10 py-5
                font-heading text-lg uppercase tracking-[0.25rem]
                text-[color:var(--color-brand-primary)] font-semibold shadow-2xl
                hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.02]
                active:scale-[0.98]
                disabled:opacity-50 disabled:cursor-not-allowed
                disabled:transform-none
                focus:outline-none focus:ring-4 focus:ring-white/50
                focus:ring-offset-2 focus:ring-offset-[color:var(--color-brand-primary)]
                transition-all duration-300 ease-out overflow-hidden
              "
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Submit →</span>
                  <span
                    className="
                      absolute inset-0 bg-gradient-to-r from-[color:var(--color-brand-accent)]/20 to-transparent 
                      -skew-x-12 transform -translate-x-full group-hover:translate-x-full
                      transition-transform duration-700 ease-out
                    "
                    aria-hidden="true"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;