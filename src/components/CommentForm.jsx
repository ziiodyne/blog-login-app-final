import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaPaperPlane } from "react-icons/fa";



function CommentForm({ addComment }) {
  const { isAuthenticated, user } = useAuth();
  const [commentData, setCommentData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentData.trim()) return;

    const newComment = {
      name: user.username,
      text: commentData
    };

    addComment(newComment);
    setCommentData("");
  };

  if (!isAuthenticated) return null;

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="form">
        <textarea
          className="enter-text"
          name="text"
          placeholder="Join the conversation..."
          value={commentData}
          onChange={(e) => setCommentData(e.target.value)}
          required
        />
        <button className="comment_btn" type="submit">
          <FaPaperPlane />
        </button>
      </div>
    </form>

  );
}

export default CommentForm;