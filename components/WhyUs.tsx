"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Cinematic Quality",
    desc: "Every frame is edited to feel like a movie still.",
  },
  {
    title: "No Awkward Poses",
    desc: "Natural moments. Real emotions. Nothing forced.",
  },
  {
    title: "Fast Delivery",
    desc: "Because memories shouldn’t wait.",
  },
];

export default function WhyUs() {
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
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-white/10 pt-8"
            >
              <h3 className="text-xl font-semibold mb-3">
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
