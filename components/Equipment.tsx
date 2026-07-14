"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { equipment } from "@/lib/data";

export default function Equipment() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="container-px flex items-end justify-between">
        <div>
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Our Arsenal</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            PREMIUM <span className="text-gradient">EQUIPMENT</span>
          </h2>
        </div>
        <div className="hidden gap-3 sm:flex">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-steel text-bone transition hover:bg-flame-gradient hover:border-transparent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-steel text-bone transition hover:bg-flame-gradient hover:border-transparent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-12 flex gap-6 overflow-x-auto scroll-smooth px-5 pb-4 lg:px-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {equipment.map((eq, i) => (
          <motion.div
            key={eq.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative h-96 w-80 flex-shrink-0 overflow-hidden rounded-2xl shadow-card"
          >
            <Image
              src={eq.image}
              alt={eq.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="font-display text-xl tracking-wide">{eq.title}</h3>
              <p className="mt-2 text-sm text-smoke">{eq.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
