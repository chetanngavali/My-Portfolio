import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="about-page">
      <Navigation />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}
