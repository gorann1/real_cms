import inertia from '@inertiajs/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import UnoCSS from 'unocss/vite'


export default defineConfig({
  plugins: [
    inertia(),
    react(),
    UnoCSS(),
    RubyPlugin(),
  ],
})
