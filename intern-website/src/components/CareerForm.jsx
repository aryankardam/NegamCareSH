import React, { useState } from "react";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    setResume(file || null);
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const validate = () => {
    const e = {};

    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Enter a valid email address";
    if (!formData.phone.trim()) e.phone = "Phone is required";
    else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone))
      e.phone = "Enter a valid phone number";
    if (!resume) e.resume = "Resume is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));
      data.append("resume", resume);

      const res = await fetch("http://localhost:5000/api/careers", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed");

      // In production replace alert with toast
      alert("Application submitted successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
      setResume(null);
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase = `
    w-full rounded-lg border px-4 py-3 text-sm
    border-gray-300 bg-white
    outline-none transition
    focus:border-[color:var(--color-brand-primary)]
    focus:ring-2 focus:ring-[color:var(--color-brand-primary)]/30
    placeholder:text-gray-400
  `;

  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Full Name */}
      <div>
        <label
          htmlFor="career-name"
          className="block text-sm font-medium text-[color:var(--color-brand-dark)] mb-1"
        >
          Full Name *
        </label>
        <input
          id="career-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputBase} ${
            errors.name ? "border-red-400 focus:ring-red-300" : ""
          }`}
          placeholder="Enter your full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "career-name-error" : undefined}
        />
        {errors.name && (
          <p id="career-name-error" className={errorClass}>
            {errors.name}
          </p>
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="career-email"
            className="block text-sm font-medium text-[color:var(--color-brand-dark)] mb-1"
          >
            Email *
          </label>
          <input
            id="career-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputBase} ${
              errors.email ? "border-red-400 focus:ring-red-300" : ""
            }`}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "career-email-error" : undefined}
          />
          {errors.email && (
            <p id="career-email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="career-phone"
            className="block text-sm font-medium text-[color:var(--color-brand-dark)] mb-1"
          >
            Phone *
          </label>
          <input
            id="career-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputBase} ${
              errors.phone ? "border-red-400 focus:ring-red-300" : ""
            }`}
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "career-phone-error" : undefined}
          />
          {errors.phone && (
            <p id="career-phone-error" className={errorClass}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Position */}
      <div>
        <label
          htmlFor="career-position"
          className="block text-sm font-medium text-[color:var(--color-brand-dark)] mb-1"
        >
          Position Applied For
        </label>
        <input
          id="career-position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className={inputBase}
          placeholder="e.g., Frontend Engineer"
        />
      </div>

      {/* Resume */}
      <div>
        <label
          htmlFor="career-resume"
          className="block text-sm font-medium text-[color:var(--color-brand-dark)] mb-1"
        >
          Resume (PDF / DOC) *
        </label>
        <input
          id="career-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeChange}
          className={`
            block w-full text-sm text-gray-700
            file:mr-4 file:rounded-full file:border-0 file:bg-[color:var(--color-brand-primary)]
            file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white
            file:hover:bg-[color:var(--color-brand-accent)]
            cursor-pointer
          `}
          aria-invalid={!!errors.resume}
          aria-describedby={errors.resume ? "career-resume-error" : undefined}
        />
        {errors.resume && (
          <p id="career-resume-error" className={errorClass}>
            {errors.resume}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="career-message"
          className="block text-sm font-medium text-[color:var(--color-brand-dark)] mb-1"
        >
          Message
        </label>
        <textarea
          id="career-message"
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputBase} resize-none`}
          placeholder="Tell us briefly about your experience and why you'd like to join."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          inline-flex items-center justify-center
          rounded-full bg-[color:var(--color-brand-primary)]
          px-8 py-3 text-white uppercase tracking-[0.2em] text-xs md:text-sm
          hover:bg-[color:var(--color-brand-accent)]
          disabled:opacity-60 disabled:cursor-not-allowed
          focus:outline-none focus:ring-4 focus:ring-[color:var(--color-brand-primary)]/40
          focus:ring-offset-2 focus:ring-offset-white
          transition-all duration-200
        "
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default CareerForm;
