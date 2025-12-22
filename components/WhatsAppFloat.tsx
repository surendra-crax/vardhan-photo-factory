"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919000344735"; // country code + number
const MESSAGE =
  "Hi, I’m interested in booking a photoshoot with Vardhan Photo Factory.";

export default function WhatsAppFloat() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      
      {/* CHAT BUBBLE */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white text-black text-xs px-4 py-2 rounded-2xl shadow-lg"
      >
        Chat with us on WhatsApp

        {/* Bubble tail */}
        <span className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white rotate-45" />
      </motion.div>

      {/* WHATSAPP ICON */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl"
      >
        <FaWhatsapp size={28} className="text-white" />
      </motion.a>
    </div>
  );
}
