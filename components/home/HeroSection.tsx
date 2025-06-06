import { introStrings } from "@/constants";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Lora } from "next/font/google";
import React from "react";
import { Button } from "../ui/button";
import HeroImage from "./HeroImage";
import TypeAnimation from "./TypeAnimation";

interface Props {
  // Define your component's props here
}

const lora = Lora({ subsets: ["latin"] });
const HeroSection: React.FC<Props> = (props) => {
  // Implement your component logic here

  return (
    <section className="w-full bg-gradient-to-t dark:from-slate-950/25 border-b dark:border-slate-800  dark:to-slate-900 from-emerald-100/50 pt-16 md:pt-0">
      <div className="container mx-auto min-h-screen  flex flex-col md:flex-row items-center md:justify-between  justify-center gap-6 p-6 md:p-12">
        <div className="md:w-1/2  text-center md:text-left md:space-y-5 space-y-4">
          <div>
            <p className={cn(lora.className, "text-2xl mb-2")}>
              {" "}
              Hi there! I am{" "}
            </p>
            <h1 className="text-5xl font-bold dark:text-emerald-400 text-emerald-600">
              Ranok Raihan
            </h1>
          </div>

          <TypeAnimation strings={introStrings} />
          <p className="text-lg dark:text-gray-300 text-gray-600 ">
            Full Stack Developer, skilled in the MERN stack and dedicated to
            building accessible, robust, user-centric applications.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <Button
              size="lg"
              variant="green"
              className="flex gap-2 rounded-full"
              asChild
            >
              <a href="https://drive.usercontent.google.com/download?id=1lEx5YGciXzGNWiaD_YvzWYxMVZ1QyGDU&export=download&authuser=0&confirm=t&uuid=e8998cd1-6860-4031-88cb-286c389cf6ae&at=ALoNOgm1fFI0q-yOvy-5Q8nKzj0O:1748285210785">
                Download Resume <DownloadIcon className="size-6" />
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
