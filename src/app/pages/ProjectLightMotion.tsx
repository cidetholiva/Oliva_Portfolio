import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const gymifyHeroImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/b54951f0-6e77-4276-a18e-6e8261cab228_rw_1920.png?h=4fbc19c9d7586a4af5c0c40236c9a694';

export function ProjectLightMotion() {
  const projectData = {
    title: 'Gymify AR',
    subtitle: 'AR Fitness Prototype',
    tags: ['AR', 'Fitness', 'WebXR', 'Social'],
    videoUrl: 'https://www.youtube.com/embed/d_tNHaiYssI',
    githubUrl: 'https://github.com/cidetholiva/GymifyAR_',
    portfolioUrl: 'https://gymify-ar.vercel.app/',
    heroImage: gymifyHeroImage,
    demoLink: null,
    overview: 'Gymify AR is an augmented reality fitness prototype designed to make workouts feel social, playful, and motivating. The experience allows users to work out alongside AR versions of real people—friends, family, or celebrities—turning solo workouts into a shared, immersive experience.',
    ideation: 'Only 24% of U.S. adults meet recommended physical activity guidelines, with lack of motivation and social support being two of the biggest barriers to consistency. Inspired by projects like Pokémon Go, Mario World, and AR storytelling, I explored how AR embodiment and social presence could make exercise more engaging and emotionally motivating.',
    implementation: 'The project explores pose tracking and AR overlays. For prototyping, workouts are captured as simplified motion data and replayed as a ghost-like AR figure, allowing rapid experimentation with AR interaction design and UI/UX.',
    whatILearned: 'This project taught me how to blend social connection with immersive technology in a way that feels accessible and motivating rather than intimidating. I learned to prototype AR experiences using web-based tools and to design for emotional resonance and user motivation in fitness contexts.',
    whatsNext: 'Future iterations would include workout recording libraries, real-time stats, social challenges, and asynchronous multiplayer workouts, allowing users to track progress, compete with friends, and stay accountable over time.',
    role: 'Designer & Prototyper',
    tools: 'JavaScript, MediaPipe Pose, Figma Make, Vercel',
    duration: '1 week',
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
            <a
              href={projectData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={projectData.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Try Now</span>
            </a>
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
              Problem & Inspiration
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.ideation}
            </p>
          </div>

          {/* How It Works */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Users select a workout type (legs, abs, cardio), and an AR workout buddy appears beside them in real time. The system records the user's movements and transforms them into an AR "ghost" version that can be shared with friends. Friends can then work out alongside that AR version in their own space, creating accountability, motivation, and friendly competition—even across long distances.
            </p>
          </div>

          {/* Current State */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Current State
            </h2>
            <ul className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 list-disc list-inside">
              <li>Functional AR workout prototype</li>
              <li>Live camera feed with AR overlay</li>
              <li>Overall UI prototype demonstrating core flow and interaction</li>
            </ul>
          </div>

          {/* Implementation */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Approach & Methods
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.implementation}
            </p>
          </div>

          {/* Significance */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Significance & Distinction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gymify AR stands out by replacing avatars with real human presence in AR, creating stronger emotional connection and accountability. Unlike traditional fitness apps that rely on pre-recorded videos, Gymify AR enables users to record themselves and share their workouts as AR experiences. This blend of social connection, AR embodiment, and playful competition makes fitness feel more personal, immersive, and sustainable.
            </p>
          </div>

          {/* Audience */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Audience & Accessibility
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gymify AR is designed for people who struggle with motivation, consistency, or social anxiety, including those in long-distance friendships or relationships. Because the experience only requires a webcam, it remains accessible, low-barrier, and emotionally supportive rather than intimidating.
            </p>
          </div>

          {/* Project Video */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
            <iframe
              src={projectData.videoUrl}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Gymify AR Demo Video"
            />
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

          {/* Impact */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Impact
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gymify AR transforms exercise into a shared, game-like experience embedded in real life. By blending play, AR, and human connection, the project explores how immersive technology can support healthier habits in a way that feels inclusive, motivating, and meaningful.
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
