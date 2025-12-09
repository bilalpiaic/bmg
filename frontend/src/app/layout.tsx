import type { Metadata } from "next";
import { Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { getSortedContentData } from "@/services/content";
import TransitionWrapper from "@/components/TransitionWrapper"; // Import the new component

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

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} ${playfairDisplay.variable} font-merriweather bg-cream text-accent antialiased`}
      >
        <div className="container mx-auto px-4">
          <Navigation sections={sections} />
          <TransitionWrapper>{children}</TransitionWrapper>
        </div>
      </body>
    </html>
  );
}
