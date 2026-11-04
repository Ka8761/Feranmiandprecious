# Precious & Feranmi — Wedding Website (Next.js)

A full Next.js 16 (App Router + TypeScript + Tailwind CSS v4) wedding site with
scroll-reveal animations, a live countdown, a photo gallery, a "Love Notes"
board, and an RSVP form — both forms send straight to WhatsApp.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To build for production and self-host or deploy (Vercel, Netlify, your own
server, etc.):

```bash
npm run build
npm start
```

## Everything you'll want to customise lives in one file

Open **`lib/siteConfig.ts`**. Every section of the site (names, date,
venue, schedule, dress code, gallery captions, WhatsApp numbers, gift/account
details) reads from this single object, so editing it updates the whole
site consistently. No need to hunt through components.

Things you'll most likely want to revisit:
- `weddingDateISO` / `weddingDateDisplay` — drives the live countdown and the
  date shown across the site.
- `venue` / `mapsQuery` — the ceremony & reception address and its Google
  Maps link.
- `schedule` — the order-of-events list.
- `story.paragraphs` — your story, as plain text paragraphs.
- `colours` — the wedding colour palette shown on the details card.
- `whatsapp.numberOne` / `numberTwo` — in international format (`234` +
  number without the leading `0`).
- `giftAccounts` — the bank, account name and number for each gift account
  card (already filled in with both of your accounts).

## Project structure

```
app/
  layout.tsx      — fonts, metadata, root HTML shell
  page.tsx         — assembles all sections
  globals.css      — design tokens (colours, fonts) + a few custom styles
components/
  Navbar.tsx       — sticky nav with a mobile menu
  Hero.tsx         — headline, tagline, entrance animation
  Countdown.tsx    — live countdown to the ceremony (client component)
  OurStory.tsx     — the full "how we met" story
  Details.tsx      — date, venue (with a Google Maps link), wedding colours
  Schedule.tsx     — order of events (church wedding + reception)
  Gallery.tsx       — photo grid (placeholder frames — see below)
  LoveNotes.tsx    — guest message form → opens WhatsApp, pre-filled
  Rsvp.tsx         — RSVP form → opens WhatsApp, pre-filled
  Gifts.tsx        — both gift accounts + "copy account number" buttons
  LoveQuote.tsx    — closing love quote with both partners' circular photos
  Footer.tsx       — sign-off + WhatsApp contact links
  ScrollReveal.tsx — small wrapper that fades/rises sections into view
                     on scroll (Framer Motion), used throughout the page
lib/
  siteConfig.ts    — all editable content and data, in one place
```

## Adding your real photos

Put your pictures in the **`public/images/`** folder using these exact
file names (lowercase, `.jpg`):

| File | Where it appears |
|---|---|
| `precious.jpg` | Hero (top right) + small circle beside the love quote |
| `feranmi.jpg` | Hero (bottom right) + small circle beside the love quote |
| `our-story.jpg` | Photo beside "How we met" |
| `gallery-1.jpg` to `gallery-6.jpg` | The gallery |

That's it, no code changes needed. Until a file exists, a soft colour
placeholder shows. Want a `.png` or different file names? Edit the paths
in `lib/siteConfig.ts` (the `photos` and `gallery` sections). To add more
gallery photos, copy one line in `gallery`.

Tip: keep each photo under about 500 KB so the site loads quickly.

## How the forms work

This is a static front end with no database or backend. Both the **Love
Notes** form and the **RSVP** form work by opening WhatsApp with the
guest's answers already typed into the message box, addressed to whichever
of the two numbers the guest taps — they just hit "send" inside WhatsApp.
Every RSVP and note lands directly in your WhatsApp chat, nothing to host
or manage.

If you'd rather collect responses into a spreadsheet instead (e.g. Google
Sheets, Airtable, a simple database), that's a straightforward addition —
just ask.

## Tech stack

- [Next.js 16](https://nextjs.org/) — App Router, TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered reveal
  animations
- Google Fonts: Cormorant Garamond (display) + Karla (body)

Enjoy the site, and congratulations! 🤍
