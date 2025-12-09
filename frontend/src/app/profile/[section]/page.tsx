import { getContentData } from "@/services/content";
import Section from "@/components/Section";
import { notFound } from "next/navigation";

interface SectionPageProps {
  params: {
    section: string;
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  try {
    const sectionContent = await getContentData("profile", params.section);
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream font-merriweather text-accent">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white/50 shadow-lg rounded-lg">
          <Section
            title={sectionContent.title}
            contentHtml={sectionContent.contentHtml}
          />
        </main>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
