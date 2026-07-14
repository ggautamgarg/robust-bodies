"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { plans } from "@/lib/data";

export default function Membership() {
  return (
    <section id="membership" className="relative bg-charcoal py-24 md:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Membership</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            PICK YOUR <span className="text-gradient">PLAN</span>
          </h2>
          <p className="mt-4 text-smoke">
            Simple pricing, no hidden fees. Every plan includes full gym access.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-transparent bg-gradient-to-b from-crimson/20 to-iron shadow-premium"
                  : "border-steel/60 bg-iron"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-flame-gradient px-4 py-1 text-xs font-semibold text-white">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-xl tracking-wide">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-lg text-smoke">₹</span>
                <span className="font-display text-4xl">{plan.price}</span>
                <span className="text-sm text-smoke">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-smoke">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ember" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-flame-gradient text-white hover:brightness-110"
                    : "border border-steel text-bone hover:bg-steel/40"
                }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-smoke">
          * Prices shown are indicative and can be customized by the gym.
        </p>
      </div>
    </section>
  );
}
