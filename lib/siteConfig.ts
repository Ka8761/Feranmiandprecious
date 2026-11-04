// ─────────────────────────────────────────────────────────────
// Edit everything about the wedding here — every component reads
// from this one file, so a single edit updates the whole site.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  partnerOne: "Precious",
  partnerTwo: "Feranmi",

  // Ceremony date & time — drives the countdown. Keep the exact
  // "YYYY-MM-DDTHH:MM:SS" format.
  weddingDateISO: "2026-12-19T11:00:00",
  weddingDateDisplay: "Saturday, 19 December 2026",
  rsvpDeadlineDisplay: "1 December 2026",

  location: "Oke-Odo, Lagos State",

  venue: {
    address: "51/53 Pipeline Road, Pipeline Bus-stop, Oke-Odo, Lagos State",
    note: "Reception follows immediately afterwards, at the church hall.",
  },
  mapsQuery: "51/53 Pipeline Road, Pipeline Bus-stop, Oke-Odo, Lagos",

  colours: {
    title: "Our wedding colours",
    note: "Beige, burgundy and cream. We would love to see you in our colours on the day.",
    palette: [
      { name: "Beige", hex: "#D8C3A0" },
      { name: "Burgundy", hex: "#6E1423" },
      { name: "Cream", hex: "#F7F1E1" },
    ],
  },

  schedule: [
    {
      time: "11:00 AM – 1:00 PM",
      title: "Church wedding",
      desc: "The ceremony at the church.",
    },
    {
      time: "Immediately after",
      title: "Reception",
      desc: "Reception follows straight after, at the church hall.",
    },
  ],

  story: {
    title: "How we met",
    paragraphs: [
      "Feranmi and Miss Precious had known of each other for several years through their church's online platform. However, despite being part of the same community, they had no close friendship or personal relationship at the time.",
      "Their story took a new turn in April 2025 when they finally met physically at Revival Hub International, Nnewi, during the Prayer and Prophetic Conference 2025. It was there that they were formally introduced to each other by his spiritual father.",
      "Following the conference, they exchanged contacts and began communicating. At that point, their conversations were simply friendly and intentional, with no romantic interest expressed or assumed by either party.",
      "As time went on, however, he began to develop an interest in Miss Precious. Rather than acting impulsively, he subjected his intentions to spiritual guidance and sought the counsel and approval of his spiritual authority.",
      "After careful consideration, and with a desire to be led by God, he formally expressed his intentions and proposed to Miss Precious in December 2025.",
      "Miss Precious took time to prayerfully consider the proposal, seeking God's direction before making her decision. Eventually, she accepted.",
      "And so, what began as two people who simply knew of each other online — but barely knew each other personally — gradually became a relationship founded on intentionality, prayer, spiritual guidance, and mutual conviction.",
      "Their relationship officially began in December 2025, marking the beginning of a new chapter in their journey together.",
    ],
  },

  loveQuote:
    "Two hearts have found their home in each other; two souls have chosen to walk together, and two lives are about to become one beautiful story.",

  gallery: [
    { label: "Engagement, 01", gradient: "from-[#8A9C7B] to-[#5F7050]" },
    { label: "Engagement, 02", gradient: "from-[#C79A9B] to-[#7A2E3D]" },
    { label: "Engagement, 03", gradient: "from-[#D8C79A] to-[#B78A3A]" },
    { label: "Engagement, 04", gradient: "from-[#7A2E3D] to-[#3E1620]" },
    { label: "Engagement, 05", gradient: "from-[#AEB89C] to-[#647456]" },
    { label: "Engagement, 06", gradient: "from-[#E8B8B4] to-[#B06B66]" },
  ],

  // WhatsApp numbers in international format (no leading 0, with
  // country code 234 for Nigeria).
  whatsapp: {
    numberOne: "2348100302752", // Precious
    numberOneDisplay: "0810 030 2752",
    numberTwo: "2348141184816", // Feranmi
    numberTwoDisplay: "0814 118 4816",
  },

  // Gift accounts — shown as separate cards, in this order.
  giftAccounts: [
    { label: "Precious Dike", bank: "Moniepoint MFB", accountNumber: "8100302752" },
    { label: "Ajidagba Feranmi", bank: "Pocket App", accountNumber: "7056112303" },
  ],
} as const;
