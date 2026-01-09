import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

// vite.config.js
// import { defineConfig, loadEnv } from 'vite'  // ← Added loadEnv import
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => {  // ← Function syntax
//   // Load .env variables
//   const env = loadEnv(mode, process.cwd(), '');
  
//   return {
//     plugins: [
//       react(),
//       tailwindcss(),
//     ],
//     server: {
//       proxy: {
//         '/api': {  // ← Fixed quotes
//           target: env.VITE_API_BASE_URL || 'http://localhost:5000',  // ← String quotes
//           changeOrigin: true,
//           secure: false,
//         },
//       },
//     },
//   };
// });
