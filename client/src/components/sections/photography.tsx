import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Lightbox } from "@/components/ui/lightbox";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import urbanStreetPhoto from "@assets/generated_images/Urban_street_photography_7cff418c.png";
import professionalPortrait from "@assets/generated_images/Professional_portrait_photography_2423bc7e.png";
import mountainLandscape from "@assets/generated_images/Mountain_landscape_photography_66d3ce36.png";
import macroFlowerPhoto from "@assets/generated_images/Macro_flower_photography_8caff2c1.png";
import seascapePhoto from "@assets/generated_images/Peaceful_seascape_photography_871ffb57.png";

export function Photography() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: urbanStreetPhoto,
      alt: "Urban cityscape photography",
      title: "Urban Landscapes",
      description: "City architecture & street photography",
    },
    {
      src: professionalPortrait,
      alt: "Portrait photography",
      title: "Portrait Series",
      description: "Professional & artistic portraits",
    },
    {
      src: mountainLandscape,
      alt: "Nature landscape photography",
      title: "Nature Escapes",
      description: "Landscape & adventure photography",
    },
    {
      src: macroFlowerPhoto,
      alt: "Abstract architecture photography",
      title: "Abstract Forms",
      description: "Geometric & minimal compositions",
    },
    {
      src: seascapePhoto,
      alt: "Event photography",
      title: "Event Coverage",
      description: "Corporate & social events",
    },
    {
      src: seascapePhoto,
      alt: "Travel photography", 
      title: "Travel Stories",
      description: "Cultural & destination photography",
    },
  ];

  const stats = [
    { value: "500+", label: "Photos Captured" },
    { value: "50+", label: "Events Covered" },
    { value: "25+", label: "Happy Clients" },
    { value: "5", label: "Years Experience" },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="photography" ref={ref} className="py-20 bg-card" data-testid="photography-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 text-secondary">
            <Camera className="inline-block w-10 h-10 mr-4" />
            PHOTOGRAPHY
          </h2>
          <p className="text-xl text-muted-foreground">Capturing moments through light and emotion</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-xl hover-tilt cursor-pointer"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">{image.title}</h4>
                  <p className="text-sm opacity-80">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="text-3xl font-tech font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
}
