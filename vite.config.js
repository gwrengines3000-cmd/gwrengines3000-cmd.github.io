import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/gwrengines3000-cmd.github.io/',
  plugins: [react()],
})
