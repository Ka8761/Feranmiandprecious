"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/lib/siteConfig";

export default function LoveNotes() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function send(which: "one" | "two") {
    if (!name.trim() || !message.trim()) {
      setError("Please fill in your name and a short message first.");
      return;
    }
    setError("");
    const text = `A love note for ${siteConfig.partnerOne} & ${siteConfig.partnerTwo}\n\nFrom: ${name.trim()}\n\n${message.trim()}`;
    const number =
      which === "one" ? siteConfig.whatsapp.numberOne : siteConfig.whatsapp.numberTwo;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <section
      id="notes"
      className="border-y border-forest/10 bg-ivory py-28"
    >
      <div className="mx-auto max-w-5xl px-7">
        <ScrollReveal className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold text-wine-deep">
            Leave us a message
          </h2>
          <p className="mt-3.5 text-lg text-forest/80">
            Well wishes, funny memories, advice for the newlyweds — write it
            below and it&apos;ll land straight in our WhatsApp.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-xl">
          <div className="rounded-sm border border-forest/10 bg-ivory p-11 shadow-[0_18px_40px_rgba(46,58,40,0.10)] sm:p-11 max-sm:p-6">
            <div className="mb-5">
              <label htmlFor="noteName" className="mb-1.5 block text-sm font-semibold">
                Your name
              </label>
              <input
                id="noteName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ada Okafor"
                className="w-full rounded-sm border border-forest/20 bg-white px-3.5 py-3 text-forest"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="noteMsg" className="mb-1.5 block text-sm font-semibold">
                Your message
              </label>
              <textarea
                id="noteMsg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note to the couple..."
                className="min-h-[104px] w-full resize-y rounded-sm border border-forest/20 bg-white px-3.5 py-3 text-forest"
              />
            </div>

            {error && <p className="mb-3 text-sm font-semibold text-wine">{error}</p>}

            <div className="flex flex-wrap gap-3.5">
              <button
                type="button"
                onClick={() => send("one")}
                className="flex-1 rounded-sm border border-wine-deep bg-wine-deep px-6 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-wine"
              >
                Send to {siteConfig.partnerOne}
              </button>
              <button
                type="button"
                onClick={() => send("two")}
                className="flex-1 rounded-sm border border-wine-deep px-6 py-3.5 text-sm font-semibold text-wine-deep transition-colors hover:bg-wine-deep hover:text-ivory"
              >
                Send to {siteConfig.partnerTwo}
              </button>
            </div>
            <p className="mt-4 text-sm text-forest/60">
              Tapping a button opens WhatsApp with your note pre-filled — just
              hit send there.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
