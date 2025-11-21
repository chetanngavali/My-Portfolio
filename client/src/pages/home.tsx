import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="home-page">
      <Navigation />
      
      <main>
        <Hero />
      </main>
      
      <Footer />
    </div>
  );
}
