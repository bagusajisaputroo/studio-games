'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, BounceIn, PageTransition, RotateOnHover } from '@/components/Animations';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Get In Touch
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-300 text-center mb-16">
              Punya pertanyaan atau ingin bekerja sama? Hubungi kami!
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-12">
            <StaggerItem>
              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all h-full">
                <CardHeader>
                  <RotateOnHover>
                    <Mail className="text-cyan-400 mb-4" size={40} />
                  </RotateOnHover>
                  <CardTitle className="text-2xl text-white">Email</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-slate-300">info@nexusgames.com</p>
                  <p className="text-slate-300">support@nexusgames.com</p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="bg-slate-900/50 backdrop-blur border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all h-full">
                <CardHeader>
                  <RotateOnHover>
                    <Phone className="text-blue-400 mb-4" size={40} />
                  </RotateOnHover>
                  <CardTitle className="text-2xl text-white">Phone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-slate-300">+62 21 1234 5678</p>
                  <p className="text-slate-300">Mon - Fri, 9AM - 6PM</p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          <SlideIn direction="left">
            <Card className="mb-12 bg-slate-900/50 backdrop-blur border-slate-800 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all">
              <CardHeader>
                <RotateOnHover>
                  <MapPin className="text-purple-400 mb-4" size={40} />
                </RotateOnHover>
                <CardTitle className="text-2xl text-white">Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-lg">
                  Jl. Sudirman No. 123<br />
                  Jakarta Selatan 12190<br />
                  Indonesia
                </p>
              </CardContent>
            </Card>
          </SlideIn>

          <BounceIn delay={0.4}>
            <Card className="bg-slate-900/70 backdrop-blur border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-white">Send us a Message</CardTitle>
                <CardDescription className="text-center text-slate-300 text-lg">
                  We will get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="resize-none bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </BounceIn>
        </div>
      </div>
    </PageTransition>
  );
}