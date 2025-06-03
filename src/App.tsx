import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';

type Theme = 'light' | 'dark' | 'system';

function App() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  // Set theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      document.documentElement.classList.add('dark');
      setTheme(savedTheme || 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme(savedTheme || 'light');
    }
    
    setMounted(true);
  }, []);

  // Update theme
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Theme switcher component
  const ThemeSwitcher = () => (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => updateTheme('light')}
        className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'}`}
        aria-label="Light theme"
      >
        <SunIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => updateTheme('dark')}
        className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'}`}
        aria-label="Dark theme"
      >
        <MoonIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => updateTheme('system')}
        className={`p-2 rounded-full transition-colors ${theme === 'system' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'}`}
        aria-label="System theme"
      >
        <ComputerDesktopIcon className="h-5 w-5" />
      </button>
    </div>
  );

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    out: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <motion.main 
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 space-y-20 md:space-y-32"
              >
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
              </motion.main>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
