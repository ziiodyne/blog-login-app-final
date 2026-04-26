import Header from "../components/Header";
import "../styles/BlogPage.css";
import "../styles/Homepage.css";
import "../styles/CommentForm.css";
import "../styles/CommentList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import Icons from "../components/Icons";

const FEATURED_POSTS = [
  {
    id: 1,
    category: "CULTURE",
    title: "Why Slow Mornings Are the New Productivity Hack",
    excerpt: "The hustle era is dead. Here's what replaced it.",
    date: "APR 18, 2026",
  },
  {
    id: 2,
    category: "TECH",
    title: "AI Wrote My Blog For a Week. Here's What Happened.",
    excerpt: "Spoiler: It was weird, funny, and oddly accurate.",
    date: "APR 12, 2026",
  },
  {
    id: 3,
    category: "LIFESTYLE",
    title: "The Art of Doing Absolutely Nothing",
    excerpt: "A deep dive into the science and soul of rest.",
    date: "APR 05, 2026",
  },
];

export default function BlogPage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [comments, setComments] = useState({});

  const addComment = (postId, comment) => {
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment],
    }));
  };

  return (
    <div className="blog-page">
      <Header />

      <div className="blog-container">
        <h1 className="blog-header">✦ Blog Posts ✦</h1>

        {isAuthenticated && <p className="sucess-text"><i>Talk amongst the stars.</i></p>}
        {isAuthenticated && (
          <p className="who-user">
            Commenting as: <b>{user.username}</b>
          </p>
        )}

        <div className="hp-cards">
          <div className="hp-card-list-container">

            {FEATURED_POSTS.map((post, i) => (
              <div key={post.id} className="post-wrapper">

                <article
                  className={`hp-card hp-card--${i + 1}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && navigate(`/post/${post.id}`)
                  }>
                  <div className="hp-card-content">
                    <span className="hp-card-cat">{post.category}</span>
                    <h3 className="hp-card-title">{post.title}</h3>
                    <p className="hp-card-excerpt">{post.excerpt}</p>
                    <span className="hp-card-date">{post.date}</span>
                    <div><Icons /></div>
                  </div>

                  <div className="hp-image-container">
                    <img
                      src={`/images/hp_img_${i + 1}.png`} alt={post.title}
                      className="hp-image"
                    />
                  </div>
                </article>

                <div className="comment-section">
                  {isAuthenticated ? (
                    <>
                      <CommentForm addComment={(comment) => addComment(post.id, comment)} />
                      <CommentList comments={comments[post.id] || []} />
                    </>
                  ) : (
                    <div className="login-prompt">
                      <p>The comment box is hidden because you are not logged in.</p>
                      <p><a href="/login">Log in</a> to join the conversation!</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="hp-footer">
        <p className="hp-footer-copy">© 2026 Inkwell Blog. Made with opinions.</p>
      </footer>
    </div>
  );
}