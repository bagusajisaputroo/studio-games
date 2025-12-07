import { Users, Trophy, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          About Nexus Games
        </h1>
        
        <Card className="mb-12 border-2">
          <CardContent className="p-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Nexus Games didirikan pada 2018 dengan visi untuk menciptakan game-game berkualitas tinggi yang dapat dinikmati oleh semua kalangan. Kami adalah tim yang passionate terdiri dari developers, artists, dan designers yang memiliki satu tujuan: membuat game yang memorable dan fun.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              Dengan teknologi terkini dan kreativitas tanpa batas, kami terus berinovasi untuk menghadirkan pengalaman gaming yang tidak terlupakan. Setiap game yang kami ciptakan adalah hasil dari dedikasi, passion, dan komitmen kami terhadap kualitas.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-xl transition-shadow border-2">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Users className="text-blue-600" size={56} />
              </div>
              <CardTitle className="text-2xl">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">50+ talented professionals</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Trophy className="text-amber-500" size={56} />
              </div>
              <CardTitle className="text-2xl">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">15+ industry awards</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Gamepad2 className="text-cyan-600" size={56} />
              </div>
              <CardTitle className="text-2xl">Games Released</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">8 successful titles</CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white border-0">
          <CardHeader>
            <CardTitle className="text-3xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-blue-50 leading-relaxed">
              Menciptakan game-game inovatif yang tidak hanya menghibur, tetapi juga menginspirasi dan menghubungkan komunitas gamers di seluruh dunia. Kami berkomitmen untuk terus berkembang dan menghadirkan pengalaman gaming terbaik di kelasnya.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}