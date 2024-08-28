"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroImage = () => {
  const { theme } = useTheme();
  const [imageSrc, setImageSrc] = useState("");
  console.log(theme);

  useEffect(() => {
    if (theme === "dark") {
      setImageSrc("/assets/images/hero-dark.svg");
    } else {
      setImageSrc("/assets/images/hero.svg");
    }
  }, [theme]);

  return (
    <>
      {imageSrc ? (
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt="Hero"
          className="w-full"
        />
      ) : null}
    </>
  );
};

export default HeroImage;
