'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-primary/70 text-sm font-mono mb-4">[ ABOUT US ]</div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Your Vision Our Expertise Your Success Get Noticed Generate <span className="text-primary">Leads</span> Dominate.
              </h1>
              <p className="text-base text-white/70 leading-relaxed mb-8">
                Leading provider of industrial and engineering tools across the Democratic Republic of Congo. With showrooms in Lubumbashi, Likasi, and Kolwezi, we deliver world-class industrial products and solutions to empower African industries.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-white">10k+</div>
                  <div className="text-sm text-white/60">Completed Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15k</div>
                  <div className="text-sm text-white/60">Satisfied Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10k+</div>
                  <div className="text-sm text-white/60">Years Of Mastery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">45+</div>
                  <div className="text-sm text-white/60">Worldwide Honors</div>
                </div>
              </div>

              {/* Profile Circles */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-black"></div>
                  <div className="w-10 h-10 rounded-full bg-secondary border-2 border-black"></div>
                  <div className="w-10 h-10 rounded-full bg-accent border-2 border-black"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Main Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Small Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-28 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">Our Mission</span>
                  </div>
                </div>
                <div className="relative h-28 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">Our Vision</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-primary/70 text-sm font-mono mb-4">[ OUR MISSION & VISION ]</div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Driving <span className="text-primary">Industrial Excellence</span> Across Africa
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-primary/70 text-sm font-mono">[ OUR MISSION ]</div>
                      <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    To Provide World-Class <span className="text-primary">Industrial Solutions</span>
                  </h4>
                  <p className="text-white/70 leading-relaxed mb-6">
                    We are committed to delivering excellence through quality products, expert service, and innovative solutions that drive industrial progress throughout the Democratic Republic of Congo and beyond. Our mission is to be the bridge between world-class industrial technology and African industrial growth.
                  </p>
                  <Button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-primary/70 text-sm font-mono">[ OUR VISION ]</div>
                      <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    To Be The Most Trusted <span className="text-primary">Industrial Partner</span>
                  </h4>
                  <p className="text-white/70 leading-relaxed mb-6">
                    We envision a future where African industries have seamless access to world-class tools and equipment, driving economic growth and technological advancement across the continent. Our vision is to create a network of excellence that connects global industrial innovation with local expertise.
                  </p>
                  <Button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full">
                    Explore Vision
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
