import { useEffect } from "react";

/**
 * Props:
 * isOpen
 * onClose
 * title
 * children
 */

function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {

  useEffect(() => {

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };

  }, [onClose]);

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black/50">

      <div className="w-96 rounded-xl bg-white p-6 shadow-xl">

        <h2 className="mb-4 text-2xl font-bold text-green-700">
          {title}
        </h2>

        <div className="mb-6">
          {children}
        </div>

        <button
          onClick={onClose}
          className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
        >
          Close
        </button>

      </div>

    </div>

  );
}

export default Modal;