import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { contactInfo } from '../config/contact';
import SocialLinks from './ui/SocialLinks';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out to me through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaEnvelope className="text-primary-600 dark:text-primary-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 dark:text-white">Email</h3>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-center block"
            >
              {contactInfo.email}
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaPhone className="text-primary-600 dark:text-primary-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 dark:text-white">Phone</h3>
            <a 
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-center block"
            >
              {contactInfo.phone}
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 dark:text-white">Location</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {contactInfo.location}
            </p>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 dark:text-white">Connect With Me</h3>
          <div className="flex justify-center">
            <SocialLinks iconSize={28} className="gap-8" showLabels={false} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
