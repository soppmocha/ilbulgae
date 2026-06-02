// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* 배포 환경(GitHub Pages)과 로컬 환경 모두 대응하기 위한 조건문 설정 */}
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/ilbulgae"}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)