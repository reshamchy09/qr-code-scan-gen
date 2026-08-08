export const ADSENSE_CLIENT = "ca-pub-5622393858349174";

export const AD_SLOTS = {
  home: "0000000000",
  generator: "0000000000",
  scanner: "0000000000",
  contact: "0000000000",
  guide: "0000000000",
} as const;

export type AdSlotKey = keyof typeof AD_SLOTS;