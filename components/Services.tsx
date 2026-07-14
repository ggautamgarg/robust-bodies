"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 md:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">What We Offer</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            TRAINING BUILT <span className="text-gradient">AROUND YOUR GOAL</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = (Icons as any)[s.icon] as Icons.LucideIcon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-iron p-7 shadow-card"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-flame-gradient">
                  {Icon && <Icon className="h-7 w-7 text-ink" />}
                </div>
                <h3 className="font-display text-xl tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
