import type { Metadata } from "next";
import { Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { getSortedContentData } from "@/services/content";
import { AnimatePresence, motion } from "framer-motion";
import { headers } from "next/headers";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const playfairDisplay = Playfair_Display({
  weight: ["600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "B&M Garments",
  description: "Premium garments stitching unit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sections = await getSortedContentData("profile");
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "/";

  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${playfairDisplay.variable} font-merriweather bg-cream text-accent antialiased`}
      >
        <div className="container mx-auto px-4">
          <Navigation sections={sections} currentPath={pathname} />
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
