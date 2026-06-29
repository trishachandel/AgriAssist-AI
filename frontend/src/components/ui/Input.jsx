/**
 * Props:
 * label
 * placeholder
 * type
 * value
 * onChange
 * error
 */

function Input({
  label,
  placeholder,
  type="text",
  value,
  onChange,
  error
}) {

  return (
    <div>
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;