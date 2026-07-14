"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Dumbbell } from "lucide-react";
import { gym } from "@/lib/data";

export default function InquiryPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("rb-popup-seen");
    if (seen) return;
    const t = setTimeout(() => setShow(true), 15000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("rb-popup-seen", "1");
  };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 60, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 60, x: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-md rounded-2xl border border-steel/60 bg-charcoal p-6 shadow-premium"
        >
          <button onClick={close} aria-label="Close" className="absolute right-4 top-4 text-smoke hover:text-bone">
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-flame-gradient">
              <Dumbbell className="h-6 w-6 text-ink" />
            </div>
            <div>
              <h3 className="font-display tracking-wide">GET YOUR FREE TRIAL</h3>
              <p className="mt-1 text-sm text-smoke">
                Book a free session at Robust Bodies today — no commitment required.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#contact"
                  onClick={close}
                  className="rounded-full bg-flame-gradient px-4 py-2 text-xs font-semibold text-ink"
                >
                  Book Now
                </a>
                <a
                  href={gym.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-steel px-4 py-2 text-xs font-semibold text-bone"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
