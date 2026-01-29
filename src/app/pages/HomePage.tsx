import { Hero } from '../components/Hero';
import { AboutPreview } from '../components/AboutPreview';
import { WorkGrid } from '../components/WorkGrid';
import { Contact } from '../components/Contact';
import { Resume } from '../components/Resume';

interface HomePageProps {
  showResume: boolean;
  setShowResume: (show: boolean) => void;
}

export function HomePage({ showResume, setShowResume }: HomePageProps) {
  const handleShowResume = () => {
    setShowResume(true);
  };

  const handleCloseResume = () => {
    setShowResume(false);
  };

  return (
    <>
      <Hero />
      <AboutPreview />
      <WorkGrid />
      <Resume isVisible={showResume} onClose={handleCloseResume} />
      <Contact onShowResume={handleShowResume} />
      
      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <nav className="flex flex-wrap justify-center gap-6">
          <a href="#home" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
            Contact
          </a>
        </nav>
      </footer>
    </>
  );
}