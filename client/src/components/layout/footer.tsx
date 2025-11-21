import { motion } from "framer-motion";
import { Link } from "wouter";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "from-gray-600 to-gray-800" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "from-blue-500 to-blue-700" },
    { icon: Twitter, href: "#", label: "Twitter", color: "from-cyan-400 to-blue-500" },
    { icon: Mail, href: "#", label: "Email", color: "from-primary to-secondary" },
  ];

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative footer-3d overflow-hidden" data-testid="footer">
      {/* 3D Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card to-background opacity-95"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="text-4xl font-tech font-black mb-4 logo-3d">
              <span className="gradient-text">ALEX CHEN</span>
            </div>
            <p className="text-muted-foreground">
              Building secure digital experiences with creative innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="font-tech text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="font-tech text-xl font-bold mb-4 text-secondary">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`p-3 rounded-xl bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-xl button-3d`}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground"
        >
          <p>&copy; 2024 Alex Chen. All rights reserved.</p>
          <p className="flex items-center gap-2 mt-2 md:mt-0">
            Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
