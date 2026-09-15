"use client";

import { useEffect, useRef, useState } from "react";

export function LoopingClip({ src, label }: { src: string; label: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          video.pause();
          return;
        }
        if (reduceMotion) return;
        void video.play().catch(() => {
          // Autoplay can be blocked until a gesture; muted loop still retries.
        });
      },
      { threshold: 0.35 },
    );

    io.observe(wrap);
    return () => io.disconnect();
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
    <div
      ref={wrapRef}
      className="relative overflow-hidden rounded-[16px] bg-black"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video h-auto w-full object-contain"
        aria-label={label}
      />
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-opacity hover:bg-black/80"
        aria-label={muted ? `Unmute ${label}` : `Mute ${label}`}
      >
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}
