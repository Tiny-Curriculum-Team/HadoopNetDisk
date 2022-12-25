import { defineConfig } from 'vite'


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:2731',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  }
})


