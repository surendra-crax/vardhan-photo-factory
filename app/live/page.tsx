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
      id: 21,
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
      id: 20,
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
      id: 19,
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
      id: 18,
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
      id: 17,
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
      id: 16,
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
      id: 15,
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
      id: 14,
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
      id: 13,
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
      id: 12,
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
      id:11,
      name: "DOTHI CEREMONY HASWANTH & KUSAL|| 17-6-2026 ||",
      description:
        "Experience the dothi ceremony with live photos.",
      date: "2026-06-17",
      location: "Velpuru, Andhrapradesh",
      thumbnail: "/thumbnail/June12.jpg",
      youtubeLiveUrl: "https://youtube.com/live/hhIvhEjMwgA?feature=share",
      photoUrl: "https://link.camtom.in/ouTX4XRbZmHo2CSY89hD",
    },
    {
      id: 10,
      name: "ENGAGEMENT CEREMONY OF VINAY & MAHATHI|| 25-6-2026 ||",
      description:
        "Experience the dothi ceremony with live photos.",
      date: "2026-06-25",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/June 25.jpg",
      youtubeLiveUrl: "https://youtube.com/live/6TRlTlqIm7E?feature=share",
      photoUrl: "https://link.camtom.in/vLmB95TNzuetHmpj4rk4",
    },
    {
      id: 9,
      name: "ETarak Dhothi Ceremony | Harshaali Half Saree Ceremony|| 28-6-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-06-28",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/June 28.jpg",
      youtubeLiveUrl: "https://youtube.com/live/xqVpCtqujzM?feature=share",
      photoUrl: " https://link.camtom.in/byf6fclgksQ24x0JOye9",
    },
    {
      id: 8,
      name: "WEDDING OF STEVEN ROY WITH SOWJANYA HOLY MATRIMONY || 29-6-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-06-29",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/June 29 Web.jpg",
      youtubeLiveUrl: "#https://youtube.com/live/xqVpCtqujzM?feature=share",
      photoUrl: " https://link.camtom.in/uapah3XKzgLw2HvXpLkH",
    },
    {
      id: 7,
      name: "1ST BIRTHDAY OF SARVAJNA EESHA || 14-7-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-07-14",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/July 14 Web.jpg",
      youtubeLiveUrl: "#https://youtube.com/live/xqVpCtqujzM?feature=share",
      photoUrl: " https://link.camtom.in/HYDOPZk6iDx809ejkZB6",
    },
    {
      id: 6,
      name: "WEDDING OF NAVEEN WITH NANISHA|| 16-7-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-07-16",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/Juluy 16 web.jpg",
      youtubeLiveUrl: "#https://youtube.com/live/xqVpCtqujzM?feature=share",
      photoUrl: "https://link.camtom.in/aZNxO0qYIVSluU3Synyg",
    },
     {
      id: 5,
      name: "DEVALLA'S NEW CLOTH CEREMONY|| 18-7-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-07-18",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/July 18 web.jpg",
      youtubeLiveUrl: "#https://youtube.com/live/xqVpCtqujzM?feature=share",
      photoUrl: "https://link.camtom.in/ZYq42cz5hI09ltGFsNo7",
    },
    {
      id: 4,
      name: "VIBHAV NEW CLOTHES CEREMONY| 29-7-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-07-29",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/July 29 eve.jpg",
      youtubeLiveUrl: "https://youtube.com/live/fcxp_Sue9d8?feature=share",
      photoUrl: "https://link.camtom.in/Gjx6WNjmQESYgLbD3r8L",
    },{
      id: 3,
      name: "TEJA SAI KRISHNA AND SIVA RANJANI HALDI AND SANGEET CEREMONY| 14-8-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-08-14",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/August 14.jpg",
      youtubeLiveUrl: "https://youtube.com/live/tpM9d4fSx_s?feature=share",
      photoUrl: "https://link.camtom.in/TlKeMRU2vj4JuRZzdFW7",
    },{
      id: 2,
      name: "WEDDING OF TEJA SAI KRISHNA & SIVA RANJANI | 1/5-8-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-08-15",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/August 15.jpg",
      youtubeLiveUrl: "https://youtube.com/live/jNvtYlgzh48?feature=share",
      photoUrl: "https://link.camtom.in/nZBkmcYvtB4VPyciTUkR",
    },{
      id: 1,
      name: "WEDDING CEREMONY OF MOHAN AND PHANISRI | 15-8-2026 ||",
      description:
        "Experience the ceremony with live photos.",
      date: "2026-08-15",
      location: "Tanuku, Andhrapradesh",
      thumbnail: "/thumbnail/August 15-1.jpg",
      youtubeLiveUrl: "https://youtube.com/live/n19WZfYrPpg?feature=share",
      photoUrl: "https://link.camtom.in/AtuSrtgauu6eSGtpbi3B",
    }
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
                 {/* { <a
                  href={event.youtubeLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full overflow-hidden rounded-2xl py-4 text-lg font-semibold text-white text-center backdrop-blur-xl border border-white/20 bg-gradient-to-b from-red-500/80 to-red-700/80 shadow-[0_10px_40px_rgba(255,0,0,0.5)] transition hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span className="relative z-10">🔴 Watch Live</span>
                </a> } */ }

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
