import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Reviews = () => {
  const rating = 4.7;
  const totalReviews = 247;

  const testimonials = [
    {
      name: "Ahmed Benali",
      rating: 5,
      text: "The best burgers in Batna! The quality is exceptional and the service is always friendly. My family and I come here every week.",
      date: "2 days ago"
    },
    {
      name: "Sarah Mansouri",
      rating: 5,
      text: "Amazing food quality and great atmosphere. The Crispello burger is my absolute favorite. Highly recommend to anyone looking for premium burgers!",
      date: "1 week ago"
    },
    {
      name: "Karim Tadjer",
      rating: 4,
      text: "Great place for a quick bite or family dinner. The chicken wraps are delicious and the staff is very welcoming. Clean and modern restaurant.",
      date: "2 weeks ago"
    },
    {
      name: "Amina Boukhari",
      rating: 5,
      text: "Outstanding experience! The food arrived fresh and hot, and the flavors were incredible. This is definitely my new favorite burger place in Batna.",
      date: "3 weeks ago"
    },
    {
      name: "Omar Zerrouki",
      rating: 5,
      text: "Perfect burgers every time! The ingredients are always fresh, and the preparation is excellent. The 24-hour service is a huge plus for late night cravings.",
      date: "1 month ago"
    },
    {
      name: "Nadia Cherif",
      rating: 4,
      text: "Delicious food with great presentation. The restaurant has a modern and clean atmosphere. The Mexican wrap was particularly tasty!",
      date: "1 month ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating
            ? 'text-secondary fill-secondary'
            : 'text-muted-foreground'
          }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-background">
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
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't just take our word for it. Here's what our valued customers
            have to say about their Crispello experience.
          </p>

          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-4 premium-card p-6"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                {rating}
              </div>
              <div className="flex items-center space-x-1 mb-2">
                {renderStars(Math.floor(rating))}
              </div>
              <p className="text-muted-foreground text-sm">
                Based on {totalReviews} reviews
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card h-full hover:shadow-premium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                    <Quote className="h-6 w-6 text-primary/30" />
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{review.text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
          <p className="text-muted-foreground mb-6">
            Experience the quality and taste that has made us Batna's favorite burger destination.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="premium-button"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Order Your Burger Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;