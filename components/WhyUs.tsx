"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const points = [
  {
    title: "We shoot with purpose",
    desc: "Every click is intentional. No overshooting. No randomness.",
  },
  {
    title: "We keep moments natural",
    desc: "No forced poses. We let real emotions happen.",
  },
  {
    title: "We deliver timeless edits",
    desc: "Clean colors, honest tones, and photos that age well.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT — CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            Our approach
          </motion.h2>

          <div className="space-y-12">
            {points.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-l border-white/20 pl-6"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[420px] w-full overflow-hidden rounded-xl bg-neutral-800"
        >
          <Image
            src="/images/approach.jpg"
            alt="Our photography approach"
            fill
            className="object-cover"
            priority
          />

          {/* subtle overlay for text balance */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
