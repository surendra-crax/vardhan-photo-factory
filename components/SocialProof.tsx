"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ananya",
    text: "Felt like a movie shoot. Super comfortable and loved every frame.",
  },
  {
    name: "Rahul",
    text: "Didn’t even feel posed. The photos came out insane.",
  },
  {
    name: "Sneha",
    text: "Worth every rupee. The edits were clean and classy.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          Client Love
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-xl p-8"
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                “{review.text}”
              </p>
              <span className="text-sm text-gray-500">
                — {review.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
