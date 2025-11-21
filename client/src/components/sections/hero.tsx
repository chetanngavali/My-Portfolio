import { motion } from "framer-motion";
import { ChevronDown, Shield, Camera, Palette, Code } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Link } from "wouter";

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid"
      data-testid="hero-section"
    >
      {/* Enhanced 3D-style Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-background via-card to-background animate-pulse" style={{ animationDuration: "4s" }}></div>
        
        {/* Floating 3D-style elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-xl rotate-45 animate-float opacity-60 hover-tilt" style={{ animationDelay: "0s", transform: "perspective(1000px) rotateX(15deg) rotateY(15deg)" }}>
          <Shield className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </div>
        
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-secondary/20 rounded-xl rotate-12 animate-float opacity-80 hover-tilt" style={{ animationDelay: "1s", transform: "perspective(1000px) rotateX(-10deg) rotateY(10deg)" }}>
          <Camera className="w-6 h-6 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12" />
        </div>
        
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-accent/20 rounded-xl -rotate-12 animate-float opacity-70 hover-tilt" style={{ animationDelay: "2s", transform: "perspective(1000px) rotateX(10deg) rotateY(-15deg)" }}>
          <Palette className="w-7 h-7 text-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
        </div>
        
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-cyber-pink/20 rounded-xl rotate-45 animate-float opacity-90 hover-tilt" style={{ animationDelay: "3s", transform: "perspective(1000px) rotateX(-5deg) rotateY(20deg)" }}>
          <Code className="w-5 h-5 text-cyber-pink absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </div>
      </div>

      {/* Static floating elements for fallback */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyber-pink rounded-full animate-float opacity-70" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="animate-slide-up"
        >
          <h1 className="text-6xl md:text-8xl font-tech font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ALEX CHEN
          </h1>
          <div className="text-xl md:text-2xl font-mono mb-8 text-muted-foreground">
            <span className="text-primary">Cybersecurity Enthusiast</span> |{" "}
            <span className="text-secondary">Photographer</span> |{" "}
            <span className="text-accent">Designer</span>
          </div>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground">
            Protecting digital worlds, capturing moments, and crafting experiences through code and creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover-tilt inline-block text-center"
              data-testid="view-work-button"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all inline-block text-center"
              data-testid="contact-button"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <Link href="/about" data-testid="scroll-indicator">
            <ChevronDown className="w-8 h-8 text-primary cursor-pointer hover:text-secondary transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
