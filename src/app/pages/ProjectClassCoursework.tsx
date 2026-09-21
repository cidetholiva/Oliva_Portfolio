import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ProjectClassCoursework() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back to Graphic Design */}
        <Link
          to="/graphic-design"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Graphic Design</span>
        </Link>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Coursework
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Selected design projects created through academic coursework.
          </p>
        </div>

        {/* Canva Portfolio Embed */}
        <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 shadow-xl">
          <div
            className="relative w-full"
            style={{ paddingTop: '56.2225%' }}
          >
            <iframe
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.canva.com/design/DAHVy9encEg/PSpVI1iAv5MHfuhP9EL7fQ/view?embed"
              allowFullScreen
              title="Class Coursework"
            />
          </div>
        </div>

      </div>
    </section>
  );
}