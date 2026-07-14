"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";

export default function Transformations() {
  return (
    <section id="gallery" className="relative bg-ink py-24 md:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Inside The Gym</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            THE <span className="text-gradient">ROBUST BODIES</span> FLOOR
          </h2>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={img}
                alt={`Robust Bodies gym photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
