'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          Get In Touch
        </h1>
        <p className="text-xl text-slate-600 text-center mb-16">
          Punya pertanyaan atau ingin bekerja sama? Hubungi kami!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <Mail className="text-blue-600 mb-4" size={40} />
              <CardTitle className="text-2xl">Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-slate-600">info@nexusgames.com</p>
              <p className="text-slate-600">support@nexusgames.com</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <Phone className="text-cyan-600 mb-4" size={40} />
              <CardTitle className="text-2xl">Phone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-slate-600">+62 21 1234 5678</p>
              <p className="text-slate-600">Mon - Fri, 9AM - 6PM</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 border-2">
          <CardHeader>
            <MapPin className="text-blue-600 mb-4" size={40} />
            <CardTitle className="text-2xl">Office</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-lg">
              Jl. Sudirman No. 123<br />
              Jakarta Selatan 12190<br />
              Indonesia
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Send us a Message</CardTitle>
            <CardDescription className="text-center">
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
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}