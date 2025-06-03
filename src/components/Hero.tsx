import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import profileImage from '../assets/images/profile.jpg';

export default function Hero() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/YG38',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/yonatan-mebratu-a79aa42a3/',
      ariaLabel: 'Visit my LinkedIn profile'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:ymebratu64@gmail.com',
      ariaLabel: 'Send me an email'
    },
    {
      name: 'Telegram',
      icon: <Smartphone className="h-5 w-5" />,
      href: 'https://t.me/yoni2m',
      ariaLabel: 'Message me on Telegram'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Yonatan Mebratu</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Android Developer & Problem Solver
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I build exceptional mobile experiences with modern Android technologies.
              Currently focused on creating accessible, user-friendly mobile applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-px bg-gray-300 dark:bg-gray-700 w-12"></div>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Yonatan Mebratu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-600 dark:bg-primary-700 text-white p-3 rounded-full shadow-lg">
                <Smartphone className="h-6 w-6" />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
            <span className="text-sm mb-1">Scroll down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
