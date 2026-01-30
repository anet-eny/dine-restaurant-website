export default function Button({
  variant = "active",
  onClick,
  children,
  type = "button",
  theme = "dark",
  className = "",
}) {
  const baseStyles =
    "button-text border px-10 py-6 transition-colors duration-200";

  const mediumVariants = {
    active:
      "bg-transparent hover:bg-cod-gray text-cod-gray hover:text-white cursor-pointer",
    disabled: "opacity-25 cursor-not-allowed",
  };

  const lightVariants = {
    active:
      "bg-transparent hover:bg-white text-white hover:text-mirage cursor-pointer",
    disabled: "opacity-25 cursor-not-allowed",
  };

  const darkVariants = {
    active:
      "bg-cod-gray hover:bg-white text-white hover:text-cod-gray cursor-pointer",
    disabled: "opacity-25 cursor-not-allowed",
  };

  const variants =
    theme === "light"
      ? lightVariants
      : theme === "dark"
        ? darkVariants
        : mediumVariants;

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
