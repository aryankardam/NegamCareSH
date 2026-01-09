// src/components/CareerSection/CareerForm.jsx
import React, { useState, useCallback, useRef } from "react";

const CareerForm = () => {
  

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", position: "", message: ""
  });
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }, [errors]);

  const handleResumeChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setErrors({ resume: "File must be < 5MB" });
      return;
    }
    setResume(file || null);
    if (errors.resume) setErrors((prev) => ({ ...prev, resume: "" }));
  }, [errors.resume]);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.email || !formData.email.includes('@')) newErrors.email = "Valid email required";
    if (!formData.phone.trim()) newErrors.phone = "Phone required";
    if (!resume) newErrors.resume = "Resume required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, resume]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v.trim()));
      data.append("resume", resume);

      const res = await fetch("/api/careers", { method: "POST", body: data });
      if (!res.ok) throw new Error("Failed");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", position: "", message: "" });
      setResume(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase = "w-full rounded-xl border px-5 py-4 text-base border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm focus-visible:border-brand-primary focus-visible:ring-4 focus-visible:ring-brand-primary/20 transition-all";

  return (
    <div 
      className="space-y-8"
      id="contact-strip"
    >
      {submitStatus === "success" && (
        <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center">
          <div className="text-2xl mb-3">✅</div>
          <h3 className="text-xl font-bold text-green-800 mb-1">Success!</h3>
          <p className="text-green-700">We'll contact you within 48 hours.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8"  noValidate>
        <div>
          <label className="block text-lg font-semibold text-brand-dark mb-3">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input name="name" value={formData.name} onChange={handleChange} className={`${inputBase} ${errors.name ? "border-red-400" : ""}`} placeholder="John Doe" />
          {errors.name && <p className="text-sm text-red-500 mt-2">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-semibold text-brand-dark mb-3">Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className={`${inputBase} ${errors.email ? "border-red-400" : ""}`} placeholder="john@company.com" />
          </div>
          <div>
            <label className="block text-lg font-semibold text-brand-dark mb-3">Phone <span className="text-red-500">*</span></label>
            <input name="phone" value={formData.phone} onChange={handleChange} className={`${inputBase} ${errors.phone ? "border-red-400" : ""}`} placeholder="+91 9876543210" />
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold text-brand-dark mb-3">Position</label>
          <input name="position" value={formData.position} onChange={handleChange} className={inputBase} placeholder="Frontend Developer" />
        </div>

        <div>
          <label className="block text-lg font-semibold text-brand-dark mb-3">
            Resume <span className="text-red-500">*</span> (PDF/DOC &lt;5MB)
          </label>
          <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} className="block w-full text-sm text-gray-700 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:bg-brand-primary file:text-white file:font-semibold file:shadow-lg hover:file:shadow-xl cursor-pointer border-2 border-dashed border-gray-300 p-8 rounded-2xl hover:border-brand-primary hover:bg-brand-primary/5" />
          {errors.resume && <p className="text-sm text-red-500 mt-2">{errors.resume}</p>}
        </div>

        <div>
          <label className="block text-lg font-semibold text-brand-dark mb-3">Message</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className={`${inputBase} resize-vertical min-h-[120px]`} placeholder="Why Negam Care? Your experience..." />
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full group bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary text-white font-bold py-5 px-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50">
          {isSubmitting ? "Submitting..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
