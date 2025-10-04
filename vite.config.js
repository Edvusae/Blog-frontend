import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ⭐️ ADD THIS CONFIGURATION BLOCK ⭐️
  test: {
    globals: true, // Allows using test functions (like 'it' and 'expect') globally
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './src/setupTests.js', // File to set up Jest-DOM matchers
    css: true, // Handles CSS imports gracefully (important for Bootstrap)
  },
});