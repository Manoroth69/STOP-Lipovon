

export function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "px-4 py-2 font-bold rounded cursor-pointer";
  const variants = {
    primary: "bg-blue-600/90 text-black transition ", // or use `bg-button-primary text-button-primary`
    secondary: "bg-transparent text-black border border-[#bdc3c7] hover:bg-[#c849f8] hover:text-black transition",
    tertiary: "bg-transparent text-black  border border-[#000] hover:bg-[#c849f8] hover:text-black transition",
  };

  return (
    <button
      {...props}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
}