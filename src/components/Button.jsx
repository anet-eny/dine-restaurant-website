export default function Button({
  variant = "active",
  onClick,
  children,
  type = "button",
  theme = "dark",
  className = "",
}) {
  const baseStyles =
    "bg-transparent button-text border px-10 py-6 transition-colors duration-200";

  const darkVariants = {
    active: "hover:bg-cod-gray text-cod-gray hover:text-white cursor-pointer",
    disabled: "opacity-25 cursor-not-allowed",
  };

  const lightVariants = {
    active: "hover:bg-white text-white hover:text-mirage cursor-pointer",
    disabled: "opacity-25 cursor-not-allowed",
  };

  const variants = theme === "light" ? lightVariants : darkVariants;

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={variant === "active" ? onClick : undefined}
      disabled={variant === "disabled"}
      type={type}
    >
      {children}
    </button>
  );
}
