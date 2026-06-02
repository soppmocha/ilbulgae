import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* 💡 핵심: 배포 환경일 때만 자동으로 앞에 /ilbulgae를 붙여서 라우팅을 시작합니다. */}
        <BrowserRouter basename={import.meta.env.DEV ? "" : "/ilbulgae"}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)