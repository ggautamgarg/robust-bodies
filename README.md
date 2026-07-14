# Robust Bodies — Gym Website

Premium, dark-luxury, fully responsive website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Editing content

Almost everything — pricing, trainers, hours, reviews, FAQs, addresses — lives in one file:

`lib/data.ts`

Edit values there and the whole site updates. No need to touch components for text/data changes.

## Media

Gym photos and videos live in `public/images` and `public/videos`. Swap files with the
same filenames to update media without touching code.

## Structure

```
app/            Next.js App Router pages, layout, SEO (sitemap, robots, metadata, schema)
components/     One component per section (Hero, About, Services, etc.)
lib/data.ts     All editable content
public/         Images, videos, logo
```

## Notes

- Font fetching (`next/font/google`) requires an internet connection at build time.
- The contact form currently just confirms submission client-side — wire `handleSubmit`
  in `components/Contact.tsx` to your backend or a service like Formspree/Resend to
  receive real leads.
- Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts` once you have a live domain.
- Pricing in `lib/data.ts` is placeholder — edit freely.
