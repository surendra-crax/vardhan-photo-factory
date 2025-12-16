"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const portfolios = [
  {
    title: "Weddings",
    image: "/images/SW1.jpg",
    href: "/portfolio/weddings",
  },
  {
    title: "Portraits",
    image: "/images/SW2.jpg",
    href: "/portfolio/weddings", // TEMP
  },
  {
    title: "Events",
    image: "/images/SW3.jpg",
    href: "/portfolio/weddings", // TEMP
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolios.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="group relative block h-[420px] overflow-hidden rounded-2xl"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 md:bg-black/40 md:group-hover:bg-black/60 transition" />

                {/* Text */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <span
                    className="
                      text-sm text-gray-300
                      opacity-100
                      md:opacity-0 md:group-hover:opacity-100
                      transition
                    "
                  >
                    View previous work →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
