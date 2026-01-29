import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const majorDecisionsImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/5ddb514c-6763-47b2-b427-43b30c04e368_rw_1920.png?h=dc55af7e63875ebd0d8d1a11fa952d4c';
const convers8Image = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/0c32ea52-d82d-4c9d-8b48-83f4070d16db_rw_1920.png?h=591885a7518c403bbb24815f3845b356';
const iConsultancyImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/b00a0584-3aae-4810-9f07-2ebbb22c4e2a_rw_1200.png?h=d739c57573dc5536b879c1dd1788ca55';
const trustFundImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/bf4ee631-41bc-48c9-bced-7d5c5ed0b95c_rw_1200.png?h=826194631606971fa860f873d01c06a6';
const touchdownTravelsImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/e047b9b8-732d-42e0-af84-98fa429fc583_rw_1920.png?h=1b3f873a19ad72f028edd25692310ac5';

export function UIUXPage() {
  const projects = [
    {
      title: 'Major Decisions',
      description: 'Decision-making platform helping users make informed choices through structured analysis and insights.',
      image: majorDecisionsImage,
      gradient: 'from-orange-300 to-rose-300',
      tags: ['UI/UX', 'Decision Making', 'Web App', 'User Research'],
      link: '/project/majordecisions',
    },
    {
      title: 'Convers8',
      description: 'A voice-based Feynman learning companion that helps students understand concepts deeply by explaining them out loud.',
      image: convers8Image,
      gradient: 'from-rose-300 to-pink-300',
      tags: ['UI/UX', 'Gemini API', 'ElevenLabs', 'Education'],
      link: '/project/convers8',
    },
    {
      title: 'iConsultancy',
      description: 'Redesigned the iConsultancy program website to better showcase capstone projects, attract new partners, and make it easier for organizations and students to understand how to get involved.',
      image: iConsultancyImage,
      gradient: 'from-rose-400 to-orange-300',
      tags: ['UX Research', 'Web Design', 'Accessibility', 'IA'],
      link: '/project/iconsultancy',
    },
    {
      title: 'TrustFund',
      description: 'Financial planning platform designed to build transparency between parents and teens, helping them manage spending, allowances, and financial goals.',
      image: trustFundImage,
      gradient: 'from-pink-300 to-rose-400',
      tags: ['Fintech', 'Web App', 'UX Research', 'UI Design'],
      link: '/project/trustfund',
    },
    {
      title: 'Touchdown Travels',
      description: 'Travel planning and booking platform designed to simplify trip organization and enhance user experience.',
      image: touchdownTravelsImage,
      gradient: 'from-rose-300 to-orange-300',
      tags: ['UI/UX', 'Travel', 'Mobile Design', 'User Research'],
      link: '/project/touchdowntravels',
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
            UI/UX Design & Research
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            User-centered design projects focused on accessibility, research, and intuitive experiences.
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
