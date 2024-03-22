import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    server: {
    port:5173,
      proxy: {
        // Proxying API requests to the Express backend
          target: 'http://localhost:3000', // The backend's base URL
      },
    },
})
