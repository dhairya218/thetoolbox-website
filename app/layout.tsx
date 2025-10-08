import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'The Tool Boxsas | Industrial Solutions Provider in DR Congo',
  description: 'Leading provider of industrial and engineering tools across Lubumbashi, Likasi, and Kolwezi. Offering bearings, power tools, PPE, welding equipment, and comprehensive industrial solutions.',
  keywords: 'industrial tools, engineering equipment, bearings, power tools, welding, DR Congo, Lubumbashi, Likasi, Kolwezi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
