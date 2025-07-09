import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes:{
        homeApp:'https://home-app-five.vercel.app/assets/remoteEntry.js',
        userApp:'https://user-app-iota-one.vercel.app/assets/remoteEntry.js'
      },
      shared: {
        react: {
          external: 'React',
          requiredVersion: '^18.0.0',
        },
        'react-dom': {
          external: 'ReactDOM',
          requiredVersion: '^18.0.0',
        },
      }
    })
  ],
  build:{
    target:'esnext'
  }
})
