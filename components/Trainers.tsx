"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { trainers } from "@/lib/data";

export default function Trainers() {
  return (
    <section id="trainers" className="relative bg-ink py-24 md:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Meet The Team</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            COACHES WHO <span className="text-gradient">SHOW UP FOR YOU</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 w-full p-6">
                <h3 className="font-display text-xl tracking-wide">{t.name}</h3>
                <p className="mt-1 text-sm text-ember">{t.specialization}</p>
                <p className="text-xs text-smoke">{t.experience} Experience</p>
                <div className="mt-4 flex gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="h-4 w-4 text-bone" />
                  <Facebook className="h-4 w-4 text-bone" />
                  <Youtube className="h-4 w-4 text-bone" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
