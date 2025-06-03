export const contactInfo = {
  email: 'ymebratu64@gmail.com',
  phone: '+251 978 996 721',
  location: 'Addis Ababa, Ethiopia',
  socialMedia: {
    github: 'https://github.com/YG38',
    linkedin: 'https://www.linkedin.com/in/yonatan-mebratu-a79aa42a3/',
    telegram: 'https://t.me/yoni2m'
  },
  // Add path to your resume when you have it ready
  // resume: '/path/to/your/resume.pdf'
} as const;

export type ContactInfo = typeof contactInfo;
