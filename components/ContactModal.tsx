"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      onClose();
      alert("Request submitted successfully");
    } else {
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[9999]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center px-6"
          >
            <div
              className="w-full max-w-md bg-neutral-900 rounded-2xl p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-6">
                Book a Shoot
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm"
                />

                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm"
                />

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your shoot"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black py-3 rounded-full font-medium"
                >
                  {loading ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
