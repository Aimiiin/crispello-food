import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const menuData = {
    burgers: [
      { name: "Cheese Burger", description: "Classic beef burger with cheese, lettuce, tomato, and special sauce", price: "250 DZD" },
      { name: "Classique", description: "Our signature burger with premium beef patty and fresh toppings", price: "250 DZD" },
      { name: "Pickle Cheese", description: "Juicy burger with pickles, cheese, and crispy bacon", price: "300 DZD" },
      { name: "Double Cheese Burger", description: "Double beef patties with melted cheese and fresh vegetables", price: "350 DZD" },
      { name: "Pickle Zinger", description: "Spicy chicken burger with pickles and zesty sauce", price: "300 DZD" },
      { name: "Zinger Burger", description: "Crispy spiced chicken with fresh lettuce and mayo", price: "250 DZD" },
      { name: "Slow Zinger", description: "Tender slow-cooked chicken with special herbs and spices", price: "350 DZD" },
      { name: "Big Zinger", description: "Extra-large spicy chicken burger with premium toppings", price: "400 DZD" },
      { name: "Cheenger", description: "Ultimate cheese lover's burger with multiple cheese varieties", price: "500 DZD" }
    ],
    wraps: [
      { name: "Marinda Wrap", description: "Grilled chicken wrap with marinara sauce and fresh vegetables", price: "350 DZD" },
      { name: "Chicken Wrap", description: "Tender chicken strips with lettuce, tomato, and garlic sauce", price: "400 DZD" },
      { name: "Mexican Wrap", description: "Spicy chicken with peppers, cheese, and Mexican seasoning", price: "450 DZD" }
    ],
    tacos: [
      { name: "Marinda Taco", description: "Chicken tacos with marinara sauce and cheese", price: "400 DZD" },
      { name: "Chicken Taco", description: "Seasoned chicken with fresh salsa and sour cream", price: "450 DZD" },
      { name: "Mexican Taco", description: "Spicy beef with authentic Mexican flavors", price: "500 DZD" }
    ],
    sides: [
      { name: "Marina Poutine", description: "Crispy fries with cheese curds and marinara gravy", price: "500 DZD" },
      { name: "Chicken Poutine", description: "Fries topped with chicken pieces and special sauce", price: "550 DZD" },
      { name: "Mexican Poutine", description: "Loaded fries with spicy beef and cheese", price: "600 DZD" },
      { name: "Classic Poutine", description: "Traditional poutine with cheese and gravy", price: "450 DZD" }
    ]
  };

  const categories = [
    { id: 'burgers', title: 'Nos Burgers', items: menuData.burgers, color: 'bg-primary' },
    { id: 'wraps', title: 'Nos Wraps', items: menuData.wraps, color: 'bg-secondary' },
    { id: 'tacos', title: 'Nos Tacos', items: menuData.tacos, color: 'bg-accent' },
    { id: 'sides', title: 'Sides & Poutines', items: menuData.sides, color: 'bg-primary' }
  ];

  return (
    <section id="menu" className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-background">
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
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium burgers, wraps, and sides.
            Each item is prepared fresh to order with the finest ingredients.
          </p>
        </motion.div>

        {/* Menu Categories */}
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Badge className={`${category.color} text-white px-4 py-2 text-lg font-bold mr-4`}>
                {category.title}
              </Badge>
              <div className="flex-1 h-px bg-border"></div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Mobile compact card */}
                  <div className="md:hidden premium-card p-2 flex flex-col items-center text-center h-full">
                    <div className="w-full aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-2 flex items-center justify-center border border-border/20">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-bold text-foreground leading-tight mb-1 line-clamp-2">{item.name}</p>
                    <span className="text-xs font-bold text-gradient mb-1">{item.price}</span>
                    <button className="w-full py-1 text-xs bg-primary text-primary-foreground rounded font-medium mt-auto">
                      Order
                    </button>
                  </div>

                  {/* Desktop full card */}
                  <Card className="hidden md:flex flex-col premium-card h-full hover:shadow-premium transition-all duration-300">
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center border border-border/20">
                        <div className="text-center text-muted-foreground">
                          <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-sm">Image coming soon</p>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {item.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 flex-1">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gradient">
                          {item.price}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 min-h-[44px] bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                        >
                          Order Now
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;