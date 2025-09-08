import { introStrings } from "@/constants";
import { cn } from "@/lib/utils";
import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Award, Calendar, Coffee, Mail, MapPin, Users } from "lucide-react";
import { Lora } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import HeroImage from "./HeroImage";
import TypeAnimation from "./TypeAnimation";

interface Props {
  // Define your component's props here
}

const lora = Lora({ subsets: ["latin"] });

const HeroSection: React.FC<Props> = (props) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 overflow-hidden py-12">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 dark:from-emerald-800/10 dark:to-cyan-800/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto  flex flex-col md:flex-row items-center md:justify-between justify-center gap-8 p-6 md:p-12 relative z-10">
        {/* Left Content Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          {/* Status Badge */}
          <div className="flex justify-center md:justify-start">
            <Badge
              variant="outline"
              className="bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 px-4 py-2 text-sm font-medium backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <p
              className={cn(
                lora.className,
                "text-2xl md:text-3xl text-gray-600 dark:text-gray-400"
              )}
            >
              Hi there! I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
              Ranok Raihan
            </h1>
          </div>

          {/* Type Animation with Enhanced Styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-emerald-100/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-emerald-900/20 rounded-2xl blur-xl opacity-60" />
            <Card className="relative border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <TypeAnimation strings={introStrings} />
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            Full Stack Developer, skilled in the MERN stack and dedicated to
            building accessible, robust, user-centric applications that make a
            difference.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    3+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Years Exp
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    50+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Projects
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Coffee className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    ∞
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Coffee Cups
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    US
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Based
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 font-semibold tracking-wide group"
              asChild
            >
              <Link href="https://drive.usercontent.google.com/download?id=1lEx5YGciXzGNWiaD_YvzWYxMVZ1QyGDU&export=download&authuser=0&confirm=t&uuid=e8998cd1-6860-4031-88cb-286c389cf6ae&at=ALoNOgm1fFI0q-yOvy-5Q8nKzj0O:1748285210785">
                <DownloadIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Download Resume
              </Link>
            </Button>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-300 rounded-full p-3 group"
                asChild
              >
                <Link
                  href="https://github.com/RanokRaihan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <GitHubLogoIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-full p-3 group"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/ranok-raihan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInLogoIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 rounded-full p-3 group"
                asChild
              >
                <Link
                  href="mailto:ranokraihan@gmail.com"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Havertown, PA</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Open to remote work</span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
