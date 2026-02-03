import { HeroSection } from "@/components/HeroSection";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroSection />
      <ProjectGrid />
    </main>
  );
}
