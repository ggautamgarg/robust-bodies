import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.robustbodies.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Robust Bodies | Premium Gym in Laxmi Nagar, New Delhi",
    template: "%s | Robust Bodies",
  },
  description:
    "Robust Bodies is a premium fitness gym in Laxmi Nagar, New Delhi offering strength training, weight loss, bodybuilding, and personal training. 4.4★ rated with 500+ reviews. Book your free trial today.",
  keywords: [
    "gym in Laxmi Nagar",
    "best gym near me",
    "Robust Bodies",
    "fitness center New Delhi",
    "personal training Laxmi Nagar",
    "weight loss gym Delhi",
    "bodybuilding gym Laxmi Nagar",
    "strength training Delhi",
  ],
  authors: [{ name: "Robust Bodies" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Robust Bodies",
    title: "Robust Bodies | Premium Gym in Laxmi Nagar, New Delhi",
    description:
      "Transform your body, transform your life. 4.4★ rated gym with 500+ happy members in Laxmi Nagar, New Delhi.",
    images: [{ url: "/images/gym-2.jpg", width: 1200, height: 630, alt: "Robust Bodies Gym Interior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robust Bodies | Premium Gym in Laxmi Nagar, New Delhi",
    description:
      "Transform your body, transform your life. 4.4★ rated gym with 500+ happy members in Laxmi Nagar, New Delhi.",
    images: ["/images/gym-2.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Robust Bodies",
  image: `${siteUrl}/images/logo.jpg`,
  telephone: "+91-98999-49171",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block M, Jagat Ram Park, Laxmi Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110092",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "500",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "05:30",
      closes: "23:00",
    },
  ],
  url: siteUrl,
  priceRange: "₹₹",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-ink text-bone antialiased">{children}</body>
    </html>
  );
}
