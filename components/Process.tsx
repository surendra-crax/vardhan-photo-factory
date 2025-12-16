"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Shoot",
    desc: "We focus on natural moments and cinematic framing.",
  },
  {
    step: "02",
    title: "Edit",
    desc: "Every photo is carefully color-graded and refined.",
  },
  {
    step: "03",
    title: "Deliver",
    desc: "High-quality images, delivered fast and ready to share.",
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-white/10 pt-8"
            >
              <span className="text-sm text-gray-400">
                {item.step}
              </span>
              <h3 className="text-2xl font-semibold mt-3 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
