import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import foodBurger1 from '@/assets/food-burger-1.png';
import foodBurger2 from '@/assets/food-burger-2.png';
import foodChicken from '@/assets/food-chicken.png';
import restaurantInterior1 from '@/assets/restaurant-interior-1.png';
import restaurantInterior2 from '@/assets/restaurant-interior-2.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: foodBurger1,
      alt: "Crispello Signature Burger",
      category: "Food"
    },
    {
      src: foodBurger2,
      alt: "Classic Burger with Fries",
      category: "Food"
    },
    {
      src: foodChicken,
      alt: "Crispy Chicken Pieces",
      category: "Food"
    },
    {
      src: restaurantInterior1,
      alt: "Restaurant Dining Area",
      category: "Restaurant"
    },
    {
      src: restaurantInterior2,
      alt: "Modern Interior Design",
      category: "Restaurant"
    }
  ];

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our delicious food and welcoming restaurant atmosphere.
            Every image tells a story of quality, taste, and exceptional dining experience.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-foreground font-semibold">
                      {image.alt}
                    </h3>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-3 text-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="h-8 w-8" />
              </button>

              <img
                src={selectedImage}
                alt="Full size"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Experience the taste and atmosphere yourself
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="premium-button"
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Visit Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;