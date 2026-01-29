import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AnimationPage() {
  const projects = [
    {
      title: 'What was that?',
      overview: 'This animation video was inspired by the doodles I usually draw. I wanted to bring them to life and use sounds you don\'t normally associate to the actions my characters performed. For example, in the corn scene, the sound made is from laser guns shooting but I imagined it as someone eating corn.',
      tools: 'Procreate, Illustrator, Free Sounds',
      learned: 'Mastered the 12 principles of animation, explored easing curves and their emotional impact, and learned to create perfect loops through careful timing and reversible motion.',
      image: 'https://images.unsplash.com/photo-1756908992987-54c948949b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBkZXNpZ24lMjBhbmltYXRpb258ZW58MXx8fHwxNzY2NDg5MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      videoUrl: 'https://www.youtube.com/embed/B_nbXn532aI',
    },
    {
      title: 'Alone With My Feelings',
      overview: 'In this mixed media animation, my characters are a bit more defined. The main character is drawn in different styles but it follows the same storyline. The girl, who we see coming home and to do her homework falls asleep on her computer. The following scenes are what happens in her dreams. The two little stars represent the emotions; anxiety and tiredness.',
      tools: 'Procreate, Illustrator, Free Sounds',
      learned: 'Discovered techniques for morphing photography and 2D animation drawings to create a mixed media video.',
      image: 'https://images.unsplash.com/photo-1639431682289-72b9ebb75895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYXJ0JTIwY29kaW5nfGVufDF8fHx8MTc2NjQ4OTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      videoUrl: 'https://www.youtube.com/embed/2EQfugpWC2Y',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
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
            Animation & Motion
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Kinetic typography and motion design explorations
          </p>
        </div>

        {/* Carousel Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Carousel */}
          <div className="relative backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl overflow-hidden shadow-xl">
            <div className={projects[currentIndex].videoUrl ? "aspect-video" : "aspect-square"}>
              {projects[currentIndex].videoUrl ? (
                <iframe
                  src={projects[currentIndex].videoUrl}
                  title={projects[currentIndex].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <ImageWithFallback
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/40 dark:border-white/20 hover:bg-white/60 dark:hover:bg-black/60 transition-all flex items-center justify-center text-gray-900 dark:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/40 dark:border-white/20 hover:bg-white/60 dark:hover:bg-black/60 transition-all flex items-center justify-center text-gray-900 dark:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-rose-500 w-8'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-8 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {projects[currentIndex].title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-rose-500 dark:text-rose-400">
                <span>{currentIndex + 1} / {projects.length}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Overview</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].overview}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Tools</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {projects[currentIndex].tools}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">What I Learned</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[currentIndex].learned}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}