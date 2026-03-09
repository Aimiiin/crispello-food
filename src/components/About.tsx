import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';
import restaurantInterior1 from '@/assets/restaurant-interior-1.png';
import restaurantInterior2 from '@/assets/restaurant-interior-2.png';
import foodBurger1 from '@/assets/food-burger-1.png';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients to craft exceptional burgers"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "A welcoming space where families and friends gather to enjoy great food"
    },
    {
      icon: Clock,
      title: "Always Open",
      description: "24-hour service to satisfy your cravings anytime, day or night"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every burger is prepared with passion and attention to detail"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
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
            Our <span className="text-gradient">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Born in the heart of Batna, Crispello represents a passion for exceptional burgers
            and an unwavering commitment to quality and taste.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl font-bold mb-6 text-gradient">
              Crafting Excellence Since Day One
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              At Crispello, we believe that a great burger is more than just food—it's an experience.
              Our journey began with a simple mission: to serve the most delicious, high-quality burgers
              in Batna using only the freshest ingredients and time-honored cooking techniques.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              From our signature beef patties to our hand-cut fries, everything is prepared with
              meticulous attention to detail. We source our ingredients locally whenever possible,
              supporting our community while ensuring the freshest flavors in every bite.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're craving our classic Crispello burger or one of our specialty creations,
              every meal is crafted with love and served with a smile. Come taste the difference
              that passion makes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src={restaurantInterior1}
                alt="Crispello Restaurant Interior"
                className="w-full rounded-xl shadow-lg hover:shadow-premium transition-shadow duration-300"
              />
              <img
                src={foodBurger1}
                alt="Crispello Burger"
                className="w-full rounded-xl shadow-lg hover:shadow-premium transition-shadow duration-300"
              />
            </div>
            <div className="mt-8">
              <img
                src={restaurantInterior2}
                alt="Crispello Dining Area"
                className="w-full rounded-xl shadow-lg hover:shadow-premium transition-shadow duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="premium-card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-display text-xl font-bold mb-2 text-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;