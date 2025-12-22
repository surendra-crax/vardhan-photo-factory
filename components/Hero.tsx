"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero1.jpg"
            alt="Cinematic photography hero"
            fill
            priority
            quality={100}
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              Not just photos.
              <br />
              <span className="text-gray-300">Moments.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-gray-300"
            >
              Cinematic wedding, portrait, and event photography
              crafted to feel timeless.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10"
            >
              <button
                onClick={() => setOpen(true)}
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                Book a Shoot
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
