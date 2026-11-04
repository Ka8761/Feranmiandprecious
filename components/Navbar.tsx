"use client";

import { useState } from "react";

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#details", label: "Details" },
  { href: "#schedule", label: "Schedule" },
  { href: "#gallery", label: "Gallery" },
  { href: "#notes", label: "Love Notes" },
  { href: "#gifts", label: "Gifts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-7 py-4">
        <a href="#top" className="font-display text-xl font-semibold text-wine-deep">
          P &amp; P
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-forest/80 transition-opacity hover:opacity-100 hover:text-forest"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#rsvp"
          className="hidden rounded-sm border border-wine-deep bg-wine-deep px-6 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-wine md:inline-flex"
        >
          RSVP
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm border border-forest/20 px-4 py-2 text-sm font-semibold md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-6 border-t border-forest/10 bg-ivory px-7 py-8 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-forest"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#rsvp"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-sm border border-wine-deep bg-wine-deep px-6 py-2.5 text-sm font-semibold text-ivory"
            >
              RSVP
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
