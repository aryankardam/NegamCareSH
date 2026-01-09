import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Negam.svg";
import Button from "./Button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();

  const active =
    navItems.find((item) => item.path === location.pathname)?.label || "Home";

  // NEW: derive CTA label from current route (careers => Join Us)
  const isCareersRoute = location.pathname === "/careers";
  const ctaLabel = isCareersRoute ? "Join Us" : "Enquire Now";

  /* -------------------------------
    Scroll helpers
  -------------------------------- */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContactStrip = (targetPath) => {
    const path = targetPath || location.pathname;

    const doScroll = () => {
      const el = document.getElementById("contact-strip");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === path) {
      doScroll();
    } else {
      navigate(path);
      setTimeout(doScroll, 50);
    }
  };

  /* -------------------------------
    Sync active label with URL
  -------------------------------- */
  useLayoutEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* -------------------------------
    Desktop active indicator sync
  -------------------------------- */
  useEffect(() => {
    const el = itemRefs.current[active];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement.getBoundingClientRect();

    setIndicatorStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
    });
  }, [active]);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
      setTimeout(scrollToTop, 50);
    }
    setMobileOpen(false);
  };

  const handleNavClick = (label, path) => {
    setMobileOpen(false);

    if (location.pathname === path) {
      scrollToTop();
    } else {
      setTimeout(scrollToTop, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#dbedf0] border-b border-brand-primary/20">
      {/* TOP BAR */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* LEFT: mobile menu button + logo */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU TOGGLE (hidden on md+) */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-brand-dark"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute top-0 h-0.5 w-5 bg-current transition-all ${
                  mobileOpen ? "rotate-45 top-2" : ""
                }`}
              />
              <span
                className={`absolute top-2 h-0.5 w-5 bg-current transition-all ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute top-4 h-0.5 w-5 bg-current transition-all ${
                  mobileOpen ? "-rotate-45 top-2" : ""
                }`}
              />
            </div>
          </button>

          {/* LOGO (clickable) */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Negam Logo"
              className="h-10 w-auto object-contain"
            />
          </button>
        </div>

        {/* RIGHT: DESKTOP NAV + CTA (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-16">
          {/* NAV AREA WITH BASE LINE + ACTIVE INDICATOR */}
          <div className="relative flex h-20 items-center">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
            <div
              className="absolute bottom-0 translate-y-px h-0.75 bg-brand-primary transition-all duration-200"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />

            <nav className="flex items-center gap-12">
              {navItems.map((item) => {
                const isActive = active === item.label;
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    ref={(el) => (itemRefs.current[item.label] = el)}
                    onClick={() => handleNavClick(item.label, item.path)}
                    className={`
                      h-heading text-lg font-semibold tracking-wide
                      text-brand-dark transition-colors
                      ${
                        isActive
                          ? "text-brand-primary"
                          : "hover:text-brand-accent"
                      }
                    `}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* CTA BUTTON (desktop) – dynamic label */}
          <Button
            as="button"
            type="button"
            onClick={() => scrollToContactStrip()}
          >
            <span className="relative z-10">{ctaLabel}</span>
          </Button>
        </div>

        {/* RIGHT: CTA ONLY ON MOBILE (smaller but same color) */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => scrollToContactStrip()}
            className="
              h-heading rounded-full px-4 py-2
              text-xs uppercase tracking-[0.12rem]
              text-white bg-brand-primary shadow-md
            "
          >
            {ctaLabel}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN PANEL */}
      <div
        className={`
          md:hidden border-t border-gray-200 bg-white
          transform transition-all duration-300 ease-out
          ${
            mobileOpen
              ? "max-h-64 translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0 pointer-events-none"
          }
        `}
      >
        <nav className="flex flex-col gap-2 px-4 pt-3 pb-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => handleNavClick(item.label, item.path)}
                className={`
                  h-heading text-base font-semibold py-2
                  transition-colors
                  ${
                    isActive
                      ? "text-brand-primary"
                      : "text-brand-dark hover:text-brand-accent"
                  }
                `}
              >
                {item.label}
              </NavLink>
            );
          })}

          {/* CTA inside mobile panel – dynamic label too */}
          <Button
            as="button"
            type="button"
            onClick={() => {
              scrollToContactStrip();
              setMobileOpen(false);
            }}
          >
            <span className="relative z-10">{ctaLabel}</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
