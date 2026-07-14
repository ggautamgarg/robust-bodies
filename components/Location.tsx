"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import { gym } from "@/lib/data";

export default function Location() {
  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="container-px grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-ember">Find Us</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            VISIT <span className="text-gradient">ROBUST BODIES</span>
          </h2>
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-steel/60 bg-charcoal p-6">
            <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-ember" />
            <div>
              <p className="text-bone">{gym.address.line1}</p>
              <p className="text-bone">{gym.address.line2}</p>
              <p className="text-smoke">{gym.address.city}, {gym.address.state} {gym.address.pin}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${gym.phoneDial}`}
              className="flex items-center justify-center gap-2 rounded-full bg-flame-gradient px-6 py-4 font-semibold text-ink shadow-premium hover:brightness-110 transition"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href={gym.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-bone/30 px-6 py-4 font-semibold text-bone hover:bg-bone/10 transition"
            >
              <Navigation className="h-5 w-5" /> Get Directions
            </a>
          </div>
          <a
            href={gym.mapsPlace}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-smoke underline decoration-steel hover:text-bone transition-colors"
          >
            View Robust Bodies on Google Maps
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="h-80 w-full overflow-hidden rounded-2xl border border-steel/60 shadow-card lg:h-full"
        >
          <iframe
            src={gym.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Robust Bodies location map"
          />
        </motion.div>
      </div>
    </section>
  );
}
