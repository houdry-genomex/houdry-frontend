"use client";

import { useEffect, useRef, useState } from "react";

const SOP_VIDEO_SRC = "/sop-edited.mp4";

export function HeroProductVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      video.pause();
      return;
    }
    video.play().catch(() => {
      // Autoplay can be blocked until a gesture; muted loop still retries.
    });
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (video.paused) {
      void video.play();
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[20px] bg-black shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)]">
      <video
        ref={videoRef}
        src={SOP_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video h-auto w-full object-contain"
        aria-label="Houdry Agent SOP demo"
      />
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-opacity hover:bg-black/80"
        aria-label={muted ? "Unmute demo video" : "Mute demo video"}
      >
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}
