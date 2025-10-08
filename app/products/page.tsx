'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { productsData, categories } from '@/lib/products';
import { Badge } from '@/components/ui/badge';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts =
    selectedCategory === 'All Products'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive industrial solutions for all your needs
          </p>
        </motion.div>
      </section>

      <section className="py-12 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={
                  selectedCategory === category
                    ? 'bg-primary hover:bg-primary/90'
                    : 'hover:bg-accent hover:text-primary'
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent">
                      <div className="relative h-64 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${product.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-accent text-primary font-semibold">
                            {product.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-accent p-3 rounded-lg shadow-lg">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {product.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-primary mb-2">
                            Key Features:
                          </h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {product.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-muted-foreground flex items-center"
                              >
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href="/contact">
                          <Button className="w-full bg-primary hover:bg-accent hover:text-primary transition-colors font-semibold">
                            Enquire Now
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                No products found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our expert team is ready to help you find the perfect industrial solution for your specific needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6"
              >
                Contact Our Experts
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
