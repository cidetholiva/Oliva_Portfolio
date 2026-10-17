
import { Download, X } from 'lucide-react';

interface ResumeProps {
  isVisible: boolean;
  onClose: () => void;
}

// Google Doc used for PDF downloads
const RESUME_PDF_URL =
  'https://docs.google.com/document/d/1xGQziYeI23h2fZ1fwrmuwXId6FZhpIOp/export?format=pdf';

// Resume image displayed in popup
const RESUME_IMAGE_URL =
  'https://cdn.myportfolio.com/9ad4e767-db52-4662-a159-aed2a549175d/29db98e8-1642-472d-aa11-e09a539531f9_rw_1200.png?h=291d74ddf0365895986a57803a7e3cbb';

export function Resume({ isVisible, onClose }: ResumeProps) {
  if (!isVisible) return null;

  // Download resume as PDF
  const handleDownload = () => {
    window.open(
      RESUME_PDF_URL,
      '_blank',
      'noopener,noreferrer'
    );
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

          {/* Download PDF Button */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 text-gray-700 dark:text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* Glass Card Container */}
        <div className="backdrop-blur-2xl bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-3xl p-4 md:p-8 shadow-2xl">

          {/* Resume Preview Image */}
          <div className="w-full rounded-2xl overflow-hidden bg-white">
            <img
              src={RESUME_IMAGE_URL}
              alt="Cideth Oliva Resume"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
