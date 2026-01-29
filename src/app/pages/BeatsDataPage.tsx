import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const aidaFrameworkImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/1765e4b3-ec72-4965-85c2-eef0aab9d6ff_rw_1920.png?h=822e5a575fc2bd73e8444ff3a158f6c3';
const journeyMapImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/0cdb26e1-e757-4f50-b63b-0ae813ab0ad4_rw_1920.png?h=e07e0e90bd9cb537bf93a6fc0ce95497';

export function BeatsDataPage() {
  const projects = [
    {
      focusArea: 'AIDA Framework',
      reflection: 'Comparing the Customer Journey Map and the AIDA framework helped me better understand how users move through both emotional and decision-based experiences. AIDA highlights the critical moments where users form interest and decide to act, while the customer journey map reveals what happens before and after those moments. Through this comparison, I learned that many usability issues occur not because users lack motivation, but because small points of friction or unclear information interrupt their flow. This exercise reinforced the importance of designing for clarity, emotional engagement, and continuity across the entire user experience—not just the point of conversion.',
      image: aidaFrameworkImage,
    },
    {
      focusArea: 'Journey Map',
      reflection: 'Comparing the Customer Journey Map and the AIDA framework helped me better understand how users move through both emotional and decision-based experiences. AIDA highlights the critical moments where users form interest and decide to act, while the customer journey map reveals what happens before and after those moments. Through this comparison, I learned that many usability issues occur not because users lack motivation, but because small points of friction or unclear information interrupt their flow. This exercise reinforced the importance of designing for clarity, emotional engagement, and continuity across the entire user experience—not just the point of conversion.',
      image: journeyMapImage,
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
          to="/data-analytics"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Data Analytics</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Industry Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Beats by Dre – Consumer Data Insights
          </p>
        </div>

        {/* Carousel Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Carousel */}
          <div className="relative backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-square">
              <ImageWithFallback
                src={projects[currentIndex].image}
                alt={projects[currentIndex].focusArea}
                className={`w-full h-full ${currentIndex === 0 || currentIndex === 1 ? 'object-contain' : 'object-cover'}`}
              />
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
                {projects[currentIndex].focusArea}
              </h3>
              <div className="flex items-center gap-2 text-sm text-rose-500 dark:text-rose-400">
                <span>{currentIndex + 1} / {projects.length}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Reflection</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].reflection}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}