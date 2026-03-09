import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from 'lucide-react';
import logoSimple from '@/assets/logo-simple.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/crispello_batna',
      label: 'Instagram'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/crispello.batna',
      label: 'Facebook'
    },
    {
      icon: Mail,
      href: 'mailto:contact@crispello.dz',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Find Us', href: '#location' }
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-muted/20 border-t border-border/20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoSimple} alt="Crispello" className="h-10 w-auto" />
              <span className="font-display font-bold text-xl text-gradient">
                Crispello
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Batna's ultimate burger experience. Serving premium quality burgers, 
              wraps, and sides 24/7 with passion and excellence.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-muted-foreground hover:text-primary transition-all duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 text-foreground">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Avenue de l'Indépendance<br />
                  Batna 05000, Algeria
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  0661-234-567
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-secondary font-medium">Open 24 Hours</span><br />
                  Every Day of the Week
                </p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 text-foreground">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Follow us on social media for the latest updates, special offers, and delicious content!
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Special weekend offers</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>New menu items first</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Behind the scenes content</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Crispello Burger & Fries. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm">
            Made with <span className="text-primary">❤</span> in Batna, Algeria
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;