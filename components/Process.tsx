"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="relative py-28 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* LEFT — PROCESS */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-20"
          >
            Our process
          </motion.h2>

          <div className="relative space-y-20">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-neutral-800 border border-white/20 flex items-center justify-center text-sm text-gray-300">
                  {item.step}
                </div>

                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 max-w-xl leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — BIG GLOWING LOGO */}
        <div className="relative hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow layer */}
            <div className="absolute inset-0 scale-110 blur-3xl bg-white/20 rounded-full" />

            {/* Logo */}
            <Image
              src="/images/logo.png"
              alt="Vardhan Photo Factory"
              width={520}   // BIG width for wide logo
              height={200}
              className="relative object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
