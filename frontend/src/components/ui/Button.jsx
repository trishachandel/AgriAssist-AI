/**
 * Props:
 * variant: primary | secondary | outline
 * size: sm | md | lg
 * disabled: boolean
 * onClick: function
 */

function Button({
  children,
  variant="primary",
  size="md",
  disabled=false,
  onClick
}) {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;