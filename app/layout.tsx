import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ranok Raihan - Full Stack Developer",
  description:
    "Web developer, skilled in the MERN stack and dedicated to building accessible, robust, user-centric applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ranokraihan.com",
    siteName: "Ranok Raihan",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ranok Raihan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    title: "Ranok Raihan - Full Stack Developer",
    description:
      "Web developer, skilled in the MERN stack and dedicated to building accessible, robust, user-centric applications.",
    images: [
      {
        url: "/assets/images/og-image.png", // Path relative to the public folder
        width: 1200,
        height: 630,
        alt: "Ranok Raihan - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "remove-scrollbar bg-[#FBFCFD] text-slate-900 dark:bg-[#0B0F14] dark:text-slate-100",
            inter.variable,
            spaceGrotesk.variable,
            jetBrainsMono.variable,
            "font-sans",
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <NextTopLoader showSpinner={false} />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
