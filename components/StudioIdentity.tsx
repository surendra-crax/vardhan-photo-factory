"use client";

import { motion } from "framer-motion";

export default function StudioIdentity() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-gray-400 mb-6"
        >
          Our Identity
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          We don’t chase trends.
          <br />
          <span className="text-gray-300">
            We capture timeless stories.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
