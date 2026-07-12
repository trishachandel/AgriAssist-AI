/**
 * Toast Component
 */

import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#166534",
          color: "#ffffff",
          borderRadius: "10px",
        },
      }}
    />
  );
}

export default Toast;