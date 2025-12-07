import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigations';

export const metadata: Metadata = {
  title: 'Nexus Games - Game Studio',
  description: 'Crafting Immersive Gaming Experiences for the World',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}