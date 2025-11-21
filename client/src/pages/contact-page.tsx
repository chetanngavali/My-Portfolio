import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="contact-page">
      <Navigation />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
