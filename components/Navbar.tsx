"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Vardhan Photo Factory"
              width={180}
              height={44}
              priority
              className="object-contain w-[140px] sm:w-[180px]"
            />
          </Link>

          {/* CTA BUTTONS */}
          <div className="flex items-center gap-3">

            {/* iOS Glossy Button */}
            <Link
              href="/live"  // 🔁 change to your desired page
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative overflow-hidden
                rounded-full font-medium
                px-4 py-2 text-xs
                sm:px-5 sm:py-2 sm:text-sm
                text-white
                bg-gradient-to-b from-white/40 via-white/20 to-white/10
                backdrop-blur-xl
                border border-white/30
                shadow-[0_4px_20px_rgba(255,255,255,0.2)]
                transition-all duration-300
                hover:scale-[1.05]
                active:scale-[0.98]
              "
            >
              {/* Gloss Highlight */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              Live Events
            </Link>

            {/* Book Now Button */}
            <button
              onClick={() => setOpen(true)}
              className="
                rounded-full font-medium transition
                bg-white text-black
                px-4 py-2 text-xs
                sm:px-5 sm:py-2 sm:text-sm
                hover:bg-gray-200
                active:scale-[0.98]
              "
            >
              Book Now
            </button>

          </div>
        </nav>
      </header>

      {/* CONTACT MODAL */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
