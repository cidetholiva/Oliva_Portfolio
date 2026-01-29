import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/f4c8dc9b-afef-4624-9ae3-d850e7f1387e_rw_1920.png?h=d928aea8ee78b417a7aca21457bf0d06';

export function ProjectConvers8() {
  const projectData = {
    title: 'Convers8',
    subtitle: 'AI-Powered Conversation Platform',
    tags: ['UI/UX', 'Gemini API', 'ElevenLabs', 'Education'],
    videoUrl: 'https://www.youtube.com/embed/48hY_vHpV8M',
    githubUrl: 'https://github.com/cidetholiva/Convers8',
    devpostUrl: 'https://devpost.com/software/convers8-fcbvyx?ref_content=my-projects-tab&ref_feature=my_projects',
    heroImage: heroImage,
    demoLink: null,
    problem: 'Many educational platforms struggle to provide accessible conversation practice for students. Many students think they understand a subject but the moment someone asks them to explain it, they realize they can\'t. Students can identify almost half of the concepts they learn, but fewer than 1 in 10 can explain them clearly.',
    solution: 'Convers8 leverages AI technology through Gemini API for intelligent conversation analysis and ElevenLabs for natural text-to-speech capabilities. The platform provides personalized conversation scenarios, real-time feedback, and adaptive learning paths that adjust to each user\'s proficiency level and learning goals. The best way to know if you actually understand something is to try explaining it in plain language. That\'s the core of the Feynman Technique and Convers8 makes this process easy. You upload your notes, Convers8 pulls out the key concepts, checks where your understanding is weak and asks smarter follow-up questions to help you improve.',
    designProcess: [
      {
        title: 'Understanding the problem',
        description: 'We started from a common experience where students feel confident after reading, but lose that confidence when they try to explain the material out loud. We focused the design around that gap.'
      },
      {
        title: 'Information Architecture',
        description: 'We designed a flow where you upload notes, the AI pulls out key topics, asks questions, and listens to your explanation so it can test real understanding instead of memorization.'
      },
      {
        title: 'Prototyping & Testing',
        description: 'We combined tools like Gemini for note analysis, speech-to-text for user explanations, LLM reasoning for feedback, and ElevenLabs for natural voice responses, all wrapped in a React UI. We wired the services so audio turns into text, then into reasoning, then back into voice in a smooth loop that feels like a conversation instead of separate features. We kept refining the cycle—upload, speak, get a meaningful response—until the interaction felt natural and actually helpful for talking through concepts.'
      },
      {
        title: 'Visual Design & AI Integration',
        description: 'Developed a calming, education-focused design system and seamlessly integrated AI capabilities to feel natural rather than robotic.'
      }
    ],
    outcome: 'Convers8 now works end-to-end the way we imagined it. You can upload notes, talk through concepts, and get contextual voice feedback based on what you actually said. The system doesn\'t just answer; it asks follow-up questions, evaluates how clear your explanation is, and guides you toward deeper understanding. Seeing that full loop in action (the AI using your own notes to ask better questions) was a big milestone! The long-term vision is for Convers8 to become a truly intelligent learning partner, one that tracks you, supports you, and helps you grow every time you speak!',
    reflection: 'This project showed us how much more challenging it is to build a learning experience that relies on real speech, real-time interaction, and real understanding. It pushed us to think like engineers, designers, and educators at the same time. We learned how sensitive AI is to prompt structure, how important speed and responsiveness are for learners, and how quickly spoken explanations expose gaps that reading alone can\'t. Most importantly, it reminded us why the Feynman Technique works: you don\'t fully understand something until you can explain it out loud. On a personal level, it also gave me hands-on experience with full-stack engineering and helped me understand how essential GitHub is for version control and collaboration.',
    role: 'Lead UI Designer, Frontend, & LLM/API integration',
    tools: 'Figma, Typescript, Framer-motion, Gemini API, Elevenlabs, React, Vite, Tailwindcss, LLM, Uvicorn, web-audio-api, Text-to-speech, Speech-to-text',
    duration: 'November 16, 2025- November 17, 2025 (Technica Hackathon)',
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
              href={projectData.devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Devpost</span>
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

          {/* Project Video */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
            <iframe
              src={projectData.videoUrl}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Convers8 Demo Video"
            />
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
