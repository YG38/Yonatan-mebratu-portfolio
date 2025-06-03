import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'GymPro - Senior Project',
      description: 'Developed as my senior capstone project at St. Mary\'s University, GymPro is a comprehensive gym management system. The Android app allows users to discover gyms, register for memberships, and manage their fitness journey. Built with a self-taught tech stack including Kotlin, Firebase, and Material Design principles.',
      tags: ['Android', 'Kotlin', 'Firebase', 'Material Design', 'Senior Project'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=GymPro+App',
      githubUrl: 'https://github.com/YG38/GymPro',
      featured: true
    },
    {
      id: 2,
      title: 'Gym-picker Web App',
      description: 'A self-taught project to expand my full-stack skills. This web application helps users find and compare local gyms with features like gym details, location services, and user reviews. Built with React, TypeScript, and Firebase to complement my mobile development experience.',
      tags: ['React', 'TypeScript', 'Firebase', 'Self-Taught'],
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Gym-picker+Web',
      githubUrl: 'https://github.com/YG38/gym-picker',
      liveUrl: '#'
    }
  ];

  const featuredProject = projects.find(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my professional work, including mobile applications and web development projects
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-left mb-6">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">Featured Project</h3>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{featuredProject.title}</h4>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img 
                    className="h-full w-full object-cover md:h-full md:w-full" 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {featuredProject.githubUrl && (
                      <a 
                        href={featuredProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github className="h-5 w-5 mr-1" />
                        <span>Code</span>
                      </a>
                    )}
                    {featuredProject.liveUrl && (
                      <a 
                        href={featuredProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 mr-1" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="View code on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to see more?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always working on new projects. Check out my GitHub profile to see what else I've been building.
          </p>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            View My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
