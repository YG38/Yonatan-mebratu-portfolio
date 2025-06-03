import { motion } from 'framer-motion';
import { Code, Server, Database, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
    },
    {
      category: 'Database',
      icon: <Database className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      items: ['MongoDB', 'MySQL', 'Firebase'],
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm a passionate Full-Stack Developer with a strong foundation in computer science and a love for creating elegant, efficient, and user-friendly applications. With expertise in both frontend and backend development, I bring ideas to life with clean, maintainable code.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My journey in software development has equipped me with problem-solving skills and a keen eye for detail, allowing me to build robust and scalable solutions that meet user needs effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl p-8 text-white"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
            <p className="mb-6 opacity-90">
              I'm not just a developer; I'm a problem solver who loves to tackle complex challenges. I believe in writing clean, efficient code and creating intuitive user experiences. My full-stack expertise allows me to work across the entire development process, from concept to deployment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Clean & Maintainable Code',
                'Responsive Design',
                'Performance Optimization',
                'Testing & Debugging',
                'API Development',
                'Continuous Learning'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-white mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="opacity-90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
