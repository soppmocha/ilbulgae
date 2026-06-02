import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 1. CKEditor 패키지 임포트
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function BoardWrite({ addPost }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); // 에디터의 HTML 내용이 저장될 곳
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // CKEditor는 내부적으로 HTML 태그를 생성하므로 비어있는지 체크할 때 주의해야 합니다.
        // 태그를 제외한 순수 텍스트가 비어있는지 검사하는 간단한 방법입니다.
        const pureText = content.replace(/<[^>]*>?/gm, '').trim();

        if (!title.trim() || !pureText) {
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        }

        addPost(title, content);
        navigate("/ilbulgae/home");
    };

    return (
        <div>
            <h2>✍️ 새 글 작성 (Rich Editor)</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <label style={{ display: "block", marginBottom: "5px" }}>제목</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
                        placeholder="제목을 입력하세요"
                    />
                </div>

                <div>
                    <label style={{ display: "block", marginBottom: "5px" }}>내용</label>
                    {/* 2. 기존 textarea 대신 CKEditor 컴포넌트 적용 */}
                    <div className="editor-wrapper" style={{ color: "#000" }}>
                        {/* 글자색이 테마 때문에 안 보일 수 있어서 style 추가 */}
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            onChange={(event, editor) => {
                                const data = editor.getData(); // 에디터에 입력된 HTML 텍스트 가져오기
                                setContent(data);
                            }}
                            config={{
                                placeholder: "내용을 입력하세요...",
                            }}
                        />
                    </div>
                </div>

                <div>
                    <button type="submit" style={{ padding: "10px 20px", marginRight: "10px", cursor: "pointer" }}>
                        등록
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/ilbulgae/home")}
                        style={{ padding: "10px 20px", cursor: "pointer" }}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BoardWrite;