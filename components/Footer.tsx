import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="py-14 text-center sm:py-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-7">
        <div className="font-display text-3xl text-wine-deep">
          {siteConfig.partnerOne} &amp; {siteConfig.partnerTwo}
        </div>
        <p className="mt-2.5 text-forest/70">
          Questions before the day? Reach us on WhatsApp.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-5">
          <a
            href={`https://wa.me/${siteConfig.whatsapp.numberOne}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-sm border border-forest/15 px-[18px] py-2.5 text-sm font-semibold transition-colors hover:border-wine-deep"
          >
            {siteConfig.partnerOne} — {siteConfig.whatsapp.numberOneDisplay}
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.numberTwo}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-sm border border-forest/15 px-[18px] py-2.5 text-sm font-semibold transition-colors hover:border-wine-deep"
          >
            {siteConfig.partnerTwo} — {siteConfig.whatsapp.numberTwoDisplay}
          </a>
        </div>
        <p className="mt-8 text-sm text-forest/55">
          With so much love, {siteConfig.partnerOne} &amp; {siteConfig.partnerTwo} · See
          you on {siteConfig.weddingDateDisplay}
        </p>
      </div>
    </footer>
  );
}
