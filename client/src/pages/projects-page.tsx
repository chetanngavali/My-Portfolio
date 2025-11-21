import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Projects } from "@/components/sections/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="projects-page">
      <Navigation />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
