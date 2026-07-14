"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { gym } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hook this up to your backend / form service (e.g. Formspree, Resend) when ready.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-ink py-24 md:py-32">
      <div className="container-px grid grid-cols-1 gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Get In Touch</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            START YOUR <span className="text-gradient">FREE TRIAL</span>
          </h2>
          <p className="mt-5 text-smoke leading-relaxed">
            Fill in your details and our team will reach out to book your free trial session, or
            reach us directly using the options below.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${gym.phoneDial}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-flame-gradient px-6 py-4 font-semibold text-ink shadow-premium hover:brightness-110 transition"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href={gym.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white hover:brightness-110 transition"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={gym.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-bone/30 px-6 py-4 font-semibold text-bone hover:bg-bone/10 transition"
            >
              <MapPin className="h-5 w-5" /> Locate
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-steel/60 bg-charcoal p-8 shadow-card"
        >
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-flame-gradient">
                <Send className="h-7 w-7 text-ink" />
              </div>
              <h3 className="font-display text-xl">THANK YOU!</h3>
              <p className="mt-2 text-smoke">We&apos;ll reach out to you shortly to schedule your free trial.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-smoke">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-steel bg-iron px-4 py-3 text-bone placeholder:text-smoke/60 focus:border-ember focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-smoke">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-steel bg-iron px-4 py-3 text-bone placeholder:text-smoke/60 focus:border-ember focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-smoke">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-steel bg-iron px-4 py-3 text-bone placeholder:text-smoke/60 focus:border-ember focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-smoke">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your fitness goals"
                  className="w-full rounded-xl border border-steel bg-iron px-4 py-3 text-bone placeholder:text-smoke/60 focus:border-ember focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-flame-gradient py-4 font-semibold text-ink shadow-premium hover:brightness-110 transition"
              >
                Book Free Trial
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
