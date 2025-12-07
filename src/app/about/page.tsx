'use client';

import { Users, Trophy, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem, BounceIn, PageTransition, RotateOnHover } from '@/components/Animations';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              About Nexus Games
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <Card className="mb-12 bg-slate-900/50 backdrop-blur border-slate-800">
              <CardContent className="p-12">
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  Nexus Games didirikan pada 2018 dengan visi untuk menciptakan game-game berkualitas tinggi yang dapat dinikmati oleh semua kalangan. Kami adalah tim yang passionate terdiri dari developers, artists, dan designers yang memiliki satu tujuan: membuat game yang memorable dan fun.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Dengan teknologi terkini dan kreativitas tanpa batas, kami terus berinovasi untuk menghadirkan pengalaman gaming yang tidak terlupakan. Setiap game yang kami ciptakan adalah hasil dari dedikasi, passion, dan komitmen kami terhadap kualitas.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12">
            <StaggerItem>
              <Card className="text-center hover:shadow-2xl hover:shadow-cyan-500/20 transition-all bg-slate-900/50 backdrop-blur border-slate-800 hover:border-cyan-500/50 h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <RotateOnHover>
                      <Users className="text-cyan-400" size={56} />
                    </RotateOnHover>
                  </div>
                  <CardTitle className="text-2xl text-white">Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-slate-300">
                    50+ talented professionals
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="text-center hover:shadow-2xl hover:shadow-yellow-500/20 transition-all bg-slate-900/50 backdrop-blur border-slate-800 hover:border-yellow-500/50 h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <RotateOnHover>
                      <Trophy className="text-yellow-400" size={56} />
                    </RotateOnHover>
                  </div>
                  <CardTitle className="text-2xl text-white">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-slate-300">
                    15+ industry awards
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all bg-slate-900/50 backdrop-blur border-slate-800 hover:border-blue-500/50 h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <RotateOnHover>
                      <Gamepad2 className="text-blue-400" size={56} />
                    </RotateOnHover>
                  </div>
                  <CardTitle className="text-2xl text-white">Games Released</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-slate-300">
                    8 successful titles
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          <BounceIn delay={0.4}>
            <Card className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 text-white border-0 shadow-2xl shadow-blue-500/50">
              <CardHeader>
                <CardTitle className="text-4xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-cyan-50 leading-relaxed">
                  Menciptakan game-game inovatif yang tidak hanya menghibur, tetapi juga menginspirasi dan menghubungkan komunitas gamers di seluruh dunia. Kami berkomitmen untuk terus berkembang dan menghadirkan pengalaman gaming terbaik di kelasnya.
                </p>
              </CardContent>
            </Card>
          </BounceIn>
        </div>
      </div>
    </PageTransition>
  );
}