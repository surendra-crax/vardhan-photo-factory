import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/sw1.jpg",
  "/images/sw2.jpg",
  "/images/sw3.jpg",
  "/images/sw4.jpg",
  "/images/sw5.jpg",
  "/images/sw6.jpg",
  "/images/sw7.jpg",
  "/images/sw8.jpg",
];

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-28">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Weddings
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Real moments. Honest emotions. Wedding stories captured
            with intention and timeless framing.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900"
            >
              <Image
                src={src}
                alt={`Wedding ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index < 3}
              />
            </div>
          ))}
        </div>

        {/* BACK LINK */}
        <div className="mt-24">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
