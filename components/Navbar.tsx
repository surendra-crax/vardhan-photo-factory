"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide">
          Vardhan<span className="text-gray-400">.</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          <li className="hover:text-white transition cursor-pointer">Work</li>
          <li className="hover:text-white transition cursor-pointer">Services</li>
          <li className="hover:text-white transition cursor-pointer">About</li>
        </ul>

        {/* CTA */}
        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
          Book Now
        </button>
      </nav>
    </header>
  );
}
