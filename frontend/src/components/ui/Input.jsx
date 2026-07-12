/**
 * Props:
 * label
 * placeholder
 * type
 * name
 * value
 * onChange
 * error
 */

function Input({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-5">
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        className="w-full rounded-lg border p-3 focus:border-green-700 focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;