import { Link } from "react-router-dom";

function BoardList({ posts }) {
    return (
        <div>
            <h2>📝 게시글 목록</h2>
            {/* 글쓰기 페이지 이동 경로 수정 */}
            <Link to="/ilbulgae/write">
                <button style={{ marginBottom: "20px", padding: "10px", cursor: "pointer" }}>
                    글쓰기
                </button>
            </Link>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                <tr style={{ borderBottom: "2px solid #ccc", textAlign: "left" }}>
                    <th style={{ padding: "10px", width: "10%" }}>번호</th>
                    <th style={{ padding: "10px", width: "70%" }}>제목</th>
                    <th style={{ padding: "10px", width: "20%" }}>작성일</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
                    <tr key={post.id} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "10px" }}>{post.id}</td>
                        <td style={{ padding: "10px" }}>
                            {/* 상세 페이지 이동 경로 수정 */}
                            <Link to={`/ilbulgae/post/${post.id}`} style={{ textDecoration: "none", color: "blue" }}>
                                {post.title}
                            </Link>
                        </td>
                        <td style={{ padding: "10px" }}>{post.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BoardList;