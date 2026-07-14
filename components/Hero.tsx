"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { gym } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/gym-1.jpg"
        alt="Robust Bodies gym floor"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="container-px relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Image src="/images/logo.jpg" alt="Robust Bodies logo" width={88} height={88} className="rounded-2xl shadow-premium" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-steel/60 bg-charcoal/60 px-4 py-2 backdrop-blur-sm"
        >
          <div className="flex text-ember">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-smoke">{gym.rating}★ · {gym.reviewCount}+ Reviews</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl leading-[1.05] tracking-wide sm:text-6xl md:text-8xl"
        >
          TRANSFORM YOUR BODY.
          <br />
          <span className="text-gradient">TRANSFORM YOUR LIFE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-xl font-body text-base text-smoke sm:text-lg"
        >
          {gym.reviewCount}+ Happy Members &nbsp;|&nbsp; {gym.rating}★ Rated Gym in Laxmi Nagar, New Delhi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full bg-flame-gradient px-8 py-4 font-semibold text-ink shadow-premium transition hover:brightness-110 hover:scale-[1.03] active:scale-95"
          >
            Join Now
          </a>
          <a
            href="#contact"
            className="rounded-full border border-bone/30 bg-bone/5 px-8 py-4 font-semibold text-bone backdrop-blur-sm transition hover:bg-bone/10 hover:scale-[1.03] active:scale-95"
          >
            Book Free Trial
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-smoke"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
