import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

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
            "dark:text-slate-100 dark:bg-slate-900 bg-slate-100/50 remove-scrollbar",
            inter.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
