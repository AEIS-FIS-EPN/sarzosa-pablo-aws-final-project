import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import process from 'node:process'

const baseDir = process.cwd()
// https://vitejs.dev/config/
export default defineConfig(
  
  
  {
    
  plugins: [react()],
  build: {
    outDir: 'build', // Cambia 'dist' a 'build' o a cualquier otro nombre de carpeta que prefieras
  },
  base: './', // Cambia '/react-vite/' por el nombre de la carpeta que prefieras

  resolve: {
    alias: {
      '@components': path.resolve(baseDir, 'src/components/'),
      // Define other aliases here
    },
  },
})
