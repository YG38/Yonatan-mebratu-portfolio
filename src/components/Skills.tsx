import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, GraduationCap, BookOpen, TestTube2, Cloud, Brush } from 'lucide-react'; // Updated icons

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
};

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      name: 'Android Development',
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: 'Kotlin', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'Android SDK', level: 72 },
        { name: 'Firebase', level: 70 },
        { name: 'Material Design', level: 68 },
      ],
    },
    {
      name: 'Web Development',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'React', level: 70 },
        { name: 'TypeScript', level: 68 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'Tailwind CSS', level: 75 },
      ],
    },
    {
      name: 'Education',
      icon: <GraduationCap className="h-6 w-6" />,
      skills: [
        { name: 'BSc in Computer Science', level: 100 },
        { name: 'St. Mary\'s University', level: 100 },
        { name: 'Graduated 2023', level: 100 },
        { name: 'Senior Project: GymPro', level: 90 },
        { name: 'GPA: 3.2/4.0', level: 80 },
      ],
    },
    {
      name: 'Current Learning',
      icon: <BookOpen className="h-6 w-6" />,
      skills: [
        { name: 'AI & Machine Learning', level: 65 },
        { name: 'Kifiya AIM Program', level: 70 },
        { name: 'Python for AI/ML', level: 70 },
        { name: 'Data Science', level: 60 },
      ],
    },
    {
      name: 'Testing & Tools',
      icon: <TestTube2 className="h-6 w-6" />,
      skills: [
        { name: 'JUnit', level: 65 },
        { name: 'Espresso', level: 60 },
        { name: 'Git/GitHub', level: 75 },
        { name: 'Android Studio', level: 80 },
      ],
    },
    {
      name: 'Backend & Database',
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: 'Firebase', level: 70 },
        { name: 'REST APIs', level: 68 },
        { name: 'SQL', level: 70 },
        { name: 'MongoDB', level: 60 },
      ],
    },
    {
      name: 'UI/UX & Design',
      icon: <Brush className="h-6 w-6" />,
      skills: [
        { name: 'Material Design', level: 70 },
        { name: 'Figma', level: 65 },
        { name: 'Responsive Design', level: 75 },
        { name: 'UI Components', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + categoryIndex * 0.05 + skillIndex * 0.02 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
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
            <h3 className="text-2xl font-bold mb-6">Continuous Learning & Professional Development</h3>
            <p className="mb-6 opacity-90">
              Currently expanding my expertise in Artificial Intelligence through the Kifiya AIM program at 10Academy. This intensive training is helping me bridge my software engineering background with cutting-edge AI technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Machine Learning', 'Deep Learning', 'Computer Vision', 'Neural Networks', 'Python', 'TensorFlow', 'Data Science', 'AI Ethics'].map((tech) => (
                <span 
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
