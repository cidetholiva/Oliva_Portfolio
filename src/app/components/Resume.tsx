import { Download, X } from 'lucide-react';

interface ResumeProps {
  isVisible: boolean;
  onClose: () => void;
}

export function Resume({ isVisible, onClose }: ResumeProps) {
  if (!isVisible) return null;

  const handleDownload = () => {
    window.open('https://docs.google.com/document/d/1DA2y6Hl_Dc60o75GogBZ-OqSZlwqohchRLorisqa0sM/export?format=pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Resume
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 text-gray-700 dark:text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            View my experience, education, and skills
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 text-gray-700 dark:text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* Glass Card Container for iframe */}
        <div className="backdrop-blur-2xl bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="w-full h-[800px] md:h-[1000px] rounded-2xl overflow-hidden bg-white">
            <iframe 
              src="https://docs.google.com/document/d/e/2PACX-1vQsXFQpKZROd0SynhLYKvIZZcmcJzo322idU9bn9XbOQSpDI73XY7-Cb6lKa8FA2OMKZblLkqFHtjfZ/pub?embedded=true"
              className="w-full h-full"
              title="Cideth Oliva Resume"
            />
          </div>
        </div>
      </div>
    </section>
  );
}