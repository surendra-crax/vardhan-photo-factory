"use client";

import { useState } from "react";

type EventType = {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  thumbnail: string;
  youtubeLiveUrl: string;
  photoUrl: string;
};

export default function LivePage() {
  const [search, setSearch] = useState("");

  const events: EventType[] = [
    {
      id: 1,
      name: "HARSHA WEDS RAMYA || 25-2-2026 ||",
      description:
        "Experience the ceremony live with cinematic coverage and premium streaming.",
      date: "25 February 2026",
      location: "Hyderabad, India",
      thumbnail: "/thumbnail/feb 24.jpg", // ✅ correct path
      youtubeLiveUrl: "https://www.youtube.com/live/5s70vl7hfDc?si=7_NgFxJNLHMNKaik",
      photoUrl: "https://link.camtom.in/N8I6susAA2TCMhcMiEqh",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="relative min-h-screen bg-black text-white pt-32 pb-24 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/20 blur-[180px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* SEARCH BAR */}
        <div className="mb-16">
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search event by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-500 transition"
            />
          </div>
        </div>

        {/* EVENTS */}
        <div className="space-y-24">

          {filteredEvents.length === 0 && (
            <p className="text-center text-gray-400">
              No events found.
            </p>
          )}

          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="grid lg:grid-cols-6 gap-12 items-center"
            >
              {/* LEFT — IMAGE */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

                  <img
                    src={event.thumbnail}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

              {/* RIGHT — DETAILS */}
              <div className="lg:col-span-2 space-y-6">

                <a
                  href={event.youtubeLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full overflow-hidden rounded-2xl py-4 text-lg font-semibold text-white text-center backdrop-blur-xl border border-white/20 bg-gradient-to-b from-red-500/80 to-red-700/80 shadow-[0_10px_40px_rgba(255,0,0,0.5)] transition hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span className="relative z-10">🔴 Watch Live</span>
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-40 pointer-events-none" />
                </a>

                <a
                  href={event.photoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full overflow-hidden rounded-2xl py-4 text-lg font-semibold text-white text-center backdrop-blur-xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span className="relative z-10">📸 Get Photos</span>
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-30 pointer-events-none" />
                </a>

                <div className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {event.name}
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-1 text-xs text-gray-500">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
