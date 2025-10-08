'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
              {/* Left logo */}
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="The Tool Box Logo" 
                  width={240} 
                  height={144}
                  className="h-16 w-auto"
                />
              </Link>

          {/* Right nav and actions */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center space-x-8 text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-white/60"></div>
                <div className="w-1 h-6 bg-white/80"></div>
                <div className="w-1 h-3 bg-white/40"></div>
                <div className="w-1 h-5 bg-white/70"></div>
              </div>
              <span className="w-px h-4 bg-white/30"></span>
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-mono hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/contact">
                <Button className="border border-white/40 bg-transparent text-white hover:bg-white/10 font-mono text-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 text-white/90">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm">
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-2">
                <Link href="/contact" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10">Contact Us</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
