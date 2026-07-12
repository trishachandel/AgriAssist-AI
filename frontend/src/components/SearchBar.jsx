import { Search, X } from "lucide-react";

function SearchBar({
  value,
  onChange,
  onClear,
}) {
  return (
    <div className="flex items-center rounded-xl bg-white p-4 shadow">

      <Search className="mr-3 text-gray-500" />

      <input
        type="text"
        placeholder="Search crops..."
        className="w-full outline-none"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

      {value && (
        <button
          onClick={onClear}
          className="ml-2"
        >
          <X />
        </button>
      )}

    </div>
  );
}

export default SearchBar;