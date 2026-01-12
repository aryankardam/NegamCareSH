import { useState } from "react";
import { submitEnquiry } from "../services/enquiry.api";

const ContactForm = () => {
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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.firstName.trim()) return "First name is required";
    if (!form.phone.trim()) return "Phone is required";
    if (!form.email.trim()) return "Email is required";
    if (!form.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      await submitEnquiry(form);
      setSuccess("Your enquiry has been sent successfully.");

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        designation: "",
        organization: "",
        message: "",
      });
    } catch (err) {
      console.error("Enquiry error:", err);

      // Axios-specific error handling
      if (err.response) {
        setError(err.response.data?.message || "Server error");
      } else if (err.request) {
        setError("Server not reachable");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
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
        <input name="firstName" value={form.firstName} placeholder="First name *" className={inputClass} onChange={handleChange} />
        <input name="lastName" value={form.lastName} placeholder="Last name" className={inputClass} onChange={handleChange} />
        <input name="phone" value={form.phone} placeholder="Phone *" className={inputClass} onChange={handleChange} />
        <input name="email" value={form.email} placeholder="Email *" className={inputClass} onChange={handleChange} />
        <input name="designation" value={form.designation} placeholder="Designation" className={inputClass} onChange={handleChange} />
        <input name="organization" value={form.organization} placeholder="Organization" className={inputClass} onChange={handleChange} />
      </div>

      <textarea
        name="message"
        rows={4}
        value={form.message}
        placeholder="Tell us about your requirements *"
        className={inputClass}
        onChange={handleChange}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-600">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-full
                   bg-brand-dark px-8 py-3 text-sm font-semibold uppercase
                   text-brand-white hover:bg-brand-primary transition
                   disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
