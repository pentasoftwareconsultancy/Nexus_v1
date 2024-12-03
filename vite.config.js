import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// Static routes from App.jsx
const staticRoutes = [
  '/', 
  '/about', 
  '/contactUs', 
  '/courses', 
  '/gallery', 
  '/successs-stories', 
  '/gallerypage',
];

// Dynamic routes for `learnMore`
const learnMoreRoutes = [
  '/learnMore/software-testing',
  '/learnMore/aws-administrator',
  '/learnMore/dev-ops',
  '/learnMore/power-bi',
  '/learnMore/data-science',
  '/learnMore/full-stack-devloper-',
  '/learnMore/big-data',
  '/learnMore/-medical-coding---billing-',
  '/learnMore/ar-caller-rcm',
  '/learnMore/java',
  '/learnMore/c#-and-.net',
  '/learnMore/business-analyst',
  '/learnMore/sql',
];

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.nexusctc.com', // Your live website URL
      routes: [
        ...staticRoutes,
        ...learnMoreRoutes, // Include dynamic routes
      ],
    }),
  ],
});
