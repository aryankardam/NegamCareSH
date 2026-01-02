import { useState } from "react";

const ContactForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    designation: "",
    organization: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (onSubmit) await onSubmit(form);
    setLoading(false);
  };

  const inputClass =
    "w-full rounded-md border border-[color:var(--color-brand-dark)]/20 " +
    "px-4 py-3 text-sm text-[color:var(--color-brand-dark)] " +
    "placeholder:text-[color:var(--color-brand-dark)]/50 " +
    "focus:outline-none focus:ring-2 " +
    "focus:ring-[color:var(--color-brand-primary)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input name="firstName" placeholder="First name *" className={inputClass} onChange={handleChange} />
        <input name="lastName" placeholder="Last name" className={inputClass} onChange={handleChange} />
        <input name="phone" placeholder="Phone *" className={inputClass} onChange={handleChange} />
        <input name="email" placeholder="Email *" className={inputClass} onChange={handleChange} />
        <input name="designation" placeholder="Designation" className={inputClass} onChange={handleChange} />
        <input name="organization" placeholder="Organization" className={inputClass} onChange={handleChange} />
      </div>

      <textarea
        name="message"
        rows={4}
        placeholder="Tell us about your requirements *"
        className={inputClass}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-full
                   bg-brand-dark
                   px-8 py-3 text-sm font-semibold uppercase
                   text-brand-white
                   hover:bg-brand-primary
                   transition"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
