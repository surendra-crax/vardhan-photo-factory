"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919000344735"; // countrycode + number
const MESSAGE =
  "Hi, I’m interested in booking a photoshoot with Vardhan Photo Factory.";

export default function WhatsAppFloat() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      
      {/* NOTIFICATION BUBBLE */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -6] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "easeInOut",
        }}
        className="relative bg-white text-neutral-800 text-xs px-4 py-2 rounded-2xl shadow-lg"
      >
        Chat with us on WhatsApp
        {/* Tail */}
        <span className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white rotate-45" />
      </motion.div>

      {/* WHATSAPP ICON (STATIC) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-105 transition"
      >
        <FaWhatsapp size={28} className="text-white" />
      </a>
    </div>
  );
}
