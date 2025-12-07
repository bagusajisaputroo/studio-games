'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Star, Users, Calendar, Gamepad2, Download, Share2 } from 'lucide-react';
import { games } from '@/data/games';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FadeIn, 
  SlideIn, 
  StaggerContainer, 
  StaggerItem, 
  BounceIn, 
  PageTransition,
  ScaleOnHover,
  RotateOnHover,
  Floating
} from '@/components/Animations';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const gameId = parseInt(params.id as string);
  const game = games.find(g => g.id === gameId);

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <Button onClick={() => router.push('/products')}>
            <ArrowLeft className="mr-2" size={20} />
            Back to Games
          </Button>
        </div>
      </div>
    );
  }

  const features = [
    { icon: Star, label: 'Rating', value: '4.8/5.0' },
    { icon: Users, label: 'Players', value: '2M+' },
    { icon: Calendar, label: 'Released', value: '2023' },
    { icon: Gamepad2, label: 'Platform', value: 'Multi' }
  ];

  const screenshots = [
    { id: 1, emoji: '🎮' },
    { id: 2, emoji: '🎯' },
    { id: 3, emoji: '🎨' },
    { id: 4, emoji: '⚔️' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <FadeIn>
            <Button 
              onClick={() => router.push('/products')}
              variant="outline"
              className="mb-8 border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Games
            </Button>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Hero Image */}
            <SlideIn direction="left">
              <div className="relative">
                <Floating>
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl h-[500px] flex items-center justify-center text-[200px] shadow-2xl shadow-purple-500/30 overflow-hidden">
                    <div className="relative z-10">{game.image}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </Floating>
                
                <BounceIn delay={0.3}>
                  <Badge 
                    className={`absolute top-4 right-4 text-lg px-4 py-2 ${
                      game.status === 'Released' ? 'bg-green-500 hover:bg-green-600' :
                      game.status === 'In Development' ? 'bg-yellow-500 hover:bg-yellow-600' :
                      'bg-blue-500 hover:bg-blue-600'
                    }`}
                  >
                    {game.status}
                  </Badge>
                </BounceIn>
              </div>
            </SlideIn>

            {/* Right Column - Info */}
            <div>
              <FadeIn delay={0.2}>
                <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  {game.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-2xl text-purple-400 font-semibold mb-6">
                  {game.genre}
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  {game.desc}
                </p>
              </FadeIn>

              {/* Features Grid */}
              <StaggerContainer className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <StaggerItem key={feature.label}>
                    <ScaleOnHover>
                      <Card className="bg-slate-900/50 backdrop-blur border-slate-800 hover:border-purple-500/50 transition-all">
                        <CardContent className="p-6 flex items-center gap-4">
                          <RotateOnHover>
                            <feature.icon className="text-purple-400" size={32} />
                          </RotateOnHover>
                          <div>
                            <p className="text-slate-400 text-sm">{feature.label}</p>
                            <p className="text-white font-bold text-lg">{feature.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Action Buttons */}
              <FadeIn delay={0.6}>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 text-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-lg shadow-purple-500/50"
                  >
                    <Download className="mr-2" size={20} />
                    Download Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:text-white hover:border-purple-500"
                  >
                    <Share2 size={20} />
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Screenshots Section */}
          <FadeIn delay={0.7}>
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Game Screenshots
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-6 mb-16">
            {screenshots.map((screenshot) => (
              <StaggerItem key={screenshot.id}>
                <ScaleOnHover scale={1.1}>
                  <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 overflow-hidden cursor-pointer h-48 flex items-center justify-center text-8xl shadow-xl hover:shadow-purple-500/50 transition-all">
                    {screenshot.emoji}
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Game Description Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <SlideIn direction="left">
              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 h-full">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">About This Game</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">
                    {game.desc}
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Experience the ultimate gaming adventure with cutting-edge graphics, 
                    immersive gameplay, and a captivating storyline that will keep you 
                    engaged for hours. Join millions of players worldwide in this epic journey.
                  </p>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn direction="right">
              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 h-full">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-2xl">•</span>
                      <span>Stunning next-gen graphics and visual effects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-2xl">•</span>
                      <span>Immersive open-world exploration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-2xl">•</span>
                      <span>Multiplayer co-op and competitive modes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-2xl">•</span>
                      <span>Regular updates with new content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-2xl">•</span>
                      <span>Cross-platform compatibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </SlideIn>
          </div>

          {/* System Requirements */}
          <BounceIn delay={0.8}>
            <Card className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 border-0 shadow-2xl shadow-blue-500/50">
              <CardHeader>
                <CardTitle className="text-4xl text-center text-white">System Requirements</CardTitle>
                <CardDescription className="text-center text-cyan-50 text-lg">
                  Make sure your system meets these requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-cyan-300">Minimum</h3>
                    <ul className="space-y-2 text-cyan-50">
                      <li><strong>OS:</strong> Windows 10 64-bit</li>
                      <li><strong>Processor:</strong> Intel Core i5-6600K</li>
                      <li><strong>Memory:</strong> 8 GB RAM</li>
                      <li><strong>Graphics:</strong> NVIDIA GTX 1060</li>
                      <li><strong>Storage:</strong> 50 GB available space</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-300">Recommended</h3>
                    <ul className="space-y-2 text-cyan-50">
                      <li><strong>OS:</strong> Windows 11 64-bit</li>
                      <li><strong>Processor:</strong> Intel Core i7-9700K</li>
                      <li><strong>Memory:</strong> 16 GB RAM</li>
                      <li><strong>Graphics:</strong> NVIDIA RTX 3070</li>
                      <li><strong>Storage:</strong> 50 GB SSD</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BounceIn>
        </div>
      </div>
    </PageTransition>
  );
}