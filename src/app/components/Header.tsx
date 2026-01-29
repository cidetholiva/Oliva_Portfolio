import { Moon, Sun, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onShowResume?: () => void;
}

export function Header({ isDarkMode, toggleDarkMode, onShowResume }: HeaderProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first, then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onShowResume) {
      if (!isHomePage) {
        // Navigate to home page first, then show resume
        window.location.href = '/#resume';
      } else {
        onShowResume();
        setTimeout(() => {
          document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => {
              if (isHomePage) {
                scrollToSection('home');
              }
            }}
            className="text-2xl font-semibold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Cideth Oliva
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-800 dark:text-white/90 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-800 dark:text-white/90 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('work')}
                className="text-gray-800 dark:text-white/90 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
              >
                Work
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-800 dark:text-white/90 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full backdrop-blur-sm bg-white/40 dark:bg-white/10 border border-white/20 hover:bg-white/60 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-rose-400" />
              ) : (
                <Moon className="w-5 h-5 text-rose-500" />
              )}
            </button>

            {/* Download Resume */}
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}