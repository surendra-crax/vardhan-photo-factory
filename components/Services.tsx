"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

/* =========================
   PHOTOGRAPHY DATA
========================= */
const photography = [
  {
    title: "Weddings",
    image: "/images/SW1.jpg",
    href: "/portfolio/weddings",
  },
  {
    title: "Portraits",
    image: "/images/SW2.jpg",
    href: "/portfolio/weddings",
  },
  {
    title: "Events",
    image: "/images/SW3.jpg",
    href: "/portfolio/weddings",
  },
];

/* =========================
   VIDEOGRAPHY DATA
========================= */
const videography = [
  {
    title: "Wedding Film",
    videoId: "2-dtsSZlbcc",
  },
  {
    title: "Engagement Highlight",
    videoId: "k6AcMqVd6jY",
  },
  {
    title: "Cinematic Teaser",
    videoId: "VherktTedPM",
  },
  {
    title: "Wedding Film",
    videoId: "leHulwdUdFw",
  },
  {
    title: "Engagement Highlight",
    videoId: "kHb_WILNQjc",
  },
  {
    title: "Cinematic Teaser",
    videoId: "l7-hGGhcD3U",
  },
  
];

export default function Services() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* =========================
            PHOTOGRAPHY SECTION
        ========================= */}
        <div>
          <center><h2 className="text-4xl md:text-5xl font-bold mb-16">
            Photography
          </h2></center>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photography.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="group relative block h-[420px] overflow-hidden rounded-2xl"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <span className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
                      View gallery →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================
            VIDEOGRAPHY SECTION
        ========================= */}
        <div>
          <center><h2 className="text-4xl md:text-5xl font-bold mb-16">
            Videography
          </h2></center>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videography.map((video, index) => (
              <div key={index} className="relative">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black group">

                  {activeVideo === video.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setActiveVideo(video.videoId)}
                      className="relative w-full h-full cursor-pointer"
                    >
                      {/* Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition group-hover:scale-105 duration-500"
                      />

                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

                      {/* White Outline Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10 transition group-hover:scale-110">
                          <span className="text-white text-2xl ml-1">▶</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-medium">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}