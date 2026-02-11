import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/tua/', // TODO: Update this if your repository name is different
  server: {
    host: '0.0.0.0',
  },
})
