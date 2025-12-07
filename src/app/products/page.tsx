'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { games } from '@/data/games';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          Our Games
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16">
          Jelajahi koleksi game kami yang menakjubkan
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game) => (
            <Card
              key={game.id}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
              className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 cursor-pointer border-2"
            >
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-64 flex items-center justify-center text-9xl">
                {game.image}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl mb-2">{game.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {game.genre}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={game.status === 'Released' ? 'default' : 'secondary'}
                    className={
                      game.status === 'Released' ? 'bg-green-500' :
                      game.status === 'In Development' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }
                  >
                    {game.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {game.desc}
                </p>
                <Button className="w-full" size="lg">
                  Learn More <ChevronRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}