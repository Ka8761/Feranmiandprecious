import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/lib/siteConfig";

export default function LoveQuote() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-7">
        <ScrollReveal className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-10">
          {/* His photo — left of the quote */}
          <div
            className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-forest/10 sm:h-28 sm:w-28"
            style={{
              backgroundImage: "linear-gradient(155deg, #7C8F6E 0%, #2E3A28 100%)",
            }}
            aria-label={siteConfig.partnerTwo}
          />

          <p className="font-display text-center text-[1.4rem] italic leading-snug text-wine-deep sm:text-[1.6rem]">
            &ldquo;{siteConfig.loveQuote}&rdquo;
          </p>

          {/* Her photo — right of the quote */}
          <div
            className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-forest/10 sm:h-28 sm:w-28"
            style={{
              backgroundImage: "linear-gradient(155deg, #E8B8B4 0%, #D8C3A0 100%)",
            }}
            aria-label={siteConfig.partnerOne}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
