export function AboutPreview() {
  const tags = ['Accessibility', 'Curiosity', 'Impact', 'Creativity'];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Glass Card */}
        <div className="backdrop-blur-2xl bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="space-y-8">
            {/* About Text */}
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Hi! I'm Cideth Oliva —a dual-degree student in Information Science and Immersive Media Design at the University of Maryland. I love building beautiful, accessible, and human-centered digital experiences by blending design thinking with creative tech. From front-end and full-stack development to UI/UX, data, and immersive AR/VR, I'm always experimenting, learning, and using tech as a tool to make a real impact.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/20 border border-rose-300/30 dark:border-rose-400/30 text-rose-600 dark:text-rose-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}