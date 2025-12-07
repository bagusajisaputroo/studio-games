'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { games } from '@/data/games';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover, PageTransition } from '@/components/Animations';

export default function ProductsPage() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);
  const router = useRouter();

  const handleGameClick = (gameId: number) => {
    router.push(`/products/${gameId}`);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Our Games
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-300 text-center mb-16">
              Jelajahi koleksi game kami yang menakjubkan
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {games.map((game) => (
              <StaggerItem key={game.id}>
                <ScaleOnHover scale={1.03}>
                  <Card
                    onMouseEnter={() => setHoveredGame(game.id)}
                    onMouseLeave={() => setHoveredGame(null)}
                    onClick={() => handleGameClick(game.id)}
                    className="overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all cursor-pointer bg-slate-900/70 backdrop-blur border-slate-800 hover:border-purple-500/50 h-full"
                  >
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 h-64 flex items-center justify-center text-9xl relative overflow-hidden">
                      <div className={`transition-all duration-300 ${hoveredGame === game.id ? 'scale-110' : 'scale-100'}`}>
                        {game.image}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-3xl mb-2 text-white">{game.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-purple-400">
                            {game.genre}
                          </CardDescription>
                        </div>
                        <Badge
                          variant={game.status === 'Released' ? 'default' : 'secondary'}
                          className={
                            game.status === 'Released' ? 'bg-green-500 hover:bg-green-600' :
                            game.status === 'In Development' ? 'bg-yellow-500 hover:bg-yellow-600' :
                            'bg-blue-500 hover:bg-blue-600'
                          }
                        >
                          {game.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        {game.desc}
                      </p>
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700" 
                        size="lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGameClick(game.id);
                        }}
                      >
                        Learn More <ChevronRight className="ml-2" size={20} />
                      </Button>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </PageTransition>
  );
}