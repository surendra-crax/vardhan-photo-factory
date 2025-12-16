"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/sw1.jpg",
  "/images/sw2.jpg",
  "/images/sw3.jpg",
  "/images/sw4.jpg",
  "/images/sw5.jpg",
  "/images/sw6.jpg",
];

export default function SignatureWork() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Signature Work
        </motion.h2>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative h-[380px] overflow-hidden rounded-xl bg-neutral-900"
            >
              <Image
                src={src}
                alt={`Signature work ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
