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
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Vardhan Photo Factory"
              width={220}
              height={52}
              priority
              className="object-contain"
            />
          </Link>

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            Book Now
          </button>
        </nav>
      </header>

      {/* CONTACT MODAL */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
