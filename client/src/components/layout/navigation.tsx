import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";
import { motion } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/cybersecurity", label: "Cybersecurity" },
    { href: "/photography", label: "Photography" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 nav-3d" data-testid="navigation">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="text-3xl font-tech font-black relative z-10 logo-3d">
              <span className="gradient-text">AC</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl rounded-full"></div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                <motion.div
                  className={`nav-link-3d px-5 py-2.5 rounded-xl font-medium transition-all ${
                    location === item.href 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50' 
                      : 'text-foreground hover:text-primary'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {location !== item.href && (
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-gradient-to-br from-muted to-muted/50 hover:from-primary/20 hover:to-secondary/20 transition-all shadow-lg hover:shadow-primary/25 button-3d"
              data-testid="theme-toggle"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>

            <motion.button
              className="md:hidden p-3 rounded-xl bg-gradient-to-br from-muted to-muted/50 shadow-lg button-3d"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -15 }}
            className="md:hidden mt-6 pb-4"
          >
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`block px-5 py-3 rounded-xl font-medium transition-all ${
                      location === item.href 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50' 
                        : 'bg-muted/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20'
                    }`}
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
