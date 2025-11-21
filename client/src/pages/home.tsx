import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Cybersecurity } from "@/components/sections/cybersecurity";
import { Photography } from "@/components/sections/photography";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="home-page">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Cybersecurity />
        <Photography />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
