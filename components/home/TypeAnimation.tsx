"use client";
import { ReactTyped } from "react-typed";

const TypeAnimation = ({ strings = ["Here goes strings"] }) => {
  return (
    <div className="flex items-center gap-3 font-mono text-lg md:text-xl">
      <span
        className="select-none text-emerald-600 dark:text-emerald-400"
        aria-hidden="true"
      >
        ›
      </span>
      <span className="text-slate-700 dark:text-slate-200">
        <ReactTyped
          strings={strings}
          typeSpeed={45}
          backSpeed={10}
          backDelay={2500}
          loop
          showCursor={true}
          cursorChar="_"
          className="tracking-tight"
        />
      </span>
    </div>
  );
};

export default TypeAnimation;
