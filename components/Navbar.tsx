"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gym } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gym Tour", href: "#gym-tour" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md shadow-card py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Image src="/images/logo.jpg" alt="Robust Bodies logo" width={40} height={40} className="rounded-md" />
          <span className="font-display text-lg tracking-wide hidden sm:block">
            ROBUST <span className="text-gradient">BODIES</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-smoke">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bone transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-flame-gradient transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${gym.phoneDial}`} className="flex items-center gap-2 text-sm text-smoke hover:text-bone transition-colors">
            <Phone className="h-4 w-4" /> {gym.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-flame-gradient px-5 py-2.5 text-sm font-semibold text-ink shadow-premium hover:brightness-110 transition"
          >
            Join Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-bone"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-ink/95 backdrop-blur-md border-t border-steel"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-smoke hover:text-bone transition-colors border-b border-steel/50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full bg-flame-gradient px-5 py-3 text-sm font-semibold text-ink"
                >
                  Join Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
