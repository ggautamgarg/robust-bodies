"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  { src: "/videos/gym-tour.mp4", poster: "/images/gym-3.jpg", title: "Full Gym Tour" },
  { src: "/videos/hero-bg.mp4", poster: "/images/gym-2.jpg", title: "Robust Bodies In Action" },
];

export default function VideoGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Watch</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            SEE <span className="text-gradient">ROBUST BODIES</span> LIVE
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {videos.map((v, i) => (
            <motion.button
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className="group relative h-72 w-full overflow-hidden rounded-2xl shadow-card"
            >
              <video src={v.src} poster={v.poster} muted className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-ink/40 transition-colors group-hover:bg-ink/55" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-flame-gradient shadow-premium transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-white text-white" />
                </span>
              </div>
              <span className="absolute bottom-4 left-4 font-display text-lg tracking-wide">{v.title}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute top-6 right-6 text-bone"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.video
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              src={videos[active].src}
              controls
              autoPlay
              className="max-h-[85vh] w-full max-w-4xl rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
