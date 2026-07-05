"use client";
import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroImage = () => {
  const { theme } = useTheme();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      setImageSrc("/assets/images/hero-dark.svg");
    } else if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setImageSrc("/assets/images/hero-dark.svg");
      } else {
        setImageSrc("/assets/images/hero.svg");
      }
    } else {
      setImageSrc("/assets/images/hero.svg");
    }
  }, [theme]);

  return (
    <div className="relative flex w-full max-w-lg items-center justify-center">
      {/* Single subtle emerald glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/15"
        aria-hidden="true"
      />

      <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-md md:p-12 dark:border-white/10 dark:bg-slate-900/60">
        {imageSrc ? (
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt="Ranok Raihan — full-stack developer"
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        ) : (
          <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
            <Sparkles className="h-10 w-10 animate-pulse text-slate-300 dark:text-slate-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroImage;
