"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { hours } from "@/lib/data";

const todayIndex = () => {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
};

export default function Timings() {
  const today = todayIndex();

  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Gym Hours</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            WHEN <span className="text-gradient">WE&apos;RE OPEN</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-xl overflow-hidden rounded-2xl border border-steel/60 bg-iron shadow-card"
        >
          {hours.map((h, i) => (
            <div
              key={h.day}
              className={`flex items-center justify-between px-8 py-4 ${
                i !== hours.length - 1 ? "border-b border-steel/40" : ""
              } ${i === today ? "bg-crimson/10" : ""}`}
            >
              <span className={`flex items-center gap-3 ${i === today ? "text-ember font-semibold" : "text-bone"}`}>
                {i === today && <Clock className="h-4 w-4" />}
                {h.day}
              </span>
              <span className={h.time === "Closed" ? "text-smoke" : "text-smoke"}>
                {h.time}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
