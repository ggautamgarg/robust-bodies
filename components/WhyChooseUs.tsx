"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Why Robust Bodies</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            EIGHT REASONS MEMBERS <span className="text-gradient">NEVER LEAVE</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = (Icons as any)[item.icon] as Icons.LucideIcon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-steel/60 bg-iron p-7 transition-colors hover:border-ember/50"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-flame-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-flame-gradient/10 text-ember">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="font-display text-lg tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
