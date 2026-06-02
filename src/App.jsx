import {useState} from "react";
import {Routes, Route, Navigate} from "react-router-dom"; // 1. Navigate 임포트 추가
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import BoardWrite from "./pages/BoardWrite";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "첫 번째 게시글입니다.", content: "안녕하세요. 반가워요!", date: "2026-06-02"},
        {id: 2, title: "리액트 공부 중...", content: "생각보다 재밌네요 열심히 해야지", date: "2026-06-03"},
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
        <div style={{maxWidth: "800px", margin: "0 auto", padding: "20px"}}>
            <h1>🚀 React 미니 게시판</h1>
            <hr/>
            <Routes>
                {/* 예외 처리 1: 과거 주소로 오면 메인 홈으로 튕겨냅니다. */}
                <Route path="/ilbulgae" element={<Navigate to="/ilbulgae/home" replace/>}/>

                {/* 실제 화면을 보여주는 명확한 라우트들 */}
                <Route path="/ilbulgae/home" element={<BoardList posts={posts}/>}/>
                <Route path="/ilbulgae/post/:id" element={<BoardDetail posts={posts}/>}/>
                <Route path="/ilbulgae/write" element={<BoardWrite addPost={addPost}/>}/>

                {/* 예외 처리 2: 이상한 주소로 오면 몽땅 메인 홈으로 튕겨냅니다. */}
                <Route path="*" element={<Navigate to="/ilbulgae/home" replace/>}/>
            </Routes>
        </div>
    );
}

export default App;