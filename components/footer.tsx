import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-black to-[#0b1733] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="The Tool Box Logo" 
                  width={120} 
                  height={72}
                  className="h-10 w-auto"
                />
              </Link>
              <div>
                <h2 className="text-xl font-bold">The Tool Boxsas</h2>
                <p className="text-xs text-accent">Industrial Solutions</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Leading provider of industrial and engineering tools across Democratic Republic of Congo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Our Locations</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>Lubumbashi, D.R. Congo</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>Likasi, D.R. Congo</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>Kolwezi, D.R. Congo</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>(+243) 904-060-858</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>(+243) 906-828-185</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>info@thetoolboxsas.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/70">
            &copy; {currentYear} The Tool Boxsas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
