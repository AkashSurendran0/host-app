import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes:{
        homeApp:'http://localhost:3000/assets/remoteEntry.js',
        userApp:'http://localhost:3001/assets/remoteEntry.js'
      },
      shared:['react', 'react-dom']
    })
  ],
  build:{
    target:'esnext'
  }
})
