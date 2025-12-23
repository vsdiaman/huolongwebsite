import React from "react";
import { SiGoogleplay, SiAppstore, SiAndroid } from "react-icons/si";

const STORES = {
  googlePlay: {
    label: "Google Play",
    Icon: SiAndroid,
    color: "#34A853",
  },
  appStore: {
    label: "App Store",
    Icon: SiAppstore,
    color: "#0A84FF",
  },
};

export function StoreBadges({ storeLinks }) {
  if (!storeLinks) return null;

  return (
    <div className="flex items-center gap-2">
      {Object.entries(storeLinks).map(([storeKey, url]) => {
        if (!url) return null;

        const store = STORES[storeKey];
        if (!store) return null;

        const Icon = store.Icon;

        return (
          <a
            key={storeKey}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={store.label}
            title={store.label}
            className="inline-flex items-center justify-center border-2 border-brandBlack shadow-pixel w-9 h-9 hover:-translate-y-[1px] transition-transform"
          >
            <Icon size={18} style={{ color: store.color }} />
          </a>
        );
      })}
    </div>
  );
}
