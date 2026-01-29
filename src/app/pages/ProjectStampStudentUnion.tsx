import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const fc24TournamentImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/90f562ea-29d7-4139-83d9-a870f34729cf_rw_1920.jpg?h=6b3d3d8580460dad84a7c6555346b045';
const adeleScholarshipImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/cb6eba50-f7e0-4df3-afec-f3bf629abfb1_rw_1920.jpg?h=5f4ddcf51bd39a012c36a2780bee5124';
const orientationSignageImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/6338b184-72e8-45cb-9171-db16551eebe8_rw_1200.png?h=8a604ae933a310f89926e6c25e0d7700';

interface Project {
  name: string;
  goal: string;
  deliverables: string[];
  tools: string[];
  notes?: string;
  image: string;
}

export function ProjectStampStudentUnion() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      name: 'FC24 Tournament Redesign',
      goal: 'Promote FC24 Tournament Event and redesign old poster to drive engagement.',
      deliverables: [
        '21x26 in. Standard Posters (x3)',
        '1920x1200 px Axis TV Digital Image',
        '1200x628 px Facebook Event Image',
        '1000x1000 px Instagram Image',
        '1300x780 px TerpLink Event Image',
        '1200x675 px Twitter Image',
        '1080x1920 Instagram Story Image',
        '1080x1920 Digisign (for monitors in TerpZone)',
        'QR code to TerpLink Event'
      ],
      tools: ['Adobe Illustrator', 'Photoshop', 'Trello'],
      notes: 'Created soccer tournament themed visuals with bold typography to appeal to student demographic',
      image: fc24TournamentImage,
    },
    {
      name: "Adele's Circle of Women Scholarship Refresh",
      goal: 'Increase awareness and participation in Adele Scholarships.',
      deliverables: [
        '21x26 in. Standard Posters, Printed (x2)',
        '21x26 Standard Poster .jpg',
        '1920x1080 px Axis TV Digital Image',
        '1080x1350 px Instagram Image',
        '1300x780 px TerpLink Event Image',
        '1200x675 px Twitter/X and Keep Connected Image',
        '1080x1920 Instagram Story Image',
        '1980x1200 Calendar.umd.edu Image',
        '1080x1080 Upcoming Events Page Image',
        '27x42 in. Hoff Poster',
        '58x42 in. Deep Display Poster'
      ],
      tools: ['Adobe Illustrator', 'Photoshop', 'Trello', 'Adobe Stock'],
      notes: 'Emphasized pink colors and approachable design',
      image: adeleScholarshipImage,
    },
    {
      name: 'Student Employee Orientation Foamboard Signage',
      goal: 'Create clear, welcoming signage to support student employee orientation by improving wayfinding, check-in flow, and access to key information for both new and returning employees.',
      deliverables: [
        '2 Welcome / Check-In Foamboard Signs',
        '4 "Schedule of the Day" Foamboard Signs',
        '25 Double-Sided Table Tents'
      ],
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Stock', 'Trello'],
      notes: 'The client requested additional foamboards late in the timeline, requiring urgent revisions and expedited printing to meet the orientation deadline.',
      image: orientationSignageImage,
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
            STAMP Student Union
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Marketing & Communications
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
