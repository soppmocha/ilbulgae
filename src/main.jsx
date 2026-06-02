// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // HashRouter 임포트
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* 💡 basename 같은 복잡한 설정은 싹 지우고 담백하게 감싸줍니다. */}
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
)