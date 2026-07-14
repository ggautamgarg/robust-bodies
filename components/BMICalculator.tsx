"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

function classify(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "text-blue-400" };
  if (bmi < 25) return { label: "Healthy", color: "text-green-400" };
  if (bmi < 30) return { label: "Overweight", color: "text-ember" };
  return { label: "Obese", color: "text-crimson" };
}

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) setBmi(w / (h * h));
  };

  const result = bmi ? classify(bmi) : null;

  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="container-px mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-steel/60 bg-iron p-8 text-center shadow-card"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-flame-gradient">
            <Calculator className="h-7 w-7 text-ink" />
          </div>
          <h3 className="font-display text-2xl tracking-wide">CHECK YOUR BMI</h3>
          <p className="mt-2 text-sm text-smoke">
            A quick starting point — our trainers will build your full assessment in person.
          </p>

          <form onSubmit={calculate} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="number"
              required
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="rounded-xl border border-steel bg-charcoal px-4 py-3 text-center text-bone placeholder:text-smoke/60 focus:border-ember focus:outline-none"
            />
            <input
              type="number"
              required
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="rounded-xl border border-steel bg-charcoal px-4 py-3 text-center text-bone placeholder:text-smoke/60 focus:border-ember focus:outline-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 rounded-full bg-flame-gradient py-3 font-semibold text-ink hover:brightness-110 transition"
            >
              Calculate BMI
            </button>
          </form>

          {result && bmi && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-xl border border-steel/60 bg-charcoal p-6"
            >
              <p className="font-display text-4xl">{bmi.toFixed(1)}</p>
              <p className={`mt-1 font-semibold ${result.color}`}>{result.label}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
