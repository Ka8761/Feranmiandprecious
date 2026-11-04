"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/lib/siteConfig";

function GiftCard({
  label,
  bank,
  accountNumber,
}: {
  label: string;
  bank: string;
  accountNumber: string;
}) {
  const [feedback, setFeedback] = useState("");

  async function copyAccount() {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setFeedback("Copied! Thank you.");
    } catch {
      setFeedback("Couldn't copy — please copy it manually.");
    }
    setTimeout(() => setFeedback(""), 2500);
  }

  return (
    <div className="h-full rounded-sm border border-forest/10 bg-ivory p-8 text-center shadow-[0_18px_40px_rgba(46,58,40,0.10)] sm:p-9">
      <div className="text-sm text-forest/60">Account name</div>
      <div className="font-display mt-0.5 text-2xl font-semibold text-wine-deep">
        {label}
      </div>

      <div className="mt-4 text-sm text-forest/60">Bank</div>
      <div className="font-display mt-0.5 text-xl font-semibold text-wine-deep">
        {bank}
      </div>

      <div className="mt-4 text-sm text-forest/60">Account number</div>
      <div className="font-display mt-0.5 text-[1.7rem] font-semibold tracking-wide text-wine-deep">
        {accountNumber}
      </div>

      <button
        type="button"
        onClick={copyAccount}
        className="mt-6 inline-flex items-center justify-center rounded-sm border border-wine-deep bg-wine-deep px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-wine"
      >
        Copy account number
      </button>
      <span className="mt-2.5 block min-h-[18px] text-sm font-semibold text-sage">
        {feedback}
      </span>
    </div>
  );
}

export default function Gifts() {
  return (
    <section id="gifts" className="bg-sage-pale py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-7">
        <ScrollReveal className="mx-auto mb-12 max-w-xl text-center sm:mb-14">
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold text-wine-deep">
            Support our new beginning
          </h2>
          <p className="mt-3.5 text-lg text-forest/80">
            Your presence is truly the greatest gift. But if you&apos;d like
            to bless us as we start this new chapter, we&apos;d be so
            grateful.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {siteConfig.giftAccounts.map((acct, i) => (
            <ScrollReveal key={acct.accountNumber} delay={i * 0.1}>
              <GiftCard
                label={acct.label}
                bank={acct.bank}
                accountNumber={acct.accountNumber}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
