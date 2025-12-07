'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <Gamepad2 size={32} />
          <span>NEXUS GAMES</span>
        </Link>
        <div className="flex gap-2">
          {links.map((link) => (
            <Button
              key={link.href}
              asChild
              variant={pathname === link.href ? "default" : "ghost"}
              className={
                pathname === link.href
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "text-blue-600 hover:text-blue-700 hover:shadow-md"
              }
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}