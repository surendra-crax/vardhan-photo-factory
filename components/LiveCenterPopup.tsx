"use client";

import { useEffect, useState } from "react";

/* =======================
   CHANGE ONLY THESE
======================= */
const LIVE_YOUTUBE_URL = "https://www.youtube.com/live/xaruPee2sCA?si=t8ROSPhihInPvaZv";
const THUMBNAIL_URL = "/images/thumb1.jpg";

/* animation speed (slow & smooth) */
const ANIMATION_DURATION = 700; // ms

const LiveCenterPopup = (): JSX.Element | null => {
  const [render, setRender] = useState(false);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* detect screen size */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* enter animation on every load */
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

        <h1 style={styles.title}>LIVE NOW</h1>

        <p
          style={{
            ...styles.subtitle,
            marginBottom: isMobile ? 22 : 32,
          }}
        >
          Watch our studio shoot live
        </p>

        <a
          href={LIVE_YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.liveBtn,
            padding: isMobile ? "12px 28px" : "16px 48px",
            fontSize: isMobile ? 14 : 18,
            whiteSpace: "nowrap",
          }}
        >
          🔴 Watch Live on YouTube
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
    maxWidth: 960,            // 4:3 container
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
    padding: "32px",
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
    cursor: "pointer",
  },

  thumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  title: {
    fontSize: "clamp(30px, 4vw, 46px)",
    letterSpacing: 5,
    marginBottom: 12,
    color: "#fff",
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
