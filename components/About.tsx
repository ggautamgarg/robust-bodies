"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dumbbell, Flame, HeartPulse, Trophy } from "lucide-react";
import Counter from "./Counter";

const pillars = [
  { icon: Dumbbell, label: "Strength" },
  { icon: Flame, label: "Weight Loss" },
  { icon: Trophy, label: "Muscle Building" },
  { icon: HeartPulse, label: "Cardio & Functional" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-24 md:py-32">
      <div className="container-px grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card">
            <Image src="/images/gym-1.jpg" alt="Robust Bodies gym floor" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-56 rounded-2xl border border-steel bg-charcoal/90 p-5 backdrop-blur-md shadow-card sm:block">
            <div className="font-display text-4xl text-gradient">
              <Counter target={500} suffix="+" />
            </div>
            <p className="mt-1 text-sm text-smoke">Members transformed and counting</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">About Us</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            WHERE LAXMI NAGAR <span className="text-gradient">COMES TO GET STRONG</span>
          </h2>
          <p className="mt-6 text-smoke leading-relaxed">
            Robust Bodies is a premium training facility built for people who take their fitness
            seriously. Our professional trainers, latest equipment, and genuinely supportive
            environment come together to help every member — whether you&apos;re here for
            strength, weight loss, muscle building, cardio, or functional training — reach their
            goals faster, and stay consistent while doing it.
          </p>
          <p className="mt-4 text-smoke leading-relaxed">
            We&apos;ve built a community, not just a gym. From your first free trial to your
            hundredth session, you&apos;ll be coached, tracked, and pushed by people who care
            about your results as much as you do.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 rounded-xl border border-steel/60 bg-charcoal/50 px-3 py-5 text-center"
              >
                <p.icon className="h-6 w-6 text-ember" />
                <span className="text-xs text-smoke">{p.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
