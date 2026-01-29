import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const beatsImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/03354bd6-7331-49c6-8e3d-d06c2e6a8772_rw_3840.png?h=60a7c58d9d3899086800cb39b969cd95';
const academicImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/ec3038ac-cc53-407f-909a-11372cb9d5f7_rw_1920.png?h=be1b946cc3bdffe6def427209086465e';

export function DataAnalyticsPage() {
  const categories = [
    {
      title: 'Industry Experience',
      description: 'Beats by Dre – Consumer Data Insights',
      image: beatsImage,
      gradient: 'from-rose-300 to-pink-300',
      tags: ['SQL', 'Python', 'Tableau', 'Consumer Analytics'],
      link: '/data-analytics/beats',
    },
    {
      title: 'Academic Coursework & Projects',
      description: 'Building foundational skills in statistics and ML',
      image: academicImage,
      gradient: 'from-pink-300 to-rose-400',
      tags: ['R', 'Machine Learning', 'Statistics', 'Databases'],
      link: '/data-analytics/academic',
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
            Data Analytics & Systems
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforming data into actionable insights through statistical analysis, machine learning, and data infrastructure
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
                  className={`w-full h-full ${category.title === 'Academic Coursework & Projects' ? 'object-contain bg-white dark:bg-gray-900' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
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
