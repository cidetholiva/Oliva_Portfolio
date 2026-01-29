import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CreativeCodingPage() {
  const categories = [
    {
      title: 'Animation & Motion',
      description: 'Motion design that enhances interaction and storytelling',
      image: 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/92d4f125-b9e8-4ac4-b582-68596f92407b_rw_1920.png?h=3c7e8c0b9522b932a17d88e6b123ed10',
      gradient: 'from-pink-300 to-rose-400',
      tags: ['Procreate', 'Illustrator', 'Free Sounds'],
      link: '/creative-coding/animation',
    },
    {
      title: 'Creative Coding',
      description: 'p5.js / OpenProcessing explorations',
      image: 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/f24c8985-892e-4655-b846-32b520e4eb43_rw_1920.png?h=b0b6ae88018f3738ea65bb85ef8a317b',
      gradient: 'from-rose-300 to-pink-300',
      tags: ['p5.js', 'Interactive'],
      link: '/creative-coding/p5js',
    },
    {
      title: 'Studio Art Foundations',
      description: 'Foundational studies in drawing, shading, color, and 2D composition.',
      image: 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/9fa70a97-1d4f-4fc8-86f2-03966104bc01_rw_1200.png?h=f5f84fbe406c629aa2c3399140ae9c60',
      gradient: 'from-rose-400 to-orange-300',
      tags: ['Drawing', 'Color Theory', 'Composition', 'Line Work', 'Mixed Media', '2D Design'],
      link: '/creative-coding/visual-art',
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back to Works Button */}
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Works</span>
        </Link>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Creative Coding & Animation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explorations in art, motion design, and visual experimentation through code and creative tools
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 hover:scale-[1.02] block"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-rose-300/30 dark:border-rose-400/30 text-rose-600 dark:text-rose-300 backdrop-blur-sm text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Projects Link */}
                <div className="flex items-center gap-2 text-sm text-rose-500 dark:text-rose-400 group-hover:text-rose-600 dark:group-hover:text-rose-500 transition-colors pt-2">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
