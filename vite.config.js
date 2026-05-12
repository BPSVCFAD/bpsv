import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'assets', dest: '.' },
        { src: 'style.css', dest: '.' }
      ]
    })
  ],
  base: './',
  server: {
    proxy: {
      '/contact-handler.php': {
        target: 'http://localhost/bpsv',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  }
})
