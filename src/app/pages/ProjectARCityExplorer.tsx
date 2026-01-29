import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProjectARCityExplorer() {
  const projectData = {
    title: 'Stranded',
    subtitle: 'Low-Stress Survival Game',
    tags: ['Unity', 'Survival', 'Game', 'Retro'],
    videoUrl: 'https://www.youtube.com/embed/I-SSN8KbXZ0',
    githubUrl: 'YOUR_GITHUB_URL_HERE',
    appStoreUrl: 'YOUR_APP_STORE_URL_HERE',
    heroImage: 'https://images.unsplash.com/photo-1618123683394-04ca1e5d06db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwY2l0eSUyMHN0cmVldHxlbnwxfHx8fDE3NjY0ODIzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    demoLink: null,
    overview: 'Stranded is a low-stress survival game built in Unity, combining retro-inspired visuals, resource collection mechanics, and immersive audio. The game challenges players to collect resources and survive within a pixelated environment designed to be approachable, engaging, and visually cohesive.',
    ideation: 'I was responsible for the game\'s core mechanics and scripting, including player controls, resource collection logic, and camera switching. I also created and implemented animal and character assets, as well as designed and integrated the game\'s music and sound effects.',
    implementation: 'I developed the gameplay systems using C# scripting in Unity, implementing resource pickup interactions, real-time timers, and win/lose state logic. I handled character and animal asset setup, including hierarchy structure, tagging, and interaction behavior. I also implemented camera toggling between first-person and third-person views, ensuring smooth player control and accessibility.',
    whatILearned: 'This project strengthened my skills in game mechanics design, C# scripting, audio integration, and interactive systems. I learned how tightly game logic, sound design, and player feedback must work together to create a polished and engaging experience.',
    whatsNext: 'With more time, I would expand the game\'s mechanics with additional survival systems, enemy or obstacle behavior, and further refine the audio and interaction feedback to deepen immersion.',
    role: 'Game Developer & Designer',
    tools: 'Unity, C#, Apple Voice Memos, Canva, Unity Assets',
    duration: '3 months',
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
            <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
              <iframe 
                loading="lazy" 
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                src="https://www.canva.com/design/DAG_wCRN9d0/UNg2VACoaakvzfXBtE6GKA/view?embed" 
                allowFullScreen 
                allow="fullscreen"
                title={projectData.title}
              />
            </div>
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
              My Role
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

          {/* Project Video */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Sound & Music
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I created 8-bit-style background music and custom sound effects, then integrated them using Unity's AudioSource component. I wrote scripts to trigger sounds based on player interactions, such as collecting resources, providing immediate auditory feedback that reinforced gameplay actions and enhanced immersion.
            </p>
          </div>

          {/* Gameplay Video */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
            <iframe
              src={projectData.videoUrl}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Stranded Gameplay Video"
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