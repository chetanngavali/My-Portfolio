import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Cybersecurity } from "@/components/sections/cybersecurity";

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="cybersecurity-page">
      <Navigation />
      <main className="pt-20">
        <Cybersecurity />
      </main>
      <Footer />
    </div>
  );
}
