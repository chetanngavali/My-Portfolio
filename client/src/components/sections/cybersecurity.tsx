import { motion } from "framer-motion";
import { Shield, Wifi, Bug, Eye } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import cybersecurityBg from "@assets/generated_images/Cybersecurity_section_background_image_77b0d44d.png";

export function Cybersecurity() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const expertiseAreas = [
    {
      icon: Wifi,
      title: "Network Security",
      description: "Designing secure network architectures and implementing robust firewall configurations.",
      tools: ["Wireshark", "pfSense", "Nmap"],
      color: "primary",
    },
    {
      icon: Bug,
      title: "Penetration Testing",
      description: "Identifying vulnerabilities through ethical hacking and comprehensive security assessments.",
      tools: ["Metasploit", "Burp Suite", "Kali Linux"],
      color: "secondary",
    },
    {
      icon: Eye,
      title: "Threat Detection",
      description: "Advanced monitoring and incident response using cutting-edge SIEM solutions.",
      tools: ["Splunk", "ELK Stack", "OSSEC"],
      color: "accent",
    },
  ];

  const certifications = ["CISSP", "CEH", "OSCP", "Security+"];

  return (
    <section
      id="cybersecurity"
      ref={ref}
      className="min-h-screen py-20 relative overflow-hidden flex items-center"
      data-testid="cybersecurity-section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-card to-background animate-pulse-slow"></div>
      </div>

      {/* Floating Security Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-xl rotate-45 animate-float">
          <Shield className="w-8 h-8 text-primary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </div>
        <div className="absolute bottom-40 left-32 w-14 h-14 bg-secondary/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "1s" }}>
          <Wifi className="w-7 h-7 text-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-accent/10 rounded-xl rotate-12 animate-float" style={{ animationDelay: "2s" }}>
          <Bug className="w-6 h-6 text-accent/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-18 h-18 bg-primary/10 rounded-xl -rotate-45 animate-float" style={{ animationDelay: "3s" }}>
          <Eye className="w-8 h-8 text-primary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 text-accent">
            <Shield className="inline-block w-10 h-10 mr-4" />
            CYBERSECURITY
          </h2>
          <p className="text-xl text-muted-foreground">Defending against threats in the digital frontier</p>
        </motion.div>

        {/* Terminal Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="terminal-effect rounded-xl p-8 mb-12 font-mono"
          data-testid="terminal-display"
        >
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-accent">alex@security:~$</div>
          </div>
          <div className="text-accent space-y-2">
            <div>&gt; Initializing security protocols...</div>
            <div>&gt; Scanning for vulnerabilities...</div>
            <div>&gt; Implementing defense mechanisms...</div>
            <div className="text-green-400">&gt; System secured successfully ✓</div>
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover-tilt"
              data-testid={`expertise-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`text-3xl text-${area.color} mb-4`}>
                <area.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 bg-${area.color}/20 text-${area.color} rounded-full text-sm`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid={`cert-${cert.toLowerCase()}`}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
