import React from "react";
import { motion } from "framer-motion";
import { Shield, Wifi, Bug, Eye } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

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
      className="py-20 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-testid="cybersecurity-section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/10"></div>

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
