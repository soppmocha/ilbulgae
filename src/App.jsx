import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import BoardWrite from "./pages/BoardWrite";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "첫 번째 게시글입니다.", content: "안녕하세요. 반가워요!", date: "2026-06-02" },
        { id: 2, title: "리액트 공부 중...", content: "생각보다 재밌네요 열심히 해야지", date: "2026-06-03" },
    ]);

    const addPost = (title, content) => {
        const newPost = {
            id: posts.length + 1,
            title,
            content,
            date: new Date().toISOString().split('T')[0],
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <h1>🚀 React 미니 게시판</h1>
            <hr />
            <Routes>
                {/* 주소창에 그냥 주소만 치고 들어오거나 슬래시만 있을 때 /home으로 보냅니다. */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* 🎯 앞의 /ilbulgae를 다 지우고 깔끔하게 매칭합니다. */}
                <Route path="/home" element={<BoardList posts={posts} />} />
                <Route path="/post/:id" element={<BoardDetail posts={posts} />} />
                <Route path="/write" element={<BoardWrite addPost={addPost} />} />

                {/* 예외 처리: 주소가 안 맞으면 무조건 홈으로 */}
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    );
}

export default App;