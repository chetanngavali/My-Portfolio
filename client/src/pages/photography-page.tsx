import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Photography } from "@/components/sections/photography";

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="photography-page">
      <Navigation />
      <main className="pt-20">
        <Photography />
      </main>
      <Footer />
    </div>
  );
}
