import { getContentData } from "@/services/content";
import Image from "next/image";
import { motion } from "framer-motion";

export default async function Home() {
  const businessProfile = await getContentData("business-profile");

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream font-merriweather text-accent">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white/50 shadow-lg rounded-lg"
      >
        <h1 className="text-5xl font-playfair-display mb-8">
          {businessProfile.title}
        </h1>
        <p className="text-xl mb-4">{businessProfile.tagline}</p>
        <div
          className="prose prose-lg text-center"
          dangerouslySetInnerHTML={{ __html: businessProfile.contentHtml }}
        />
      </motion.main>
    </div>
  );
}
