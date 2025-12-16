export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-lg font-semibold">
          Vardhan<span className="text-gray-400">.</span>
        </div>

        {/* Info */}
        <div className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Vardhan Photo Factory. All rights reserved.
        </div>

        {/* Social */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition">
            WhatsApp
          </a>
          <a href="#" className="hover:text-white transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
