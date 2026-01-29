import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const waveclockImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/343e3e24-5315-41ae-9c60-a4bf5afc6e94_rw_1920.gif?h=d3c714eb3f9bc45a03b105a88eb41bf8';
const imageCollageGif = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/f4bf0ef6-7912-434e-b060-e946069cbec4_rw_1920.gif?h=669c765c2383a43c198ad77f41ab43ce';

export function P5jsPage() {
  const projects = [
    {
      title: 'Waveclock',
      overview: 'Waveclock that works with parametric curves, Perlin noise and animation to make a flower.',
      tools: 'p5.js, JavaScript, OpenProcessing',
      learned: 'Learned to optimize performance with spatial hashing, explored vector fields and noise-based motion, and discovered how simple rules create complex emergent patterns.',
      image: waveclockImage,
    },
    {
      title: 'Image Collage',
      overview: 'An animated collage using different filters.',
      tools: 'p5.js, JavaScript, OpenProcessing',
      learned: 'Deepened understanding of recursion and mathematical modeling of nature, and explored the balance between control and randomness.',
      image: imageCollageGif,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/creative-coding"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Creative Coding</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Creative Coding
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            p5.js / OpenProcessing explorations in generative art and interactive systems
          </p>
        </div>

        {/* Carousel Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Carousel */}
          <div className="relative backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800">
              {currentIndex === 1 ? (
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <ImageWithFallback
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/40 dark:border-white/20 hover:bg-white/60 dark:hover:bg-black/60 transition-all flex items-center justify-center text-gray-900 dark:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/40 dark:border-white/20 hover:bg-white/60 dark:hover:bg-black/60 transition-all flex items-center justify-center text-gray-900 dark:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-rose-500 w-8'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {projects[currentIndex].title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-rose-500 dark:text-rose-400">
                <span>{currentIndex + 1} / {projects.length}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Overview</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].overview}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Tools</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {projects[currentIndex].tools}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">What I Learned</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].learned}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}