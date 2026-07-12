/**
 * Props:
 * children
 * variant
 * size
 * disabled
 * onClick
 */

function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const variants = {
    primary: "bg-green-700 text-white hover:bg-green-800",
    secondary: "bg-gray-700 text-white hover:bg-gray-800",
    outline: "border border-green-700 text-green-700 hover:bg-green-100",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3",
    lg: "w-full px-6 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-lg font-medium transition ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;