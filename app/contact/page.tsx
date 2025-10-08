'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const locations = [
  {
    city: 'Lubumbashi',
    address: '6612, Route Likasi, Near Mexco/Rulco, Lubumbashi - D.R. Congo',
    phones: ['+243 904-060-858', '+243 906-828-185', '+243 808-398-147'],
    email: 'lubumbashi@thetoolboxsas.com',
  },
  {
    city: 'Likasi',
    address: '115, Route Likasi, Quartier Kitabataba, Commune De Likasi, Enface Park Ya Toyota',
    phones: ['+243 906-535-364', '+243 854-550-998'],
    email: 'likasi@thetoolboxsas.com',
  },
  {
    city: 'Kolwezi',
    address: 'No-7956, Route Likasi, Q/Joli Site, Commune Manika, Kolwezi - D.R. Congo',
    phones: ['+243 906-462-069', '+243 808-398-227'],
    email: 'kolwezi@thetoolboxsas.com',
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/5691577/pexels-photo-5691577.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team at any of our three locations
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+243 XXX XXX XXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-lg py-6"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Our Showrooms
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Visit us at any of our three convenient locations across DR Congo.
                </p>
              </div>

              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {location.city} Showroom
                      </h3>

                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">{location.address}</p>
                        </div>

                        <div className="space-y-2">
                          {location.phones.map((phone, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                              <a
                                href={`tel:${phone.replace(/\s/g, '')}`}
                                className="text-muted-foreground hover:text-accent transition-colors"
                              >
                                {phone}
                              </a>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                          <a
                            href={`mailto:${location.email}`}
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {location.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <Card className="bg-secondary/30 border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Business Hours
                      </h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you need a quote, technical support, or have questions about our products, our expert team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+243904060858">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="mailto:info@thetoolboxsas.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
