'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import {
  Settings,
  Cog,
  CircleDot,
  Zap,
  Shield,
  Wrench,
  Hammer,
  Drill,
  HardHat,
  Building2,
  Flame,
  Bolt,
} from 'lucide-react';

const products = [
  {
    title: 'Lincoln Automatic',
    description: 'Advanced automatic lubrication systems for industrial machinery',
    icon: Settings,
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'MAPRO Products',
    description: 'Premium quality industrial products and solutions',
    icon: Cog,
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Bearings & Transmission',
    description: 'High-performance bearings and transmission products',
    icon: CircleDot,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Diesel Generator Set',
    description: 'Reliable power generation equipment for industrial use',
    icon: Zap,
    image: 'https://images.pexels.com/photos/162240/cables-cable-drum-large-162240.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Personal Protective Equipment',
    description: 'Complete range of safety equipment and PPE',
    icon: Shield,
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Electrical Tools & Accessories',
    description: 'Professional electrical tools and accessories',
    icon: Bolt,
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Hand Tools and Tackles',
    description: 'Comprehensive selection of hand tools',
    icon: Hammer,
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Lifting Tools',
    description: 'Heavy-duty lifting equipment and solutions',
    icon: Wrench,
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Construction Equipment',
    description: 'Professional construction tools and machinery',
    icon: HardHat,
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Structural Steel',
    description: 'Quality structural steel products',
    icon: Building2,
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Welding Equipment',
    description: 'Complete welding equipment and consumables',
    icon: Flame,
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Power Tools & Abrasives',
    description: 'Professional power tools and abrasive products',
    icon: Drill,
    image: 'https://images.pexels.com/photos/5691577/pexels-photo-5691577.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Video Slider Component
function VideoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Industrial Excellence",
      subtitle: "Advanced Tools & Solutions",
      description: "Leading provider of industrial and engineering tools across Democratic Republic of Congo",
      background: "bg-gradient-to-br from-[#f0851e] to-[#D76714]",
      videoUrl: "/h1.mp4"
    },
    {
      id: 2,
      title: "Power & Automation",
      subtitle: "Diesel Generators & Systems",
      description: "Reliable power solutions and automation systems for industrial applications",
      background: "bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]",
      videoUrl: "/h1.mp4"
    },
    {
      id: 3,
      title: "Safety First",
      subtitle: "Protective Equipment",
      description: "Complete range of personal protective equipment and safety solutions",
      background: "bg-gradient-to-br from-[#059669] to-[#10b981]",
      videoUrl: "/h1.mp4"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 ${slides[currentSlide].background}`}
        >
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover opacity-30"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              poster=""
            >
              <source src={slides[currentSlide].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-white"
                >
                  <h1 className="text-6xl md:text-8xl font-bold mb-4">
                    {slides[currentSlide].title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90">
                    {slides[currentSlide].subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl">
                    {slides[currentSlide].description}
                  </p>
                  <div className="flex gap-4">
                    <Link href="/contact">
                      <Button className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          
          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Video Slider Hero */}
      <VideoSlider />

      {/* Products Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0851e' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-white/50"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive industrial solutions for all your needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary/30 bg-white/80 backdrop-blur-sm hover:bg-white">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${product.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-accent p-3 rounded-lg glow">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <Link href="/contact">
                        <Button
                          variant="ghost"
                          className="w-full group-hover:bg-accent group-hover:text-primary transition-colors"
                        >
                          Enquire Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
