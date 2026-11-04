"use client";

import { motion, type Variants } from "framer-motion";
import Countdown from "./Countdown";
import Photo from "./Photo";
import { siteConfig } from "@/lib/siteConfig";

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-sage-pale pb-20 pt-20 sm:pb-24 sm:pt-24"
      style={{
        backgroundImage:
          "radial-gradient(600px 300px at 15% 0%, rgba(232,184,180,0.35), transparent 60%), radial-gradient(500px 260px at 100% 20%, rgba(124,143,110,0.22), transparent 60%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-7">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
          {/* Text column */}
          <div>
            <motion.p
              custom={0.05}
              initial="hidden"
              animate="show"
              variants={rise}
              className="font-display text-lg italic text-sage"
            >
              We&apos;re getting married
            </motion.p>

            <motion.h1
              custom={0.15}
              initial="hidden"
              animate="show"
              variants={rise}
              className="font-display mt-2 text-[clamp(2.4rem,8vw,5.2rem)] font-semibold leading-[1.05] text-wine-deep"
            >
              {siteConfig.partnerOne}{" "}
              <span className="font-display italic text-wine">&amp;</span>{" "}
              {siteConfig.partnerTwo}
            </motion.h1>

            <motion.p
              custom={0.3}
              initial="hidden"
              animate="show"
              variants={rise}
              className="mt-5 max-w-lg text-lg text-forest/85"
            >
              Two families, one story, and a day we can&apos;t wait to share
              with the people we love. We&apos;d be so honoured to have you
              there.
            </motion.p>

            <motion.div
              custom={0.42}
              initial="hidden"
              animate="show"
              variants={rise}
              className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-base font-semibold text-forest"
            >
              <span>{siteConfig.weddingDateDisplay}</span>
              <span>{siteConfig.location}</span>
            </motion.div>

            <motion.div
              custom={0.54}
              initial="hidden"
              animate="show"
              variants={rise}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#rsvp"
                className="inline-flex items-center justify-center rounded-sm border border-wine-deep bg-wine-deep px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-wine"
              >
                RSVP
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-sm border border-wine-deep px-7 py-3.5 text-sm font-semibold text-wine-deep transition-colors hover:bg-wine-deep hover:text-ivory"
              >
                Read our story
              </a>
            </motion.div>

            <motion.div custom={0.66} initial="hidden" animate="show" variants={rise}>
              <Countdown />
            </motion.div>
          </div>

          {/* Photo column — her photo on top, his photo below */}
          <motion.div
            custom={0.3}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mx-auto flex w-full max-w-[280px] flex-col gap-4 sm:max-w-xs lg:mx-0 lg:max-w-none"
          >
            <Photo
              src={siteConfig.photos.her}
              alt={siteConfig.partnerOne}
              className="aspect-[4/5] rounded-sm border border-forest/10"
            />
            <Photo
              src={siteConfig.photos.him}
              alt={siteConfig.partnerTwo}
              className="aspect-[4/5] rounded-sm border border-forest/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
