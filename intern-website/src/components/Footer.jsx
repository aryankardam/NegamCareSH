import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logoWhite from "../assets/Negam_whiteLogo.svg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContactStrip = (targetPath = "/") => {
    const doScroll = () => {
      const el = document.getElementById("contact-strip");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === targetPath) {
      doScroll();
    } else {
      navigate(targetPath);
      setTimeout(doScroll, 50);
    }
  };

  const handleNavClick = (path, scrollTo = "top") => {
    if (scrollTo === "contact-strip") {
      scrollToContactStrip(path);
      return;
    }

    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
      setTimeout(scrollToTop, 50);
    }
  };

  return (
    <footer className="w-full bg-[color:var(--color-brand-dark)] text-[color:var(--color-brand-white)]">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* LOGO + DESCRIPTION */}
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => handleNavClick("/")}
              className="flex items-start focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-white)]/70 rounded-md"
            >
              <img
                src={logoWhite}
                alt="Negam Logo"
                className="h-16 w-auto drop-shadow-lg"
              />
            </button>
            <p className="text-sm leading-relaxed max-w-md text-[color:var(--color-brand-white)]/90">
              Revolutionizing agricultural health through innovative technology
              and sustainable practices.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 font-heading text-base uppercase tracking-[0.25rem] text-[color:var(--color-brand-white)]">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <button
                type="button"
                onClick={() => handleNavClick("/")}
                className="text-left group hover:text-[#83c714] transition-colors duration-200 after:inline-block after:w-2 after:h-2 after:bg-[#83c714]/60 after:rounded-full after:ml-2 after:opacity-0 group-hover:after:opacity-100 after:transition-all"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("/about")}
                className="text-left group hover:text-[#83c714] transition-colors duration-200 after:inline-block after:w-2 after:h-2 after:bg-[#83c714]/60 after:rounded-full after:ml-2 after:opacity-0 group-hover:after:opacity-100 after:transition-all"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("/services")}
                className="text-left group hover:text-[#83c714] transition-colors duration-200 after:inline-block after:w-2 after:h-2 after:bg-[#83c714]/60 after:rounded-full after:ml-2 after:opacity-0 group-hover:after:opacity-100 after:transition-all"
              >
                Our Services
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("/contact", "contact-strip")}
                className="text-left group hover:text-[#83c714] transition-colors duration-200 after:inline-block after:w-2 after:h-2 after:bg-[#83c714]/60 after:rounded-full after:ml-2 after:opacity-0 group-hover:after:opacity-100 after:transition-all"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="mb-6 font-heading text-base uppercase tracking-[0.25rem] text-[color:var(--color-brand-white)]">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-[color:var(--color-brand-white)]/90">
              <p>Rewari, Haryana, India</p>
              <p>+91 123 456 7890</p>
              <p>hello@isanteagri.com</p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-[color:var(--color-brand-white)]/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-xs tracking-wide text-[color:var(--color-brand-white)]/80">
          {/* LEFT: COPYRIGHT */}
          <p className="font-medium">
            © 2026 Isante Agri Private Limited. All Rights Reserved.
          </p>

          {/* RIGHT: LEGAL LINKS */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => handleNavClick("/terms")}
              className="relative hover:text-[#83c714] transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#83c714] after:transition-all after:duration-300 hover:after:w-full"
            >
              Terms &amp; Conditions
            </button>
            <span className="hidden lg:inline opacity-40">|</span>
            <button
              type="button"
              onClick={() => handleNavClick("/privacy")}
              className="relative hover:text-[#83c714] transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#83c714] after:transition-all after:duration-300 hover:after:w-full"
            >
              Privacy Policy
            </button>
            <span className="hidden lg:inline opacity-40">|</span>
            <button
              type="button"
              onClick={() => handleNavClick("/disclaimer")}
              className="relative hover:text-[#83c714] transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#83c714] after:transition-all after:duration-300 hover:after:w-full"
            >
              Legal Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
