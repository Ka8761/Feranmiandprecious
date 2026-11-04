import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/lib/siteConfig";

export default function Details() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.mapsQuery
  )}`;

  return (
    <section id="details" className="border-y border-forest/10 bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-7">
        <ScrollReveal className="mx-auto mb-12 max-w-xl text-center sm:mb-14">
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold text-wine-deep">
            The details
          </h2>
          <p className="mt-3.5 text-lg text-forest/80">
            Everything you need to know before the big day.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <div className="h-full rounded-sm border border-forest/10 bg-ivory p-8 shadow-[0_18px_40px_rgba(46,58,40,0.10)] sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-wine-deep">
                Date &amp; time
              </h3>
              <p className="mt-3.5 text-forest/80">{siteConfig.weddingDateDisplay}</p>
              <p className="mt-1.5 text-forest/80">Ceremony begins at 11:00 AM</p>
              <p className="mt-1.5 text-forest/80">Kindly arrive at least 20 minutes early</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="h-full rounded-sm border border-forest/10 bg-ivory p-8 shadow-[0_18px_40px_rgba(46,58,40,0.10)] sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-wine-deep">Venue</h3>
              <p className="mt-3.5 text-forest/80">{siteConfig.venue.address}</p>
              <p className="mt-1.5 text-forest/80">{siteConfig.venue.note}</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener"
                className="mt-3.5 inline-block text-sm font-semibold text-wine underline underline-offset-4"
              >
                Get directions
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="h-full rounded-sm border border-forest/10 bg-ivory p-8 shadow-[0_18px_40px_rgba(46,58,40,0.10)] sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-wine-deep">
                {siteConfig.colours.title}
              </h3>
              <div className="mt-4 flex gap-5">
                {siteConfig.colours.palette.map((c) => (
                  <div key={c.hex} className="flex flex-col items-center gap-1.5">
                    <span
                      className="h-[34px] w-[34px] rounded-full border border-forest/10"
                      style={{ background: c.hex }}
                    />
                    <span className="text-xs text-forest/70">{c.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-forest/80">{siteConfig.colours.note}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
