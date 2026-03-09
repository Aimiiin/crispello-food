import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Car, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Location = () => {
  const contactInfo = {
    address: "Avenue de l'Indépendance, Batna 05000, Algeria",
    phone: "0661-234-567",
    hours: "24 Hours • Open Every Day",
    coordinates: { lat: 35.5559, lng: 6.1741 }
  };

  const features = [
    {
      icon: Car,
      title: "Free Parking",
      description: "Ample parking space available for our customers"
    },
    {
      icon: Utensils,
      title: "Dine In & Takeaway",
      description: "Enjoy in our restaurant or take your order to go"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "We're always open to serve your cravings"
    }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-background to-muted/20">
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
            Find <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Batna, we're easily accessible and ready to serve you
            the best burgers in town, any time of day or night.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address Card */}
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Our Location</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">
                      {contactInfo.phone}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      For reservations and orders
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="premium-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      {contactInfo.hours}
                    </p>
                    <p className="text-sm text-secondary mt-1 font-medium">
                      Always open for you!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="premium-button flex-1"
                onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`, '_blank')}
              >
                <Navigation className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Interactive Map */}
            <div className="premium-card p-6">
              <div className="map-placeholder aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.369837525786!2d6.168376675904542!3d35.54456727263174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f411007c898599%3A0x919b0decd0bf98ea!2sCrispello%20Burger!5e0!3m2!1sen!2sdz!4v1773017349967!5m2!1sen!2sdz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Crispello Burger Location"
                ></iframe>
              </div>
            </div>

            {/* Features */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 premium-card"
                >
                  <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;