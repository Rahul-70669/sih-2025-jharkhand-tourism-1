/**
 * Vite configuration file.
 * This file exports the configuration for Vite, a fast build tool for modern web projects.
 *
 * @see https://vite.dev/config/ for more details on Vite configuration options.
 */

import {defineConfig} from 'vite'; // Import the `defineConfig` helper from Vite
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite"; // Import the official React plugin for Vite

// Export the Vite configuration
export default defineConfig({
	plugins: [
		// Add the React plugin to enable support for React and JSX/TSX
		react(),
		tailwindcss()
	],
	base: '/sih-2025-jharkhand-tourism/'
});
