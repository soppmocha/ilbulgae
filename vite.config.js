// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // 💡 HashRouter를 쓸 때는 배포 기준점을 "./"로 주면
    // 깃허브가 어디서든 index.html을 아주 잘 찾아냅니다.
    base: './',
})