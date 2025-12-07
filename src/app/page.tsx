import Link from 'next/link';
import { Rocket, Zap, Heart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
              Welcome to Nexus Games
            </h1>
            <p className="text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Crafting Immersive Gaming Experiences for the World
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/products" className="inline-flex items-center gap-2">
                Explore Our Games <ChevronRight />
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <Rocket className="text-blue-600 mb-4" size={48} />
                <CardTitle className="text-2xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Teknologi game terdepan dengan engine modern dan gameplay mechanics yang revolusioner
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <Zap className="text-cyan-600 mb-4" size={48} />
                <CardTitle className="text-2xl">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Optimasi maksimal untuk semua platform, dari mobile hingga next-gen consoles
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <Heart className="text-red-500 mb-4" size={48} />
                <CardTitle className="text-2xl">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dibuat dengan cinta oleh gamers untuk gamers, setiap detail dirancang dengan sempurna
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <Card className="mt-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white border-0">
            <CardHeader>
              <CardTitle className="text-4xl text-center">
                Join Our Gaming Community
              </CardTitle>
              <CardDescription className="text-blue-50 text-center text-lg">
                Lebih dari 5 juta gamers telah mempercayai kami
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-12 text-center">
                <div>
                  <div className="text-5xl font-bold">5M+</div>
                  <div className="text-blue-100 mt-2">Active Players</div>
                </div>
                <div>
                  <div className="text-5xl font-bold">4.8★</div>
                  <div className="text-blue-100 mt-2">Average Rating</div>
                </div>
                <div>
                  <div className="text-5xl font-bold">15+</div>
                  <div className="text-blue-100 mt-2">Awards Won</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}