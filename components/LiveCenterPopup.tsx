"use client";

import { useEffect, useState } from "react";

/* =======================
   CHANGE ONLY THESE
======================= */
const LIVE_YOUTUBE_URL =
  "https://www.youtube.com/live/xaruPee2sCA?si=t8ROSPhihInPvaZv";

const PHOTO_URL =
  "https://link.camtom.in/N8I6susAA2TCMhcMiEqh"; // 🔁 Add your photos page link

const THUMBNAIL_URL = "/thumbnail/feb 24.jpg";

/* animation speed */
const ANIMATION_DURATION = 700;

const LiveCenterPopup = () => {
  const [render, setRender] = useState(false);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setRender(true);
    requestAnimationFrame(() => setActive(true));
  }, []);

  const closePopup = () => {
    setActive(false);
    setTimeout(() => setRender(false), ANIMATION_DURATION);
  };

  if (!render) return null;

  return (
    <div style={styles.overlay}>
      <div
        style={{
          ...styles.popup,
          ...(active ? styles.enter : styles.exit),
        }}
      >
        <button style={styles.close} onClick={closePopup}>
          ✕
        </button>

        {/* Thumbnail */}
        <div
          style={{
            ...styles.thumbWrap,
            width: isMobile ? "95%" : "85%",
            maxWidth: isMobile ? 420 : 720,
          }}
        >
          <img
            src={THUMBNAIL_URL}
            alt="Live preview"
            style={styles.thumb}
          />
        </div>

        <h1 style={styles.title}>GRAND WEDDING OF <br></br> HARSHA & RAMYA</h1>

        <p
          style={{
            ...styles.subtitle,
            marginBottom: 24,
          }}
        >
          Watch our studio shoot live
        </p>

        {/* Watch Live Button */}
        <a
          href={LIVE_YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.liveBtn,
            padding: isMobile ? "12px 28px" : "16px 48px",
            fontSize: isMobile ? 14 : 18,
            whiteSpace: "nowrap",
            marginBottom: 16,
          }}
        >
          🔴 Watch Live on YouTube
        </a>

        {/* Get Photos Button */}
        <a
          href={PHOTO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.liveBtn,
            padding: isMobile ? "12px 28px" : "16px 48px",
            fontSize: isMobile ? 14 : 18,
            whiteSpace: "nowrap",
            background:
              "linear-gradient(180deg, #ffffff, #dddddd)",
            color: "#000",
            boxShadow: "0 0 30px rgba(255,255,255,0.6)",
          }}
        >
          📸 Get Photos
        </a>
      </div>
    </div>
  );
};

export default LiveCenterPopup;

/* =======================
          STYLES
======================= */

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(circle at top, rgba(255,255,255,0.06), rgba(0,0,0,0.95))",
    backdropFilter: "blur(10px)",
    zIndex: 10000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  popup: {
    width: "90vw",
    maxWidth: 960,
    aspectRatio: "4 / 3",
    background: "linear-gradient(145deg, #0b0b0b, #000)",
    borderRadius: 22,
    boxShadow:
      "0 40px 120px rgba(0,0,0,0.8), inset 0 0 40px rgba(255,255,255,0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 32,
    position: "relative",
    transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(.22,1,.36,1),
                 opacity ${ANIMATION_DURATION}ms cubic-bezier(.22,1,.36,1)`,
    willChange: "transform, opacity",
  },

  enter: {
    transform: "translateY(0)",
    opacity: 1,
  },

  exit: {
    transform: "translateY(140px)",
    opacity: 0,
  },

  close: {
    position: "absolute",
    top: 18,
    right: 22,
    background: "transparent",
    border: "none",
    color: "#aaa",
    fontSize: 26,
    cursor: "pointer",
  },

  thumbWrap: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 28,
    boxShadow: "0 0 50px rgba(0,0,0,0.7)",
  },

  thumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  title: {
  fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
  letterSpacing: "0.02em",
  marginBottom: 16,
},

  subtitle: {
    fontSize: "clamp(15px, 2vw, 20px)",
    color: "#bbb",
  },

  liveBtn: {
    background: "linear-gradient(180deg, #ff2d2d, #b30000)",
    color: "#fff",
    fontWeight: 700,
    borderRadius: 48,
    textDecoration: "none",
    boxShadow: "0 0 40px rgba(255,0,0,0.7)",
  },
};