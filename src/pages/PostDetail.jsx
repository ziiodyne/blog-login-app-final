import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/PostDetail.css";
import Icons from "../components/Icons";
import { useAuth } from "../context/AuthContext";

const POSTS = {
    1: {
        title: "Why Slow Mornings Work",
        body: "Rest improves creativity.",
        image: "/images/hp_img_1.png"
    },
    /**
        2: {
            title: "AI Wrote My Blog For a Week",
            body: "I let AI take over my writing for a full week. The results were surprisingly human, sometimes insightful, sometimes chaotic, but always interesting.",
            image: "/images/hp_img_2.png"
        },
    */
    3: {
        title: "The Art of Doing Absolutely Nothing",
        body: "A deep dive into the science and soul of rest.",
        image: "/images/hp_img_3.png"
    }
};

export default function PostDetail() {
    const { id } = useParams();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const post = POSTS[id];

    if (!post) {
        return (
            <div className="non-post-page">
                <Header />
                <div className="non-post-container">
                    <h1 className="no-post-header">You have traveled into the void.</h1>
                    <p className="no-post-text"><i>There are no stars out here.</i></p>
                    <button className="return-btn" type="button" onClick={() => navigate("/")}>
                        Return Home
                    </button>
                </div>
                <footer className="no-post-footer">
                    <p className="hp-footer-copy">© 2026 Inkwell Blog. Made with opinions.</p>
                </footer>
            </div>
        );
    }

    return (
        <div className="post-page">
            <Header />

            <div className="post-container">

                <h1 className="post-detail-title">{post.title}</h1>
                <div className="post-img">
                    <img src={post.image} alt={post.title} className="post-image" />
                </div>

                <Icons></Icons>

                <p className="post-detail-body">{post.body}</p>
                <div>
                    {isAuthenticated ? (
                        <button className="back-btn" type="button" onClick={() => navigate("/blog")}>
                            Join the Conversation!
                        </button>
                    ) : (
                        <button className="back-btn" type="button" onClick={() => navigate("/login")}>
                            Join the Conversation!
                        </button>
                    )}
                </div>

            </div>

            <footer className="hp-footer">
                <p className="hp-footer-copy">© 2026 Inkwell Blog. Made with opinions.</p>
            </footer>
        </div>
    );
}