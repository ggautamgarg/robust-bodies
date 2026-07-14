"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews, gym } from "@/lib/data";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative bg-ink py-24 md:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Testimonials</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            WHAT OUR <span className="text-gradient">MEMBERS SAY</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex text-ember">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-smoke">{gym.rating} out of 5 · {gym.reviewCount}+ Google Reviews</span>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-steel/60 bg-charcoal p-10 text-center shadow-card"
            >
              <div className="mb-4 flex justify-center text-ember">
                {Array.from({ length: reviews[index].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-bone">&ldquo;{reviews[index].text}&rdquo;</p>
              <p className="mt-6 font-display tracking-wide text-ember">{reviews[index].name}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 hidden -translate-x-14 -translate-y-1/2 rounded-full border border-steel p-3 hover:bg-steel/40 sm:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-14 rounded-full border border-steel p-3 hover:bg-steel/40 sm:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-flame-gradient" : "w-2 bg-steel"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
