import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

type TimelineItem = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ReactElement;
  type: 'work' | 'education';
};

const Experience = () => {
  const timeline: TimelineItem[] = [
    {
      id: 1,
      title: 'BSc in Computer Science',
      company: 'St. Mary\'s University',
      period: '2020 - February 2025',
      description: [
        'Specialized in Software Engineering with focus on Mobile Development',
        'Developed GymPro Android application as senior capstone project',
        'GPA: 3.2/4.0',
        'Relevant Coursework: Data Structures, Algorithms, Mobile App Development, Database Systems'
      ],
      icon: <GraduationCap className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
      type: 'education'
    },
    {
      id: 2,
      title: 'Self-Taught Developer',
      company: 'Independent Learning',
      period: '2020 - Present',
      description: [
        'Self-studied Android development with Kotlin and Java',
        'Learned modern Android development practices including MVVM, Jetpack Components',
        'Built personal projects to apply theoretical knowledge',
        'Participated in online coding challenges and open source contributions'
      ],
      icon: <Briefcase className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
      type: 'work'
    },
    {
      id: 3,
      title: 'Kifiya AIM Program',
      company: '10Academy',
      period: '2024 - Present',
      description: [
        'Currently participating in an intensive AI training program',
        'Learning machine learning, deep learning, and AI fundamentals',
        'Working on practical AI projects and real-world applications',
        'Collaborating with peers on AI solutions'
      ],
      icon: <GraduationCap className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My educational background and self-directed learning journey
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 w-1 h-full bg-gray-200 dark:bg-dark-700 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group w-full ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white z-10">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className={`bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center mb-2">
                        <div className="md:hidden mr-3 p-1.5 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                        </div>
                      </div>
                      <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-4">{item.period}</div>
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600 dark:text-gray-300">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
