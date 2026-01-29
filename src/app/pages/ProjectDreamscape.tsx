import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const imDeadHeroImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/3f5f8a0b-02ae-4f57-b92b-c88091e40076_rw_1200.png?h=6792b90a7e7c97a54465e577791a1936';
const imDeadFlowDiagram = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/625c86cf-0470-4fca-a036-a0effbdb4109_rw_1920.png?h=409fa200e461f7221e5aa55b762bd79e';

export function ProjectDreamscape() {
  const projectData = {
    title: 'I.M. Dead',
    subtitle: 'VR Escape Room Horror Game',
    tags: ['VR', 'Unity', 'Horror', 'Escape Room'],
    videoUrl: 'https://www.youtube.com/embed/sQHol1GHMfg',
    githubUrl: 'https://github.com/cidetholiva/IMDead_Final.git',
    itchUrl: 'YOUR_ITCH_URL_HERE',
    heroImage: imDeadHeroImage,
    demoLink: null,
    overview: 'I.M. Dead is a VR escape room horror game set in the haunted halls of A.V. Williams at the University of Maryland. Players investigate a supernatural murder mystery through time-based challenges, interactive scenes, and immersive storytelling, blending local campus lore with classic escape room mechanics.',
    ideation: 'I was responsible for designing the game\'s main menu and rules screen, creating and rigging characters using Blender and Mixamo, and implementing audio systems, including text-to-speech dialogue, music, and sound effects. I also developed game logic, scene progression, and debugging for Scenes 1 and 3, ensuring smooth gameplay flow and narrative pacing.',
    implementation: 'I built and scripted gameplay systems in Unity using C#, focusing on Scene 1 (Classroom) and Scene 3 (Bathroom). My work included scene setup, interaction logic, task completion conditions, and success/failure states. I integrated text-to-speech assets for character dialogue, implemented sound cues tied to player actions, and handled debugging and optimization to improve stability and player experience.',
    whatILearned: 'This project strengthened my skills in VR game development, C# scripting, scene-based logic, and debugging complex interactions. I gained hands-on experience integrating audio systems, text-to-speech, and character assets into a cohesive VR experience, and learned how pacing, sound, and player feedback shape effective horror gameplay.',
    whatsNext: 'With more time, I would expand the game with additional scenes and puzzles, implement more sophisticated AI behaviors for the ghost character, enhance environmental storytelling through additional clues and details, and explore multiplayer co-op escape room mechanics.',
    role: 'VR Developer & Game Designer',
    tools: 'Unity, C#, Blender, Mixamo, Text-to-Speech',
    duration: '4 months',
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

          {/* Audio & Immersion */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Audio & Immersion
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I designed and integrated music, ambient audio, and sound effects to heighten suspense and reinforce narrative moments. Using text-to-speech, I brought the ghost character's dialogue to life, helping guide players while maintaining tension. Audio cues were carefully timed to support jump scares, time pressure, and player feedback.
            </p>
          </div>

          {/* Game Flow Diagram */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Game Flow Diagram
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The image below is a game flow diagram that maps the narrative structure and gameplay progression of I.M. Dead. It illustrates how players move through scenes, receive clues, complete tasks, and reach success or game over states. This diagram was used to plan logic flow, scene transitions, and failure conditions.
            </p>
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={imDeadFlowDiagram}
                alt="I.M. Dead Game Flow Diagram"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Project Video */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
            <iframe
              src={projectData.videoUrl}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="I.M. Dead Gameplay Video"
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
