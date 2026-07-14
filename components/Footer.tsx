import Image from "next/image";
import { Instagram, Facebook, Youtube, MapPin, Phone, Clock } from "lucide-react";
import { gym } from "@/lib/data";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gym Tour", href: "#gym-tour" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-steel/60 pt-16 pb-8">
      <div className="container-px grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/images/logo.jpg" alt="Robust Bodies logo" width={36} height={36} className="rounded-md" />
            <span className="font-display text-lg tracking-wide">
              ROBUST <span className="text-gradient">BODIES</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-smoke leading-relaxed">
            Premium strength and fitness training in the heart of Laxmi Nagar, New Delhi.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Instagram" className="text-smoke hover:text-ember transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-smoke hover:text-ember transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-smoke hover:text-ember transition-colors"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-ember">QUICK LINKS</h4>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-smoke hover:text-bone transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-ember">CONTACT</h4>
          <ul className="mt-4 space-y-3 text-sm text-smoke">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /> {gym.address.full}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" /> {gym.phone}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-ember">HOURS</h4>
          <div className="mt-4 flex items-start gap-2 text-sm text-smoke">
            <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <div>
              <p>Mon – Sat: 5:30 AM – 11 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-px mt-12 flex flex-col items-center justify-between gap-4 border-t border-steel/40 pt-6 text-xs text-smoke sm:flex-row">
        <p>© {new Date().getFullYear()} Robust Bodies. All rights reserved.</p>
        <a href="#" className="hover:text-bone transition-colors">Privacy Policy</a>
      </div>
    </footer>
  );
}
