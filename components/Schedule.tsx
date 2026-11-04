import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/lib/siteConfig";

export default function Schedule() {
  return (
    <section id="schedule" className="bg-sage-pale py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-7">
        <ScrollReveal className="mx-auto mb-12 max-w-xl text-center sm:mb-14">
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold text-wine-deep">
            Order of events
          </h2>
          <p className="mt-3.5 text-lg text-forest/80">
            A day to savour, one moment at a time.
          </p>
        </ScrollReveal>

        <div className="mx-auto max-w-xl">
          {siteConfig.schedule.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-1 border-b border-forest/10 py-6 last:border-none sm:grid-cols-[180px_1fr] sm:gap-6">
                <span className="font-display text-[1.1rem] font-semibold text-wine-deep sm:text-right">
                  {item.time}
                </span>
                <div>
                  <h3 className="font-display text-[1.3rem] font-semibold text-wine-deep">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-forest/75">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
