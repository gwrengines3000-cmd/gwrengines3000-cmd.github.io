import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/https://github.com/gwrengines3000-cmd/gwrengines3000.github.io.git/', // Replace with your desired base path
})
