import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {BASE} from './src/utility/constant.js'
// https://vitejs.dev/config/
export default defineConfig({
  base:`/${BASE}/`, 
  plugins: [react()],
})
