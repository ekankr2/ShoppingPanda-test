import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        outDir: 'build',
    },
    plugins: [
        react(),
    ],
    server: {
        proxy: {
            '/api': 'http://localhost:8080',
        },
        open: true
    }
})
