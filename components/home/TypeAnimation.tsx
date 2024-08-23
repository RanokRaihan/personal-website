"use client";
import { ReactTyped } from "react-typed";

const TypeAnimation = ({ strings = ["Here goes strings"] }) => {
  return (
    <div className="text-2xl">
      <ReactTyped strings={strings} typeSpeed={30} backSpeed={20} loop />
    </div>
  );
};
export default TypeAnimation;
