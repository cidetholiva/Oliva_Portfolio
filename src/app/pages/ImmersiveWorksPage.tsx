import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const gymifyArImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/b54951f0-6e77-4276-a18e-6e8261cab228_rw_1920.png?h=4fbc19c9d7586a4af5c0c40236c9a694';
const imDeadImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/3f5f8a0b-02ae-4f57-b92b-c88091e40076_rw_1200.png?h=6792b90a7e7c97a54465e577791a1936';
const zidethSagaImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/c6148512-b125-4f38-828f-e933c111aa52_rw_1200.png?h=369e960cb0313a08cd2e5147d9476232';
const strandedImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/d638fad4-04cf-4627-b8b4-8974a58769ef_rw_1920.png?h=5b98bf3ec2afea8eb3c78bca767c9318';

export function ImmersiveWorksPage() {
  const projects = [
    {
      title: 'Gymify AR',
      description: 'AR fitness prototype for working out alongside friends, family, or celebrities.',
      image: gymifyArImage,
      gradient: 'from-orange-300 to-rose-300',
      tags: ['AR', 'Fitness', 'WebXR', 'Social'],
      link: '/project/lightmotion',
    },
    {
      title: 'I.M.Dead',
      description: 'VR escape room horror game set in a haunted university building.',
      image: imDeadImage,
      gradient: 'from-rose-400 to-orange-300',
      tags: ['VR', 'Unity', 'Horror', 'Escape Room'],
      link: '/project/dreamscape',
    },
    {
      title: "Zideth's Saga",
      description: 'Open-world VR exploration game inspired by The Legend of Zelda.',
      image: zidethSagaImage,
      gradient: 'from-rose-300 to-pink-300',
      tags: ['VR', 'Unity', 'Adventure', 'Open-World'],
      link: '/project/vrmeditation',
    },
    {
      title: 'Stranded',
      description: 'Low-stress survival game with retro visuals, resource collection, and immersive audio.',
      image: strandedImage,
      gradient: 'from-pink-300 to-rose-400',
      tags: ['Unity', 'Survival', 'Game', 'Retro'],
      link: '/project/arcityexplorer',
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
            Immersive Works (AR/VR + Games)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Interactive experiences, virtual worlds, and experimental games.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 hover:scale-[1.02] block"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-rose-300/30 dark:border-rose-400/30 text-rose-600 dark:text-rose-300 backdrop-blur-sm text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <div className="flex items-center gap-2 text-sm text-rose-500 dark:text-rose-400 group-hover:text-rose-600 dark:group-hover:text-rose-500 transition-colors pt-2">
                  <span>View Case Study</span>
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
