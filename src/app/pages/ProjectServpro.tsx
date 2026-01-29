import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const servproImage1 = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/83657746-f58b-41f8-a3de-9f3dd14af621_rw_1200.png?h=0201ea29aab4fce467a80ce17c2fc3fd';
const servproImage2 = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/5d5df06d-8349-47b9-ba9e-38ca4fc7a8b5_rw_1200.png?h=9661d5ce4c851c6a27e83c205c0208c6';
const servproImage3 = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/54ab2358-5054-4d4b-a4a7-f8f9b8c62e0f_rw_1200.png?h=471425448e8e5cfbd21742be0a8fc05a';

interface Project {
  name: string;
  goal: string;
  deliverables: string[];
  tools: string[];
  notes?: string;
  image: string;
}

export function ProjectServpro() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      name: 'Weekly Tuesday Testimonials',
      goal: 'Educate clients on 24/7 emergency services in accessible format',
      deliverables: ['Social Media Deliverables (Instagram, LinkedIn, X, Facebook, etc.)'],
      tools: ['Canva', 'Photoshop'],
      image: servproImage1,
    },
    {
      name: 'Weekly Tuesday Testimonials',
      goal: 'Standardize brand identity across all franchise locations',
      deliverables: ['Social Media Deliverables (Instagram, LinkedIn, X, Facebook, etc.)'],
      tools: ['Canva', 'Photoshop'],
      image: servproImage2,
    },
    {
      name: 'Weekly Tuesday Testimonials',
      goal: 'Attract foot traffic and communicate service offerings at industry events',
      deliverables: ['Social Media Deliverables (Instagram, LinkedIn, X, Facebook, etc.)'],
      tools: ['Canva', 'Photoshop'],
      image: servproImage3,
    },
  ];

  const currentProject = projects[currentIndex];

  // Custom arrow components
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full backdrop-blur-xl bg-white/40 dark:bg-white/20 border border-white/40 dark:border-white/30 shadow-lg hover:bg-white/60 dark:hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-rose-500 transition-colors" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full backdrop-blur-xl bg-white/40 dark:bg-white/20 border border-white/40 dark:border-white/30 shadow-lg hover:bg-white/60 dark:hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-rose-500 transition-colors" />
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: 'slick-dots !bottom-6',
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back to Category Button */}
        <Link
          to="/graphic-design"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Graphic Design</span>
        </Link>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            SERVPRO
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Marketing Design
          </p>
        </div>

        {/* Carousel and Content Panel */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image Carousel */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl relative">
            <Slider {...sliderSettings}>
              {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Project Details */}
          <div className="rounded-3xl backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {currentProject.name}
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-2">
                  Client Goal
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {currentProject.goal}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-2">
                  Deliverables
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {currentProject.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-2">
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-rose-300/30 dark:border-rose-400/30 text-rose-600 dark:text-rose-300 backdrop-blur-sm text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {currentProject.notes && (
                <div>
                  <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-2">
                    Notes
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    {currentProject.notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
