import React from "react";

const Button = ({
  children = "Enquire Now",
  variant = "primary", // can extend later
  className = "",
  as = "button",
  ...props
}) => {
  const Component = as;

  // base classes shared by all variants
  const base =
    "group relative inline-flex items-center justify-center h-heading rounded-full shadow-md overflow-hidden transition-all duration-300 ease-out";

  // visual style for primary CTA
  const primary =
    "px-7 py-2.5 text-base uppercase tracking-[0.15rem] text-white";

  const combined = `${base} ${primary} ${className}`.trim();

  return (
    <Component className={combined} {...props}>
      {/* base background = GRUN (#008865) */}
      <span
        className="absolute inset-0 rounded-full bg-[color:var(--color-brand-primary)]"
        aria-hidden="true"
      />
      {/* overlay = dark green (#084f25), width 0 → 100% on hover/tap */}
      <span
        className="
          w-0 absolute inset-0 rounded-full
          bg-[color:var(--color-brand-dark)]
          transition-all duration-300 ease-out
          group-hover:w-full group-active:w-full
        "
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default Button;