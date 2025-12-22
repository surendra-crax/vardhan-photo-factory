"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "@/components/ContactModal";

export default function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-40 bg-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s shoot something unforgettable.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-10"
        >
          Ready when you are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setOpen(true)}
            className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Book a Shoot
          </button>
        </motion.div>
      </section>

      {/* CONTACT MODAL */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
