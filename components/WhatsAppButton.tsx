"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { gym } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={gym.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-card"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" />
    </motion.a>
  );
}
