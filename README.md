# Yonatan Mebratu - Portfolio

[![Vercel](https://img.shields.io/badge/deployed%20on-vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive, and performant portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a Full-Stack Developer.

## 🚀 Features

- **Modern UI/UX** with responsive design
- **Dark/Light Mode** with system preference detection
- **Smooth Animations** using Framer Motion
- **Project Showcase** with filtering and search
- **Interactive Contact Form** with form validation
- **SEO Optimized** with proper meta tags
- **Fast and Lightweight** with code splitting
- **Accessible** following WCAG guidelines

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Framer Motion
- **Icons**: Lucide Icons, Font Awesome
- **Form Handling**: React Hook Form
- **Routing**: React Router
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with the production-ready files.

## 🎨 Customization

### Changing Colors

Edit the `tailwind.config.js` file to change the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... other colors
        },
      },
    },
  },
};
```

### Adding Projects

Edit the `src/data/projects.ts` file to add or modify projects:

```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    tags: ['React', 'TypeScript'],
    image: '/images/project.jpg',
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://project-demo.com',
  },
  // Add more projects...
];
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Font Awesome](https://fontawesome.com/)

## 📬 Contact

- **Email**: your.email@example.com
- **Website**: https://yourwebsite.com
- **LinkedIn**: [yourusername](https://linkedin.com/in/yourusername)
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

Made with ❤️ by Yonatan Mebratu
