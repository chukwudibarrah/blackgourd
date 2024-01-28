import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'lottie-web'],
    bundleNodeModules: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    chunkSizeWarningLimit: 2500,
  },
})
