import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function VisualArtPage() {
  const project = {
    title: 'AP Art – ARTT208',
    overview: 'These courses introduced foundational art concepts through hands-on practice in 2D art and observational drawing. The classes focused on building technical skills while encouraging creative exploration across different mediums.',
    tools: 'Mixed media materials, Traditional drawing and painting tools, Paper, ink, graphite, and color-based mediums',
    learned: 'Shading techniques including highlights, midtones, and shadows. Use of stippling, line work, and texture to create depth. Understanding hue, value, and contrast. Creating 2D compositions and still-life studies. Developing visual observation and attention to detail.',
    embedUrl: 'https://www.canva.com/design/DAG_wqgum2A/oHwLK0qZrEK9yRLycBRNMA/view?embed',
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/creative-coding"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Creative Coding</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Studio Art Foundations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Digital art and experimental visual studies
          </p>
        </div>

        {/* Project Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Embed */}
          <div className="relative backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-square">
              <iframe
                src={project.embedUrl}
                allowFullScreen
                allow="fullscreen"
                className="w-full h-full border-0"
                title={project.title}
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Overview</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Tools</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {project.tools}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">What I Learned</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.learned}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
