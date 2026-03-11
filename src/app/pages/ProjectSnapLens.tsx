import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProjectSnapLens() {
  const projectData = {
    title: 'Body Tracking Snap Lens',
    subtitle: 'AR Body Tracking Filter',
    tags: ['AR', 'Snapchat', 'Body Tracking', '3D', 'Interactive'],
    lensUrl: 'https://www.snapchat.com/lens/59a95e898d5f4e8b94dd1cd0273f651e?type=SNAPCODE&metadata=01',
    demoLink: 'https://umcp.my.canva.site/snapchat-filter-demo',
    overview:
      'This project explores how real-time body tracking can transform simple social media filters into interactive AR experiences. Using Snapchat Lens Studio’s body tracking system, I created a Snap Lens that attaches a rigged 3D character to a user’s body and mirrors their movements in real time.',
    problem:
      'Most social media filters rely on simple overlays or face tracking. I wanted to explore how full-body tracking could create a more expressive and playful interaction, allowing users to control an animated character through natural movement. I built the project in one day as a fast AR experiment focused on motion, personality, and shareability.',
    implementation:
      'I used Blender to prepare the 3D model, Mixamo to rig the character, and Snapchat Lens Studio’s body tracking template to connect the character to tracked body joints. After mapping the rig to Snapchat’s tracking system, I tested the movement, adjusted the setup, and published the lens. Since launch, it has reached over 7,000 views in the first three days and is still growing.',
    whatILearned:
      'This project taught me how to move quickly through an end-to-end AR pipeline, from 3D asset prep to rigging to body tracking implementation inside Lens Studio. I also learned how interactive, movement-based filters can perform well on social platforms when they feel playful and easy to try.',
    whatsNext:
      'Next, I would expand the lens with more character variations, stronger visual effects, and gesture-based interactions that trigger animations or reactions in real time. I would also explore making the experience even more polished for repeat engagement and sharing.',
    impact:
      'This lens shows how body tracking can turn a simple filter into a more immersive AR experience. By combining rigged 3D animation with real-time user movement, the project transforms the user into the controller of the experience. Its early traction also highlights the potential of playful AR work to quickly capture attention on social platforms.',
    role: 'AR Designer & Developer',
    tools: 'Blender, Mixamo, Snapchat Lens Studio, Body Tracking Template',
    duration: '1 day',
    metrics: '7,000+ views in 3 days',
    carouselImages: [
      'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/532f9279-4cd5-464f-a1bb-08ffcbc83c12_rw_1920.png?h=b42d54ab843d74fbdb6a8f161ed49f52',
      'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/a8064c8d-300a-4535-993d-654b12910ed0_rw_1920.png?h=44d59ff9ef1c289918cca2120c8de753',
      'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/a59c0aba-b15a-45a1-a035-aea21ae53d93_rw_1920.png?h=c2f632b816746f2850db2dad46579289',
      'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/878d801e-4a00-4d7f-bdd1-180d05fe1e4f_rw_1920.png?h=4acfbed5bded0bccf919795ce69f0c9a',
    ],
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

          <p className="text-sm md:text-base text-rose-500 dark:text-rose-400 font-medium mb-4">
            Built in 1 day • {projectData.metrics}
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
              href={projectData.lensUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Try Lens</span>
            </a>
          </div>
        </div>

        {/* Embedded Canva Demo */}
        <div className="mb-12 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl p-4">
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingTop: '56.2500%',
              paddingBottom: 0,
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              marginTop: '1.6em',
              marginBottom: '0.9em',
              overflow: 'hidden',
              borderRadius: '8px',
              willChange: 'transform',
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAHDkgAbp7k/J3se-cMMTa60LXD_s5mNFA/view?embed"
              allowFullScreen
              allow="fullscreen"
              title="Snapchat Filter Demo"
            />
          </div>
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
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Experience Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.overview}
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Inspiration
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.problem}
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Approach & Methods
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.implementation}
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              What I Learned
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.whatILearned}
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              What's Next
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.whatsNext}
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Impact
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.impact}
            </p>
          </div>
        </div>

        {/* Blender Process */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Blender Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projectData.carouselImages.map((image, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Blender process ${index + 1}`}
                  className="w-full aspect-video object-cover"
                />
              </div>
            ))}
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