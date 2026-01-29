import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/e047b9b8-732d-42e0-af84-98fa429fc583_rw_1920.png?h=1b3f873a19ad72f028edd25692310ac5';

export function ProjectTouchdownTravels() {
  const projectData = {
    title: 'Touchdown Travels',
    subtitle: 'Travel Planning & Booking Platform',
    tags: ['UI/UX', 'Travel', 'Mobile Design', 'User Research'],
    heroImage: heroImage,
    githubUrl: 'YOUR_GITHUB_URL_HERE',
    devpostUrl: 'YOUR_DEVPOST_URL_HERE',
    canvaUrl: 'https://www.canva.com/design/DAGHw9Pbe-w/LNKOOZygZltGCq0YRndh-w/view?utm_content=DAGHw9Pbe-w&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    demoLink: null,
    problem: 'Travel planning can be overwhelming and time-consuming, with users having to juggle multiple platforms for research, booking, and itinerary management. Many existing travel apps lack intuitive interfaces and fail to provide a seamless end-to-end experience for travelers looking to organize their trips efficiently.',
    solution: 'Touchdown Travels streamlines the entire travel planning process into one cohesive platform. The design focuses on simplifying complex travel workflows through intuitive navigation, visual itinerary building, and integrated booking capabilities that reduce friction and enhance the user experience.',
    designProcess: [
      {
        title: 'User Research & Analysis',
        description: 'Conducted user interviews and competitive analysis to identify pain points in existing travel planning tools. Discovered that users wanted a more visual and organized way to plan their trips.'
      },
      {
        title: 'Information Architecture',
        description: 'Mapped out user flows for different travel planning scenarios, from inspiration browsing to booking confirmation. Created a flexible structure that accommodates both spontaneous and detail-oriented travelers.'
      },
      {
        title: 'Visual Design System',
        description: 'Developed a warm, inviting design language that evokes the excitement of travel while maintaining clarity and usability. Focused on mobile-first design patterns for on-the-go planning.'
      },
      {
        title: 'Prototyping & Iteration',
        description: 'Built interactive prototypes and conducted usability testing sessions. Refined the interface based on user feedback to ensure intuitive navigation and seamless booking flows.'
      }
    ],
    outcome: 'The outcome of this project was a complete set of high-fidelity mockups and interactive prototypes created entirely in Canva. The designs clearly communicate the app\'s core features, user flows, and information structure, making it easy to understand how users would navigate, search, and personalize their travel experience. By focusing on layout, hierarchy, and filtering systems, the project demonstrates how complex information can be organized into an intuitive and visually engaging interface. These prototypes serve as a strong design foundation that could be handed off to developers for future implementation.',
    reflection: 'This project reinforced the importance of balancing visual appeal with functional simplicity. Designing for travelers meant creating an interface that could handle complexity without feeling overwhelming. If developed further, this project could evolve into a functional prototype by translating the Canva designs into an interactive build. Usability testing with real users would help validate the information architecture and refine the experience before full development.',
    role: 'Product Designer & UX Researcher',
    tools: 'Canva, Adobe Creative Suite, User Testing Platforms',
    duration: '4 months',
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/ui-ux"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to UI/UX Design</span>
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
          {/* Problem */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              The Solution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.solution}
            </p>
          </div>

          {/* Design Process */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Design Process
            </h2>
            <div className="space-y-6">
              {projectData.designProcess.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Canva Presentation Embed */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl overflow-hidden shadow-xl">
            <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: 0, overflow: 'hidden', willChange: 'transform' }}>
              <iframe 
                loading="lazy" 
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                src="https://www.canva.com/design/DAGHw9Pbe-w/LNKOOZygZltGCq0YRndh-w/view?embed" 
                allowFullScreen
                allow="fullscreen"
                title="Touchdown Travels"
              />
            </div>
            <div className="p-4 text-center">
              <a 
                href={projectData.canvaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors text-sm hidden"
              >
                touchdown Travels by Cideth Oliva
              </a>
            </div>
          </div>

          {/* Outcome */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              The Outcome
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.outcome}
            </p>
          </div>

          {/* Reflection */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Reflection
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.reflection}
            </p>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-16 text-center">
          <Link
            to="/ui-ux"
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
