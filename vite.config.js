import { defineConfig } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	build: {
		outDir: './build',
		target: 'esnext',
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						if (id.includes('react')) {
							return 'vendor__react';
						}
						if (id.includes('firebase')) {
							return 'vendor__firebase';
						}
						return 'vendor';
					}
				},
			},
		},
	},
	plugins: [
		mode === 'development' && eslint(),
		react(),
		svgr({ exportAsDefault: true }),
	],
	server: { open: true, port: 3000 },
	test: {
		globals: true,
		environment: 'jsdom',
		server: {
			deps: {
				inline: ['@the-collab-lab/shopping-list-utils'],
			},
		},
		setupFiles: './tests/setup.js',
	},
}));
