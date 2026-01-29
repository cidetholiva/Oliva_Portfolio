import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProjectVRMeditation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/ea45af8f-26db-4e5b-ac61-c68089f25c80_rw_1920.png?h=e5a30a88e98a204f9520f63c7ac412c9',
    'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/64292b1d-e4e6-463a-acd4-4fd56b3696ce_rw_1920.png?h=982c5242c55c3e596773bc2d2a984c25',
    'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/fa8a7e79-3492-45af-8a60-2fd621f53526_rw_1920.png?h=84dd1a6c0495355d6b055d27924b3bc8',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const projectData = {
    title: "Zideth's Saga",
    subtitle: 'Open-World VR Exploration Game',
    tags: ['VR', 'Unity', 'Open-World', 'Exploration'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: 'YOUR_GITHUB_URL_HERE',
    itchUrl: 'YOUR_ITCH_URL_HERE',
    heroImage: 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/c6148512-b125-4f38-828f-e933c111aa52_rw_1200.png?h=369e960cb0313a08cd2e5147d9476232',
    demoLink: null,
    overview: "Zideth's Saga is an open-world VR exploration game I built as my final project for my Intro to Immersive Media course. I designed the experience around player freedom, allowing users to explore a virtual island, interact with objects, and discover hidden treasure through hands-on gameplay.",
    ideation: 'I was inspired by open-world games like The Legend of Zelda, particularly their focus on exploration and discovery. As my first experience with VR and Unity, I intentionally designed a low-barrier, exploration-focused game that allowed me to learn core immersive concepts while creating an engaging world.',
    implementation: 'I developed the project in Unity using XR setup, VR camera systems, and hand presence. I implemented grab and direct interactables that allow players to pick up and throw objects, and built the environment using 60+ assets from Unity\'s Asset Store. I also created custom 3D models in Blender and integrated music and sound effects to enhance immersion.',
    whatILearned: 'Through this project, I gained hands-on experience with VR development, interaction design, and spatial environments. I learned the importance of intuitive interactions, physics-based object handling, and how audio design contributes to immersion in virtual spaces.',
    whatsNext: 'Future iterations would expand the world with additional areas, interactive challenges, and environmental storytelling, along with refined physics and potential multiplayer exploration features.',
    role: 'Solo Developer & Designer',
    tools: 'Unity, XR Toolkit, Blender, Unity Asset Store',
    duration: '1 semester',
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/immersive-works"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Immersive Works</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            {projectData.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            {projectData.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {projectData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-rose-300/30 dark:border-rose-400/30 text-rose-600 dark:text-rose-300 backdrop-blur-sm text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
          {projectData.demoLink ? (
            <a href={projectData.demoLink} target="_blank" rel="noopener noreferrer" className="block group relative">
              <ImageWithFallback
                src={projectData.heroImage}
                alt={projectData.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-pink-500/0 group-hover:from-rose-500/20 group-hover:to-pink-500/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white bg-rose-500/90 px-6 py-3 rounded-full">
                  <ExternalLink className="w-5 h-5" />
                  <span>View Demo</span>
                </div>
              </div>
            </a>
          ) : (
            <ImageWithFallback
              src={projectData.heroImage}
              alt={projectData.title}
              className="w-full aspect-video object-cover"
            />
          )}
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-6">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">My Role</h3>
            <p className="text-gray-900 dark:text-white">{projectData.role}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-6">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tools & Tech</h3>
            <p className="text-gray-900 dark:text-white">{projectData.tools}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-6">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Duration</h3>
            <p className="text-gray-900 dark:text-white">{projectData.duration}</p>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-12">
          {/* Experience Overview */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Experience Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.overview}
            </p>
          </div>

          {/* Ideation & Inspiration */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Ideation & Inspiration
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.ideation}
            </p>
          </div>

          {/* Implementation */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Implementation
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.implementation}
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
            <ImageWithFallback
              src={carouselImages[currentImageIndex]}
              alt={`VR Meditation Space Screenshot ${currentImageIndex + 1}`}
              className="w-full aspect-video object-cover"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 transition-all shadow-lg hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 transition-all shadow-lg hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-rose-500 w-8'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              What I Learned
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.whatILearned}
            </p>
          </div>

          {/* What's Next */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              What's Next
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.whatsNext}
            </p>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-16 text-center">
          <Link
            to="/immersive-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl shadow-rose-500/40 hover:shadow-rose-500/60 hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}