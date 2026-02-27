import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const uiuxGif = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/0c32ea52-d82d-4c9d-8b48-83f4070d16db_rw_1920.png?h=591885a7518c403bbb24815f3845b356';
const arvrGif = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/3a99dc3e-6cd9-457c-a966-47790bab898e_rw_1920.gif?h=5bfcdae4e4d7f477a71edc17e6de10e8';
const graphicDesignImg = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/90f562ea-29d7-4139-83d9-a870f34729cf_rw_1920.jpg?h=6b3d3d8580460dad84a7c6555346b045';
const creativeCodingGif = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/803bc13c-1beb-450c-a672-7a0a56935e67_rw_600.gif?h=af8c7bbcb03b656544a2086ce8e0db19';
const dataAnalyticsImg = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/0cdb26e1-e757-4f50-b63b-0ae813ab0ad4_rw_1920.png?h=e07e0e90bd9cb537bf93a6fc0ce95497';
const comingSoonImg = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/3561ec1a-b34b-4963-8c26-7db3330b3e17_rw_600.png?h=675ac82fc91dfcb2b3661ce3f0cfd4ae';

export function WorkGrid() {
  const projects = [
    {
      title: 'UI/UX Design & Research',
      description: 'User-centered design systems and research',
      image: uiuxGif,
      gradient: 'from-rose-300 to-pink-300',
      link: '/ui-ux',
    },
    {
      title: 'Immersive Works (AR/VR + Games)',
      description: 'Interactive experiences and virtual worlds',
      image: arvrGif,
      gradient: 'from-pink-300 to-rose-400',
      link: '/immersive-works',
    },
    {
      title: 'Graphic Design & Marketing',
      description: 'Visual storytelling and motion design',
      image: graphicDesignImg,
      gradient: 'from-rose-400 to-orange-300',
      link: '/graphic-design',
    },
    {
      title: 'Creative Coding & Animation',
      description: 'Art and experimental interfaces',
      image: creativeCodingGif,
      gradient: 'from-pink-400 to-rose-300',
      link: '/creative-coding',
    },
    {
      title: 'Data Analytics & Systems',
      description: 'Information design and data visualization',
      image: dataAnalyticsImg,
      gradient: 'from-orange-300 to-pink-300',
      link: '/data-analytics',
    },
    {
      title: 'Coming Soon',
      description: 'New projects in development',
      image: comingSoonImg,
      gradient: 'from-rose-300 to-pink-400',
      link: '/coming-soon',
    },
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4 text-[48px]">
            My Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of projects across design, technology, and creative exploration
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 hover:scale-[1.02]"
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
