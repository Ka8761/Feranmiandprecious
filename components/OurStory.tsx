import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/lib/siteConfig";

export default function OurStory() {
  return (
    <section id="story" className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-7">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-14">
          <ScrollReveal className="order-2 lg:order-1">
            <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-tight text-wine-deep">
              {siteConfig.story.title}
            </h2>
            <div className="mt-5 space-y-4">
              {siteConfig.story.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-forest/85">
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="order-1 lg:order-2">
            <div
              className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm border border-forest/10"
              style={{
                backgroundImage:
                  "linear-gradient(155deg, #E8B8B4 0%, #F7F1E1 55%, #6E1423 140%)",
              }}
            >
              <span className="font-display rounded-sm bg-ivory/80 px-6 py-2.5 text-lg italic text-wine-deep">
                Our story
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
