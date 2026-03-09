import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoFull from '@/assets/logo-full.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="logo-container">
            <img
              src={logoFull}
              alt="Crispello Burger & Fries"
            />
          </div>
        </motion.div>

        {/* Title & Tagline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-gradient">Crispello</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Batna's Ultimate Burger Experience
          </p>
          <p className="text-lg text-muted-foreground">
            Premium burgers crafted with passion and served with excellence
          </p>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="premium-card p-4 flex items-center space-x-3">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-semibold text-accent">Open 24 Hours</span>
          </div>

          <div className="premium-card p-4 flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">Batna, Algeria</span>
          </div>

          <div className="premium-card p-4 flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">0661-234-567</span>
          </div>

          <div className="premium-card p-4 flex items-center space-x-3">
            <Star className="h-5 w-5 text-secondary fill-secondary" />
            <span className="text-muted-foreground">4.7 Rating</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="premium-button"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Menu
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Find Us
          </Button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-12 h-12 bg-secondary/10 rounded-full blur-lg"
      />
    </section>
  );
};

export default Hero;