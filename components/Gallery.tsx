import ScrollReveal from "./ScrollReveal";
import Photo from "./Photo";
import { siteConfig } from "@/lib/siteConfig";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-7">
        <ScrollReveal className="mx-auto mb-12 max-w-xl text-center sm:mb-14">
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold text-wine-deep">
            A few of our favourites
          </h2>
          <p className="mt-3.5 text-lg text-forest/80">Snapshots from along the way.</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {siteConfig.gallery.map((g, i) => (
            <ScrollReveal key={g.src} delay={(i % 3) * 0.06}>
              <Photo
                src={g.src}
                alt={g.alt}
                className="aspect-square rounded-sm border border-forest/10 transition-transform duration-300 hover:-translate-y-1"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
