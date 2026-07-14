"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <div className="text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">FAQ</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            GOT <span className="text-gradient">QUESTIONS?</span>
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-steel/60 bg-iron">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-display text-base tracking-wide sm:text-lg">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}>
                  <Plus className="h-5 w-5 flex-shrink-0 text-ember" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-smoke leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
