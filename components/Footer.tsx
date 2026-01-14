import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-6xl mx-auto px-12 py-20">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT — LOGO + SOCIAL */}
          <div className="space-y-10">
            {/* Logo */}
            <Image
              src="/images/logof.png"
              alt="Vardhan Photo Factory"
              width={300}
              height={300}
              className="object-contain"
              priority
            />

            {/* Social icons */}
            <div className="flex gap-6 text-gray-400">
              <a
                href="https://www.instagram.com/vardhanphotofactory/"
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <Instagram size={22} />
              </a>

              <a
                href="mailto:vardhanphotofactory@gmail.com"
                aria-label="Email"
                className="hover:text-white transition"
              >
                <Mail size={22} />
              </a>

              <a
                href="tel:+919000302848"
                aria-label="Phone"
                className="hover:text-white transition"
              >
                <Phone size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT — CONTACT */}
          <div className="text-sm text-gray-400 space-y-5">
            <p className="leading-relaxed">
              <span className="text-gray-300">Vardhan Photo Factory</span><br />
              Andhra Pradesh, Telangana<br />
              India
            </p>

            <p>
              <span className="text-gray-500">Phone</span><br />
              +91 90003 02848
            </p>

            <p>
              <span className="text-gray-500">Email</span><br />
              vardhanphotofactory@gmail.com
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Vardhan Photo Factory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
