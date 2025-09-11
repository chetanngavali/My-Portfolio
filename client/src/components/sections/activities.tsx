import { motion } from "framer-motion";
import { Calendar, Users, Award, ExternalLink, MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function Activities() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const activities = [
    {
      type: "Hackathon",
      title: "CyberSec Challenge 2024",
      location: "San Francisco, CA",
      date: "March 2024",
      role: "Team Lead & Security Architect",
      description: "Led a team of 5 developers to create an AI-powered threat detection system. Won 2nd place among 150+ teams.",
      achievements: ["2nd Place Winner", "Best Security Innovation"],
      icon: Award,
      color: "primary",
    },
    {
      type: "Workshop",
      title: "Advanced Penetration Testing",
      location: "DEF CON 31, Las Vegas",
      date: "August 2023",
      role: "Instructor",
      description: "Conducted hands-on workshop on advanced penetration testing techniques for 50+ cybersecurity professionals.",
      achievements: ["4.9/5 Rating", "50+ Attendees"],
      icon: Users,
      color: "secondary",
    },
    {
      type: "Webinar",
      title: "Zero Trust Architecture Implementation",
      location: "Online",
      date: "January 2024",
      role: "Featured Speaker",
      description: "Presented comprehensive guide on implementing Zero Trust security frameworks in enterprise environments.",
      achievements: ["500+ Live Attendees", "Featured on InfoSec Magazine"],
      icon: Calendar,
      color: "accent",
    },
    {
      type: "Conference",
      title: "BSides SF Security Conference",
      location: "San Francisco, CA",
      date: "April 2024",
      role: "Speaker",
      description: "Delivered keynote on 'The Future of AI in Cybersecurity Defense' to industry professionals.",
      achievements: ["Keynote Speaker", "300+ Audience"],
      icon: Users,
      color: "primary",
    },
    {
      type: "Workshop",
      title: "Secure Code Review Bootcamp",
      location: "Stanford University",
      date: "September 2023",
      role: "Lead Instructor",
      description: "Intensive 3-day workshop on secure coding practices and vulnerability assessment for computer science students.",
      achievements: ["40 Students Trained", "University Partnership"],
      icon: Users,
      color: "secondary",
    },
    {
      type: "Hackathon",
      title: "FinTech Security Innovation",
      location: "New York, NY",
      date: "November 2023",
      role: "Security Consultant",
      description: "Mentored teams on implementing robust security measures for financial technology applications.",
      achievements: ["Mentor Award", "3 Teams Guided to Finals"],
      icon: Award,
      color: "accent",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Hackathon":
        return "bg-primary/20 text-primary border-primary/30";
      case "Workshop":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "Webinar":
        return "bg-accent/20 text-accent border-accent/30";
      case "Conference":
        return "bg-primary/20 text-primary border-primary/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/20 text-primary";
      case "secondary":
        return "bg-secondary/20 text-secondary";
      case "accent":
        return "bg-accent/20 text-accent";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  return (
    <section
      id="activities"
      ref={ref}
      className="py-20 relative overflow-hidden scroll-mt-24"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95))",
      }}
      data-testid="activities-section"
    >
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            <Calendar className="inline-block w-10 h-10 mr-4" />
            ACTIVITIES & EVENTS
          </h2>
          <p className="text-xl text-muted-foreground">
            Sharing knowledge and building the cybersecurity community
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group hover-tilt"
              data-testid={`activity-card-${index}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconColor(activity.color)}`}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(activity.type)}`}>
                      {activity.type}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-secondary" />
                  <span className="text-secondary font-medium">{activity.role}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {activity.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Key Achievements:</h4>
                <div className="flex flex-wrap gap-2">
                  {activity.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/30"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Looking for a Speaker or Mentor?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              I'm always excited to share knowledge and contribute to the cybersecurity community. 
              Whether it's a conference, workshop, or hackathon, I'd love to be involved.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover-tilt"
              data-testid="contact-cta-button"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}