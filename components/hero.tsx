"use client";

import { MenuButton } from "./buttons/MenuButton";
import { ReserveButton } from "./buttons/ReserveButton";
import { HeroImage } from "./hero/HeroImage";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroImage />

      <div className="z-10 text-center gap-8 flex flex-col items-center text-white">
        <div className="inline-block">
          <h1 className="text-white text-6xl md:text-8xl font-serif mb-2">
            Le Billig
          </h1>
          <div className="h-1 bg-amber-400 w-full"></div>
        </div>
        <h1 className="text-xl md:text-2xl">Crêperie Bretonne</h1>
        <p className="text-lg md:text-xl">Rue Saint-Jean • Québec</p>
        <MenuButton />
        <ReserveButton />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
