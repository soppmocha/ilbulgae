import { useParams, Link } from "react-router-dom";

function BoardDetail({ posts }) {
    const { id } = useParams();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h2>존재하지 않는 게시글입니다.</h2>
                <Link to="/ilbulgae">
                    <button style={{ padding: "10px" }}>목록으로 이동</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p style={{ color: "#666", fontSize: "14px" }}>작성일: {post.date}</p>
            <hr />

            {/* ⚠️ 수정된 부분: 그냥 출력하는 대신 dangerouslySetInnerHTML를 사용해 HTML로 렌더링합니다. */}
            <div
                style={{ minHeight: "200px", padding: "10px 0" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <hr />
            <Link to="/ilbulgae/home">
                <button style={{ padding: "10px", cursor: "pointer" }}>목록으로</button>
            </Link>
        </div>
    );
}

export default BoardDetail;