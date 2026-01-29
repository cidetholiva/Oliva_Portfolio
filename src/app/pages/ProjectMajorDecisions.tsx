import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImage = 'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/5ddb514c-6763-47b2-b427-43b30c04e368_rw_1920.png?h=dc55af7e63875ebd0d8d1a11fa952d4c';

export function ProjectMajorDecisions() {
  const projectData = {
    title: 'Major Decisions',
    subtitle: 'Structured Decision-Making Platform',
    tags: ['UI/UX', 'Decision Making', 'Web App', 'User Research'],
    videoUrl: 'https://www.youtube.com/embed/1jx_7iQbWgw',
    githubUrl: 'https://github.com/cidetholiva/major-decisions',
    devpostUrl: 'https://major-decisions.vercel.app/',
    heroImage: heroImage,
    demoLink: null,
    problem: 'Choosing a college major is often framed as a defining life decision, yet many students are expected to make this choice with limited visibility into how majors connect to real careers. At the University of Maryland, many students know the types of jobs they\'re interested in but struggle to identify which majors and courses align with those roles. Research from Student Research Group shows that around 80% of college students switch majors at least once, often due to unclear career alignment, academic difficulty, or insufficient advising.\n\nThis problem disproportionately impacts undergraduate and transfer students, who face intense pressure to decide quickly in order to graduate on time—often leading to wasted time, money, and emotional stress.',
    solution: 'Major Decisions is an interactive web application that reframes academic decision-making around careers rather than degree titles. Instead of asking "What should I major in?", the platform asks "What kind of work do I want to do?"\n\nStudents can explore job titles, skills, and interests, then see which UMD majors and courses align with those roles. By organizing career data into an intuitive, filterable interface, the system reduces cognitive overload and helps students make informed, confident decisions based on real outcomes.',
    designProcess: [
      {
        title: 'Research & Problem Definition',
        description: 'Identified major switching as a widespread issue caused by unclear connections between coursework and careers. Focused on undergraduates and transfer students navigating high-stakes academic decisions with limited advising resources.'
      },
      {
        title: 'Low-Fidelity Wireframing',
        description: 'Created early wireframes in Canva and Procreate to quickly explore layout, hierarchy, and user flows. This low-friction approach allowed for rapid iteration before committing to technical implementation.'
      },
      {
        title: 'High-Fidelity Prototyping & Development',
        description: 'Built a fully functioning prototype using modern front-end technologies. Designed responsive, accessible interfaces while integrating real job and academic data through public APIs.'
      },
      {
        title: 'Testing & Refinement',
        description: 'Refined interactions, filters, and information density to reduce cognitive load. Iterated on clarity, accessibility, and performance to ensure the experience remained intuitive for first-time users.'
      }
    ],
    outcome: 'The project resulted in a fully functional prototype that connects real-world job data to University of Maryland majors and courses, giving students a clearer view of how academic paths align with career outcomes. By centralizing career, skill, and course information into a single experience, the platform reduces the need for students to manually research across multiple websites and resources. The system was designed with scalability in mind, creating a foundation that can expand to additional universities and career datasets in the future. Overall, Major Decisions demonstrates a thoughtful balance between front-end UX design and backend data integration, highlighting both usability and technical execution.',
    reflection: 'This project reminded me how important it is to design around what users actually need, not how institutions organize information. By focusing on careers instead of degree requirements, Major Decisions helps students make decisions that feel more concrete and relevant to their future goals. Working with real job and course data also pushed me to turn complex information into something clear and easy to use, strengthening my ability to build practical, user-centered experiences.\n\nThis project highlighted the importance of designing for clarity and reducing cognitive load when users are already feeling stressed about important decisions. Future iterations could explore AI-powered suggestions and community-based decision insights.',
    role: 'UX/UI Designer & Full Stack Developer,  Built responsive UI components and integrated APIs',
    tools: 'Figma, Procreate, Vite, React, Tailwind CSS, HTML, Javascript, Supabase, OpenWebNinja API, umd.io API, Vercel',
    duration: '2 months',
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
              <span>Live Demo</span>
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
          <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
            <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
              src="https://www.canva.com/design/DAG_v3dBHgE/XKqPSodQznTBhwyplztUWQ/view?embed" allowFullScreen allow="fullscreen"
            />
          </div>
          <a href="https://www.canva.com/design/DAG_v3dBHgE/XKqPSodQznTBhwyplztUWQ/view?utm_content=DAG_v3dBHgE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" className="text-rose-500 dark:text-rose-400 hover:underline inline-block mb-8">Major Decisions  Wireframes</a> by colivamo

          <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
            <iframe
              src={projectData.videoUrl}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Major Decisions Demo Video"
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
