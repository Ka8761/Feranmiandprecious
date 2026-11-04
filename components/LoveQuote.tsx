import ScrollReveal from "./ScrollReveal";
import Photo from "./Photo";
import { siteConfig } from "@/lib/siteConfig";

export default function LoveQuote() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-7">
        <ScrollReveal className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-10">
          {/* His photo, left of the quote */}
          <Photo
            src={siteConfig.photos.him}
            alt={siteConfig.partnerTwo}
            className="h-24 w-24 shrink-0 rounded-full border border-forest/10 sm:h-28 sm:w-28"
          />

          <p className="font-display text-center text-[1.4rem] italic leading-snug text-wine-deep sm:text-[1.6rem]">
            &ldquo;{siteConfig.loveQuote}&rdquo;
          </p>

          {/* Her photo, right of the quote */}
          <Photo
            src={siteConfig.photos.her}
            alt={siteConfig.partnerOne}
            className="h-24 w-24 shrink-0 rounded-full border border-forest/10 sm:h-28 sm:w-28"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
