import ScrollReveal from "./ScrollReveal";
import Photo from "./Photo";
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
            <Photo
              src={siteConfig.photos.story}
              alt="Precious and Feranmi"
              className="aspect-[4/5] rounded-sm border border-forest/10"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
