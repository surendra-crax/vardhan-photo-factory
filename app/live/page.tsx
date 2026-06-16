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
      id: 11,
      name: "HARSHA WEDS RAMYA || 25-2-2026 ||",
      description:
        "Experience the ceremony live with cinematic coverage and premium streaming.",
      date: "2026-02-25",
      location: "Hyderabad, India",
      thumbnail: "/thumbnail/feb 24.jpg",
      youtubeLiveUrl:  "#https://www.youtube.com/live/5s70vl7hfDc?si=7_NgFxJNLHMNKaik",
      photoUrl: "https://link.camtom.in/N8I6susAA2TCMhcMiEqh",
    },
    {
      id: 10,
      name: "Yaswanth Weds Jyothisri || 4-3-2026 ||",
      description:
        "Experience the ceremony live with cinematic coverage and premium streaming.",
      date: "2026-03-04",
      location: "Tanuku, India",
       thumbnail: "/thumbnail/march 4.jpg",
      youtubeLiveUrl: "#https://www.youtube.com/watch?v=pi4YqgNsSUc",
      photoUrl: "https://link.camtom.in/3btTWwEEV9msgOFnlbCh",
    },
    {
      id: 9,
      name: "Kesava Weds Sri Vidya || 7-3-2026 ||",
      description:
        "Experience the ceremony live with cinematic coverage and premium streaming.",
      date: "2026-03-07",
      location: "Pasalapudi,chelluru road, chelluru.",
      thumbnail: "/thumbnail/march 7.png",
      youtubeLiveUrl: "#https://www.youtube.com/live/ZJ-cxOBmW2A",
      photoUrl: "#",
    },
    {
      id: 8,
      name: "Pranavi Weds Chandra sekhar || 11-3-2026 ||",
      description:
        "Experience the ceremony live with cinematic coverage and premium streaming.",
      date: "2026-03-11",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/march 11.jpg",
      youtubeLiveUrl: "#https://youtube.com/live/V1Dd26uBbMo?feature=share",
      photoUrl: "https://link.camtom.in/1FqUgopWjyEQ88V4jiZ7",
    },
    {
      id: 7,
      name: "Surya weds Deepti || 03-4-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-04-03",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/april 3.jpg",
      youtubeLiveUrl: "#https://youtube.com/live/V1Dd26uBbMo?feature=share",
      photoUrl: "https://link.camtom.in/dkBMfSS8hkbXoSXoz7wb",
    },
    {
      id: 6,
      name: "Rohit weds Sudha Rani || 11-4-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-04-11",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/april 11.jpg",
      youtubeLiveUrl: "#https://youtube.com/live/EpzyGlHKU70",
      photoUrl: "https://link.camtom.in/bGWhgaaZnr3BymzfOcFQ",
    },
    {
      id: 5,
      name: "Naresh weds Hima bindu || 25-4-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-04-25",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/april 25.jpeg",
      youtubeLiveUrl: "#https://youtube.com/live/EpzyGlHKU70",
      photoUrl: "https://link.camtom.in/YmppGqDz6LWWjJxhkDbu",
    },
    {
      id: 4,
      name: "Sree Bhagya weds Sai || 30-4-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-04-30",
      location: "Velpuru, Andhrapradesh",
      thumbnail: "/thumbnail/May 1.jpg",
      youtubeLiveUrl: "#https://youtube.com/live/EpzyGlHKU70",
      photoUrl: "https://link.camtom.in/TJYv2kK3RCm8Cux6Zu51",
    },
    {
      id: 3,
      name: "Vamsi Chandra weds Venkata Satya || 01-5-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-05-01",
      location: "Velpuru, Andhrapradesh",
      thumbnail: "/thumbnail/May1(2).jpg",
      youtubeLiveUrl: "#https://youtube.com/live/EpzyGlHKU70",
      photoUrl: "https://link.camtom.in/tZRkdnJP35TNLh8BcgT1",
    },
    {
      id: 2,
      name: "First birthday of Midhuna|| 02-6-2026 ||",
      description:
        "Experience the birthday party with live photos.",
      date: "2026-06-02",
      location: "Velpuru, Andhrapradesh",
      thumbnail: "/thumbnail/Web.jpg",
       youtubeLiveUrl: "#https://youtube.com/live/EpzyGlHKU70",
      photoUrl: "https://link.camtom.in/0kWNDBaOfkacnzfdNJqu",
    },
     {
      id: 1,
      name: "First birthday of Midhuna|| 17-6-2026 ||",
      description:
        "Experience the birthday party with live photos.",
      date: "2026-06-17",
      location: "Velpuru, Andhrapradesh",
      thumbnail: "/thumbnail/June12.jpg",
      youtubeLiveUrl: "https://youtube.com/live/hhIvhEjMwgA?feature=share",
      photoUrl: "https://link.camtom.in/ouTX4XRbZmHo2CSY89hD",
    },
  ];

  const filteredEvents = [...events]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .filter((event) =>
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
              {/* LEFT IMAGE */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                  <img
                    src={event.thumbnail}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT DETAILS */}
              <div className="lg:col-span-2 space-y-6">
                 {/* <a
                  href={event.youtubeLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full overflow-hidden rounded-2xl py-4 text-lg font-semibold text-white text-center backdrop-blur-xl border border-white/20 bg-gradient-to-b from-red-500/80 to-red-700/80 shadow-[0_10px_40px_rgba(255,0,0,0.5)] transition hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span className="relative z-10">🔴 Watch Live</span>
                </a> */}

                <a
                  href={event.photoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full overflow-hidden rounded-2xl py-4 text-lg font-semibold text-white text-center backdrop-blur-xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span className="relative z-10">📸 Get Photos</span>
                </a> 

                <div className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {event.name}
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-1 text-xs text-gray-500">
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(event.date).toDateString()}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
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
