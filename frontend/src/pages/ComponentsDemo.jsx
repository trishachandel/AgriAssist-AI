import { useState } from "react";
import toast from "react-hot-toast";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ComponentsDemo() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <h1>UI Components Demo</h1>

      {/* Toast Container */}
      <Toast />

      <h2>1. Button</h2>
      <Button onClick={() => toast.success("Button clicked!")}>
        Primary Button
      </Button>

      <h2>2. Input</h2>
      <Input
        label="Your Name"
        placeholder="Enter your name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>3. Modal</h2>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Demo Modal"
      >
        <p>This is a sample modal window.</p>
      </Modal>

      <h2>4. Loader</h2>
      <Loader />
    </div>
  );
}

export default ComponentsDemo;