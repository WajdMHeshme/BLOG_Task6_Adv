import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: '/BLOG_Task6_Adv/',
  plugins: [react(),
    tailwindcss()
  ],
})
