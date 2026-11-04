"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/lib/siteConfig";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attend, setAttend] = useState("Joyfully accepts");
  const [guests, setGuests] = useState("1");
  const [meal, setMeal] = useState("No preference");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function send(which: "one" | "two") {
    if (!name.trim() || !phone.trim()) {
      setError("Please fill in your name and phone number first.");
      return;
    }
    setError("");
    const text =
      `RSVP — ${siteConfig.partnerOne} & ${siteConfig.partnerTwo}'s Wedding\n\n` +
      `Name: ${name.trim()}\n` +
      `Phone: ${phone.trim()}\n` +
      `Response: ${attend}\n` +
      `Guests: ${guests}\n` +
      `Meal preference: ${meal}` +
      (message.trim() ? `\nMessage: ${message.trim()}` : "");

    const number =
      which === "one" ? siteConfig.whatsapp.numberOne : siteConfig.whatsapp.numberTwo;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <section id="rsvp" className="py-28">
      <div className="mx-auto max-w-5xl px-7">
        <ScrollReveal className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold text-wine-deep">
            Will you be there?
          </h2>
          <p className="mt-3.5 text-lg text-forest/80">
            Please let us know by {siteConfig.rsvpDeadlineDisplay} so we can
            plan the seating and the menu.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-xl">
          <div className="rounded-sm border border-forest/10 bg-ivory p-11 shadow-[0_18px_40px_rgba(46,58,40,0.10)] sm:p-11 max-sm:p-6">
            <div className="mb-5">
              <label htmlFor="rName" className="mb-1.5 block text-sm font-semibold">
                Full name
              </label>
              <input
                id="rName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ada Okafor"
                className="w-full rounded-sm border border-forest/20 bg-white px-3.5 py-3 text-forest"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="rPhone" className="mb-1.5 block text-sm font-semibold">
                Phone number
              </label>
              <input
                id="rPhone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0803 555 1234"
                className="w-full rounded-sm border border-forest/20 bg-white px-3.5 py-3 text-forest"
              />
            </div>

            <div className="mb-5">
              <span className="mb-1.5 block text-sm font-semibold">Will you attend?</span>
              <div className="flex flex-wrap gap-[18px]">
                {["Joyfully accepts", "Regretfully declines"].map((opt) => (
                  <label
                    key={opt}
                    className={`radio-opt flex min-w-[160px] flex-1 cursor-pointer items-center gap-2.5 rounded-sm border border-forest/20 p-3.5 text-sm font-semibold`}
                  >
                    <input
                      type="radio"
                      name="attend"
                      value={opt}
                      checked={attend === opt}
                      onChange={() => setAttend(opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="rGuests" className="mb-1.5 block text-sm font-semibold">
                Number of guests (including you)
              </label>
              <select
                id="rGuests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-sm border border-forest/20 bg-white px-3.5 py-3 text-forest"
              >
                {["1", "2", "3", "4", "5"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor="rMeal" className="mb-1.5 block text-sm font-semibold">
                Meal preference
              </label>
              <select
                id="rMeal"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                className="w-full rounded-sm border border-forest/20 bg-white px-3.5 py-3 text-forest"
              >
                {["No preference", "Vegetarian", "Fish", "Halal"].map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor="rMsg" className="mb-1.5 block text-sm font-semibold">
                Message to the couple (optional)
              </label>
              <textarea
                id="rMsg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Anything you'd like us to know?"
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
                Send RSVP to {siteConfig.partnerOne}
              </button>
              <button
                type="button"
                onClick={() => send("two")}
                className="flex-1 rounded-sm border border-wine-deep px-6 py-3.5 text-sm font-semibold text-wine-deep transition-colors hover:bg-wine-deep hover:text-ivory"
              >
                Send RSVP to {siteConfig.partnerTwo}
              </button>
            </div>
            <p className="mt-4 text-sm text-forest/60">
              Your RSVP opens as a WhatsApp message, filled in and ready — just
              hit send there.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
