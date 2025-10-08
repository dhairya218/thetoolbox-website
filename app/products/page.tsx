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

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-80 flex-shrink-0"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-primary text-white shadow-md'
                          : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      <span className="font-medium">{category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Products */}
            <div className="flex-1">
              {/* Products Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {selectedCategory}
                </h2>
                <p className="text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </motion.div>

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
                    className="group"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary bg-white">
                      <div className="relative h-80 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${product.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                        
                        {/* Product Name Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                            {product.title}
                          </h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-accent text-primary font-semibold px-3 py-1">
                            {product.category}
                          </Badge>
                        </div>

                        {/* Icon */}
                        <div className="absolute top-4 left-4">
                          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-3">
                            Key Features:
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {product.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="text-sm text-muted-foreground flex items-center"
                              >
                                <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Link href="/contact">
                          <Button className="w-full bg-primary hover:bg-accent hover:text-primary transition-colors font-semibold py-3">
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
          </div>
        </div>
      </section>

    </div>
  );
}
