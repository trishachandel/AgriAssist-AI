import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Button,
  Input,
  Loader,
  Modal,
} from "../components/ui";

function ComponentsDemo() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">

        <h1 className="mb-10 text-4xl font-bold text-green-700">
          Component Library
        </h1>

        <div className="space-y-10">

          <div>

            <h2 className="mb-4 text-2xl font-semibold">
              Buttons
            </h2>

            <div className="flex gap-4">

              <Button variant="primary">
                Primary
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="outline">
                Outline
              </Button>

            </div>

          </div>

          <div>

            <h2 className="mb-4 text-2xl font-semibold">
              Input
            </h2>

            <Input
              label="Crop Name"
              placeholder="Enter crop..."
            />

          </div>

          <div>

            <h2 className="mb-4 text-2xl font-semibold">
              Loader
            </h2>

            <Loader />

          </div>

          <div>

            <Button
              onClick={() => setOpen(true)}
            >
              Open Modal
            </Button>

          </div>

        </div>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="AgriAssist AI"
        >
          <p>
            This modal is part of the reusable UI component library.
          </p>
        </Modal>

      </section>

      <Footer />
    </>
  );
}

export default ComponentsDemo;