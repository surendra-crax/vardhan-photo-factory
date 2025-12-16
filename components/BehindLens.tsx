"use client";

import { motion } from "framer-motion";

export default function BehindLens() {
  return (
    <section className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[420px] rounded-2xl overflow-hidden bg-neutral-800"
          style={{
            backgroundImage: "url('images/SW1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Behind the Lens
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real people.
            <br />
            Real moments.
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md">
            We blend into your moments, letting things happen naturally
            while capturing frames that feel honest and cinematic.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
