import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const stampImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/90f562ea-29d7-4139-83d9-a870f34729cf_rw_1920.jpg?h=6b3d3d8580460dad84a7c6555346b045';
const servproImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/d4c135d7-9b7e-4a5a-9f19-a8b4733d743f_rw_1200.png?h=ebcb3f0156f103f1eeec6531ad08d7f6';

export function GraphicDesignPage() {
  const projects = [
    {
      title: 'STAMP Student Union',
      description: 'Student Designer for Marketing & Communications (Internship)',
      image: stampImage,
      gradient: 'from-rose-300 to-pink-300',
      tags: ['Branding', 'Print', 'Digital', 'Marketing'],
      link: '/project/stampstudentunion',
    },
    {
      title: 'SERVPRO',
      description: 'Graphic Design Marketing Design Intern',
      image: servproImage,
      gradient: 'from-pink-300 to-rose-400',
      tags: ['Marketing', 'Social Media', 'Photoshop', 'Canva'],
      link: '/project/servpro',
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
            Graphic Design
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Visual identities, marketing assets, and brand-driven design.
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
                  <span>View Project</span>
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
