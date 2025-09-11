import React from "react";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Cybersecurity } from "@/components/sections/cybersecurity";
import { Photography } from "@/components/sections/photography";
import { Design } from "@/components/sections/design";
import { Projects } from "@/components/sections/projects";
import { Activities } from "@/components/sections/activities";
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
        <Design />
        <Projects />
        <Activities />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
