import { motion } from "framer-motion";
import { Shield, Code, Camera, Palette, Brain, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profileImage from "@/assets/profile.jpg";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { icon: Shield, label: "Security", color: "text-primary" },
    { icon: Code, label: "Development", color: "text-secondary" },
    { icon: Camera, label: "Photography", color: "text-accent" },
    { icon: Palette, label: "Design", color: "text-primary" },
    { icon: Brain, label: "Strategy", color: "text-secondary" },
    { icon: Users, label: "Leadership", color: "text-accent" },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen py-20 relative overflow-hidden flex items-center" data-testid="about-section">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-card to-background animate-pulse-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/10 rounded-xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-secondary/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent/10 rounded-xl rotate-45 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-14 h-14 bg-primary/10 rounded-xl -rotate-45 animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={profileImage}
              alt="Alex Chen Professional Photo"
              className="w-full max-w-md mx-auto rounded-2xl neon-border hover-tilt"
              data-testid="profile-image"
            />

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 p-3 bg-primary rounded-xl animate-float">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 bg-secondary rounded-xl animate-float" style={{ animationDelay: "1s" }}>
              <Camera className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div className="absolute top-1/2 -right-8 p-3 bg-accent rounded-xl animate-float" style={{ animationDelay: "2s" }}>
              <Palette className="w-6 h-6 text-accent-foreground" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-tech font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I'm a passionate technologist who bridges the gap between security, creativity, and innovation.
                With expertise in cybersecurity, I protect digital assets while capturing the world through my lens.
              </p>
              <p>
                My journey spans from implementing robust security protocols to creating visually stunning designs
                that tell compelling stories. I believe in the power of technology to create positive change.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 glass-effect rounded-lg text-center hover-tilt"
                  data-testid={`skill-${skill.label.toLowerCase()}`}
                >
                  <skill.icon className={`${skill.color} w-8 h-8 mx-auto mb-2`} />
                  <div className="font-semibold">{skill.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
