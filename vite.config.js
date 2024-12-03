import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// Example dynamic data for courses
const courses = ['react', 'vue', 'angular'];

export default defineConfig({
  plugins: [
    react(), // Keep the React plugin
    sitemap({
      hostname: 'https://www.nexusctc.com', // Your website's hostname
      routes: [
        '/', 
        '/about', 
        '/contactUs', 
        '/courses',
        ...courses.map(course => `/courses/${course}`), // Add dynamic routes
      ],
    }),
  ],
});
