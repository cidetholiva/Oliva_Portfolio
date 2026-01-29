import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const multiracialHeritageImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/089e8ddb-2e71-46cf-b038-ce7bc8b5f13b_rw_1920.png?h=a1af3f5fcf3b6d9192decfd9033dbe56';

export function ComingSoonPage() {
  const projects = [
    {
      title: 'SnowVerse',
      subtitle: 'IMD Capstone Project · In Progress',
      description: 'SnowVerse is an interactive game developed as my IMD capstone that uses full-body motion tracking to immerse players in a cozy winter environment. Using Kinect-based input, players physically move to play mini-games such as skiing and snowball fights, while also interacting with playful wildlife inside a cabin setting.',
      concept: 'The project explores how embodied interaction and physical movement can create joyful, accessible gameplay experiences that blend digital worlds with real-world motion.',
      focusAreas: [
        'Full-body motion tracking',
        'Mini-game design',
        'Cozy, character-driven environments',
        'Physical interaction through play',
      ],
      tools: ['Unity', 'Kinect', 'Motion Tracking', 'Game Design'],
      image: 'https://images.unsplash.com/photo-1735432963129-f15466507846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzbm93JTIwZ2FtZSUyMHBsYXlmdWx8ZW58MXx8fHwxNzY5MTAzOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Multiracial Heritage Month 2026 Campaign',
      subtitle: 'Visual Identity & Campaign Design · In Progress',
      description: 'This project involves designing the main visual identity for the 2026 Multiracial Heritage Month campaign. The campaign centers on celebrating multiracial identity through expressive illustration, storytelling, and bold visual systems that can scale across multiple formats.',
      concept: 'The final campaign will extend the core visual language across both digital and physical deliverables, creating a cohesive presence throughout the month.',
      plannedDeliverables: [
        'Posters',
        'Digital graphics',
        'Stickers',
        'Buttons',
        'Campaign swag',
      ],
      focusAreas: [
        'Identity and representation',
        'Visual storytelling',
        'Scalable campaign systems',
      ],
      tools: ['Illustration', 'Graphic Design', 'Print & Digital Media'],
      image: multiracialHeritageImage,
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
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Upcoming Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Projects currently in development — exploring new ideas, tools, and creative directions
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className={`aspect-[4/3] lg:aspect-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {project.title === 'SnowVerse' ? (
                    <div className="relative w-full h-full">
                      <iframe
                        loading="lazy"
                        className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
                        src="https://www.canva.com/design/DAG_w6CWd9o/Ch4l2dt7ywvFe7iHmbJoRQ/view?embed"
                        allowFullScreen
                        allow="fullscreen"
                      />
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 space-y-6">
                  {/* Title and Label */}
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-400/30 to-rose-400/30 border border-orange-300/40 dark:border-orange-400/40 text-orange-600 dark:text-orange-300 backdrop-blur-sm text-xs font-medium">
                        In Progress
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.concept}
                    </p>
                  </div>

                  {/* Planned Deliverables (if exists) */}
                  {project.plannedDeliverables && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                        Planned Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.plannedDeliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-400/10 to-pink-400/10 border border-rose-300/20 dark:border-rose-400/20 text-gray-700 dark:text-gray-300 backdrop-blur-sm text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Focus Areas */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.focusAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-400/10 to-pink-400/10 border border-rose-300/20 dark:border-rose-400/20 text-gray-700 dark:text-gray-300 backdrop-blur-sm text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-400/20 to-rose-400/20 border border-pink-300/30 dark:border-pink-400/30 text-rose-600 dark:text-rose-300 backdrop-blur-sm text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 italic">
            These projects are actively evolving and will be expanded into full showcases as they develop.
          </p>
        </div>
      </div>
    </section>
  );
}