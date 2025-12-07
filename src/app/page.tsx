'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Rocket, Zap, Heart, ChevronRight, Gamepad2, Trophy, Users, Sparkles, Star, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Animated number counter
function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const target = parseFloat(value);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {isInView ? Math.round(count) : 0}{suffix}
    </span>
  );
}

// Particles background component
function ParticlesBackground() {
  // Generate particle positions ONCE using lazy initialization
  // Function inside useState only runs ONCE on mount, not on every render
  const [particles] = useState(() => 
    [...Array(20)].map(() => ({
      initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
      initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
      endY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
      endX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
      duration: Math.random() * 10 + 10
    }))
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          initial={{ 
            x: particle.initialX, 
            y: particle.initialY 
          }}
          animate={{
            y: [null, particle.endY],
            x: [null, particle.endX],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const features = [
    { icon: Rocket, title: "Innovation", desc: "Teknologi game terdepan dengan engine modern dan gameplay mechanics yang revolusioner", color: "text-blue-600" },
    { icon: Zap, title: "Performance", desc: "Optimasi maksimal untuk semua platform, dari mobile hingga next-gen consoles", color: "text-cyan-600" },
    { icon: Heart, title: "Passion", desc: "Dibuat dengan cinta oleh gamers untuk gamers, setiap detail dirancang dengan sempurna", color: "text-red-500" }
  ];

  const games = [
    { id: 1, title: "Stellar Odyssey", genre: "Space RPG", rating: 4.9, players: "2M+" },
    { id: 2, title: "Shadow Legends", genre: "Action RPG", rating: 4.8, players: "3M+" },
    { id: 3, title: "Cyber Nexus", genre: "Sci-Fi Shooter", rating: 4.7, players: "1.5M+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background particles */}
      <ParticlesBackground />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-6"
            >
              <Gamepad2 size={80} className="text-cyan-400" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-8xl md:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"
          >
            NEXUS GAMES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Crafting <span className="text-cyan-400 font-bold">Epic</span> Gaming Experiences That Define The Future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="text-xl px-12 py-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/products" className="inline-flex items-center gap-3">
                <Sparkles size={24} />
                Explore Our Games 
                <ChevronRight size={24} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight size={24} className="rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We push the boundaries of gaming with cutting-edge technology and unwavering passion
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-900/50 backdrop-blur border-slate-800 hover:border-cyan-500/50 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-cyan-500/20">
                  <CardHeader>
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <feature.icon className={`${feature.color} mb-4`} size={56} />
                    </motion.div>
                    <CardTitle className="text-3xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-slate-300">
                      {feature.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 text-white border-0 shadow-2xl shadow-blue-500/50">
              <CardHeader className="pb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <CardTitle className="text-5xl text-center font-black mb-4">
                    Join Our Epic Community
                  </CardTitle>
                  <CardDescription className="text-cyan-50 text-center text-xl">
                    Jutaan gamers di seluruh dunia telah mempercayai kami
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { value: "5", suffix: "M+", label: "Active Players", icon: Users },
                    { value: "4.8", suffix: "★", label: "Average Rating", icon: Star },
                    { value: "15", suffix: "+", label: "Awards Won", icon: Trophy },
                    { value: "50", suffix: "+", label: "Countries", icon: Globe }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 bg-white/10 rounded-xl backdrop-blur"
                    >
                      <stat.icon className="mx-auto mb-3 text-cyan-300" size={32} />
                      <div className="text-6xl font-black mb-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-cyan-100 text-lg font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Games Preview */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Featured Games
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Explore our award-winning titles loved by millions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {games.map((game, index) => (
              <motion.div
                key={game.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -15, 
                  transition: { duration: 0.3 } 
                }}
                transition={{ duration: 0.6 }}
                onClick={() => router.push(`/products/${game.id}`)}
              >
                <Card className="bg-slate-900/70 backdrop-blur border-slate-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-black/40"
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Gamepad2 size={64} className="text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{game.title}</CardTitle>
                    <CardDescription className="text-slate-400 text-lg">
                      {game.genre}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <span className="text-white font-bold">{game.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Users size={20} />
                        <span>{game.players}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <Link href="/products" className="inline-flex items-center gap-2">
                View All Games
                <ChevronRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-16 shadow-2xl shadow-cyan-500/30"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-8"
            >
              <Sparkles size={64} className="text-yellow-300" />
            </motion.div>
            <h2 className="text-5xl font-black mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-cyan-50 mb-10 max-w-2xl mx-auto">
              Bergabunglah dengan komunitas gaming terbesar dan rasakan pengalaman bermain yang tak terlupakan
            </p>
            <Button 
              asChild
              size="lg"
              className="text-xl px-12 py-8 bg-white text-blue-600 hover:bg-slate-100 shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/products" className="inline-flex items-center gap-3">
                Get Started Now
                <ChevronRight size={24} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg"
          >
            © 2024 Nexus Games. Crafted with <Heart className="inline text-red-500 fill-red-500" size={20} /> for gamers worldwide.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}