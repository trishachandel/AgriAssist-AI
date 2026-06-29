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
  children
}) {

  useEffect(() => {

    const handleEscape = (e) => {
      if(e.key==="Escape"){
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );

  }, [onClose]);

  if(!isOpen) return null;

  return (
    <div>
      <h2>{title}</h2>

      {children}

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Modal;