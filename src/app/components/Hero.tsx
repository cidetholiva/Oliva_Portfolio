
import { ArrowRight, Mail } from 'lucide-react';

const characterImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/a4007874-4687-4214-8f21-2959f6f320ef.gif?h=4b4cbf0f5a1cf034f2d4add0fd18a108';

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-rose-500 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                Hi, I'm Cideth!
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                I design and build digital experiences that are intuitive, accessible, and meaningful.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                UI/UX
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                Frontend
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                AR/VR
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                Creative Tech
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl shadow-rose-500/40 hover:shadow-rose-500/60 hover:scale-105 transition-all"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/40 text-gray-800 dark:text-white hover:bg-white/80 dark:hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - 3D Placeholder */}
          <div className="relative">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/30 via-pink-400/30 to-orange-300/30 blur-3xl rounded-full"></div>
            
            {/* Character Image */}
            <img 
              src={characterImage} 
              alt="Cideth character illustration" 
              className="relative w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
