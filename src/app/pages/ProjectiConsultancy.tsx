import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/b00a0584-3aae-4810-9f07-2ebbb22c4e2a_rw_1200.png?h=d739c57573dc5536b879c1dd1788ca55';

export function ProjectiConsultancy() {
  const projectData = {
    title: 'iConsultancy',
    subtitle: 'Digital Consultancy Platform',
    tags: ['UX Research', 'Web Design', 'Accessibility', 'IA'],
    heroImage: heroImage,
    framerUrl: 'https://numerous-skills-295253-70ff41a48.framer.app/',
    canvaUrl: 'https://www.canva.com/design/DAG5qmsIkK0/vOeG2pTEvjQcSOqSt1BnsQ/view?utm_content=DAG5qmsIkK0&utm_campaign=designshare&utm_medium=embeds&utm_source=link',
    demoLink: null,
    problem: 'The existing iConsultancy website made it difficult for partners, faculty, and students to understand what the program offers, how projects work, and how to get involved. Navigation was scattered, content was dense, and there were few examples of past student work or clear expectations for partnerships.',
    solution: 'We redesigned the experience around clarity, credibility, and onboarding. The new structure highlights past projects and student impact, explains how partnerships work, and organizes content by user needs. Clear navigation, storytelling, and accessible layouts make it easier for organizations to see the value of working with iConsultancy while helping students and staff quickly find what they need.',
    designProcess: [
      {
        title: 'Client Background & Discovery',
        description: 'We started by understanding iConsultancy\'s mission: to connect students with real-world information challenges while supporting organizations with UX, data, and information management solutions. This helped frame the website as both a recruiting tool for partners and a learning hub for students.'
      },
      {
        title: 'Research –—Personas',
        description: 'Created comprehensive IA diagrams and user flow maps for different personas. Each persona revealed different needs, such as clear onboarding steps, easy access to project examples, and better visibility into expectations and outcomes. We also met with the client and identified strengths like strong content and accessible colors, but also major pain points such as overwhelming text density, limited navigation structure, overuse of expandable panels, and minimal student or project visibility. These issues guided our redesign priorities.'
      },
      {
        title: 'Low & High Fidelity Wireframes',
        description: 'We sketched low-fidelity layouts that reorganized the site around services, past projects, student case studies, testimonials, and a clear contact flow. The goal was to reduce cognitive load, remove filler text, and foreground the information partners and students care about most. Once this was approved, we moved to creating a high-fidelity wireframe using Figma and Framer.'
      },
      {
        title: 'Accessibility-First Design',
        description: 'We built the design system components with WCAG 2.1 AA standards from the ground up. Implemented proper color contrast, keyboard navigation, screen reader optimization, and focus management.'
      },
      {
        title: 'Next steps & Recommendations',
        description: 'We proposed ongoing improvements, including refining the chatbot interaction for onboarding, replacing placeholder content with real client stories, incorporating more testimonials and student voices, and establishing a process for continuous content updates so the site stays current and engaging.'
      }
    ],
    outcome: 'The final concept presents iConsultancy as a clear, credible, and student-centered program. The redesigned structure makes it easier for potential partners to understand how projects work, what outcomes to expect, and how to get started. It also gives students and faculty a centralized space to explore past projects, resources, and expectations, turning the site into a more effective bridge between classroom learning and real-world work.',
    reflection: 'This project showed how challenging it can be to design for multiple stakeholder groups at once. It reinforced the importance of persona-driven decisions, strong information architecture, and writing that prioritizes clarity over jargon. Most of all, it reminded me that good UX isn\'t about adding more content—it\'s about shaping information so people immediately know where to go, what they\'re looking at, and why it matters.',
    role: 'UX Researcher & Designer',
    tools: 'Figma, Framer, User Interviews, Persona Mapping, Low-Fidelity Wireframing, Heuristic Evaluation, Miro, Jira',
    duration: 'January 2025 - May 2025',
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
              href={projectData.framerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Framer Prototype</span>
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
                className="w-full aspect-video object-contain"
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
              className="w-full aspect-video object-contain"
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
                src="https://www.canva.com/design/DAG5qmsIkK0/vOeG2pTEvjQcSOqSt1BnsQ/view?embed" 
                allowFullScreen
                allow="fullscreen"
                title="UX Research and Website Design"
              />
            </div>
            <div className="p-4 text-center">
              <a 
                href={projectData.canvaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors text-sm hidden"
              >
                UX Research and Website Design by colivamo
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
