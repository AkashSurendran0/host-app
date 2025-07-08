import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes:{
        homeApp:'https://home-42it5fhst-akashsurendran0s-projects.vercel.app/assets/remoteEntry.js',
        userApp:'https://user-bj0ep21oa-akashsurendran0s-projects.vercel.app/assets/remoteEntry.js'
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
