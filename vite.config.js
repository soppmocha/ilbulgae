// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
    return {
        plugins: [react()],
        // 개발 테스트(serve) 중일 때는 루트("/")를 사용하고,
        // 깃허브 배포를 위해 빌드(build)할 때만 "/ilbulgae/"를 사용합니다.
        base: command === 'serve' ? '/' : '/ilbulgae/',
    }
})