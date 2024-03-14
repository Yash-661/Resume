import { ServerOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ser: ServerOptions = {
  open: true
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resume/'
})

