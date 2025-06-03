import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Add Font Awesome for social icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add all icons to the library
library.add(fab, fas, far);

// Set the title of the website
document.title = 'Yonatan Mebratu | Full-Stack Developer';

// Add meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Personal portfolio of Yonatan Mebratu, a Full-Stack Developer specializing in React, Node.js, and modern web technologies.';
document.head.appendChild(metaDescription);

// Add favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = '/favicon.ico';
document.head.appendChild(favicon);

// Add theme color for mobile browsers
const themeColor = document.createElement('meta');
themeColor.name = 'theme-color';
themeColor.content = '#ffffff';
document.head.appendChild(themeColor);

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
