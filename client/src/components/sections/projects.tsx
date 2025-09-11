import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Github, ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Security", "Web Dev", "Design"];

  const projects = [
    {
      title: "SecureOps Dashboard",
      description: "Real-time security monitoring dashboard with threat intelligence and incident response workflows.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Security",
      technologies: ["React", "Python", "ELK Stack"],
      github: "#",
      demo: "#",
    },
    {
      title: "LensStory Portfolio",
      description: "Elegant photography portfolio with 3D galleries, lightbox effects, and client management system.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web Dev",
      technologies: ["Next.js", "Three.js", "Framer Motion"],
      github: "#",
      demo: "#",
    },
    {
      title: "TechNova Branding",
      description: "Complete brand identity redesign for a fintech startup including logo, style guide, and marketing materials.",
      image: "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Design",
      technologies: ["Figma", "Illustrator", "InDesign"],
      demo: "#",
    },
    {
      title: "VulnHunter Pro",
      description: "Automated vulnerability scanning tool with machine learning threat detection and detailed reporting.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Security",
      technologies: ["Python", "TensorFlow", "Docker"],
      github: "#",
    },
    {
      title: "CraftMarket Platform",
      description: "Full-stack e-commerce platform for artisans with secure payments, inventory management, and analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web Dev",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "MindfulnessApp UX",
      description: "User experience design for meditation app with personalized wellness journeys and progress tracking.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Design",
      technologies: ["Figma", "Principle", "User Research"],
      demo: "#",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-20 bg-card" data-testid="projects-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <Rocket className="inline-block w-10 h-10 mr-4" />
            PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground">Showcasing innovation across security, creativity, and technology</p>
        </motion.div>

        {/* Project Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border border-muted text-muted-foreground hover:border-primary hover:text-primary"
              }`}
              data-testid={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group glass-effect rounded-xl overflow-hidden hover-tilt"
              data-testid={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-3 py-1 bg-${project.category === "Security" ? "primary" : project.category === "Web Dev" ? "secondary" : "accent"}/20 text-${project.category === "Security" ? "primary" : project.category === "Web Dev" ? "secondary" : "accent"} rounded-full text-xs`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted/50 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-github-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-demo-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
