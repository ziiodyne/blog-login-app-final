import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Icons from "../components/Icons";
import "../styles/Homepage.css";

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

export default function Homepage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.transform = `translateY(${y * 0.3}px)`;
      heroRef.current.style.opacity = 1 - y / 500;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hp-root">
      <Header />

      <section className="hp-hero">
        <div className="hp-hero-bg" aria-hidden="true">
          <div className="hp-blob hp-blob--1" />
          <div className="hp-blob hp-blob--2" />
          <div className="hp-grain" />
        </div>

        <div className="hp-hero-content" ref={heroRef}>
          <p className="hp-eyebrow">✦ A SPACE FOR REAL THOUGHTS ✦</p>
          <h1 className="hp-headline">
            Where Ideas
            <br />
            <em>Actually</em> Live.
          </h1>
          <p className="hp-subhead">
            No algorithm. No fluff. Just good writing from people.
          </p>

          <div className="hp-cta-group">
            {isAuthenticated ? (
              <button
                type="button"
                className="explore-btn"
                onClick={() => navigate("/blog")}
              >
                Explore Blog →
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="get-started-btn"
                  onClick={() => navigate("/login")}
                >
                  Get Started
                </button>
                <button
                  type="button"
                  className="browse-post-btn"
                  onClick={() => navigate("/blog")}
                >
                  Browse Posts
                </button>
              </>
            )}
          </div>
        </div>

        <div className="hp-scroll-hint" aria-hidden="true">
          <div className="hp-scroll-line" />
        </div>
      </section>

      <div className="hp-marquee" aria-hidden="true">
        <div className="hp-marquee-track">
          {[
            "CULTURE",
            "TECH",
            "LIFESTYLE",
            "OPINION",
            "TRAVEL",
            "FOOD",
            "DESIGN",
            "CULTURE",
            "TECH",
            "LIFESTYLE",
            "OPINION",
            "TRAVEL",
            "FOOD",
            "DESIGN"
          ].map((tag, i) => (
            <span key={i} className="hp-marquee-item">
              {tag} <span className="hp-marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="hp-section">
        <div className="hp-section-header">
          <h2 className="hp-section-title">What's Featured</h2>
        </div>

        <div className="hp-about-stat-grid">
          {[
            { num: "1.2K+ ", label: "Posts Published" },
            { num: "340+ ", label: "Active Writers" },
            { num: "8K+ ", label: "Monthly Readers" },
            { num: "∞ ", label: "Hot Takes" },
          ].map((s) => (
            <div className="hp-stat" key={s.label}>
              <span className="hp-stat-num">{s.num}</span>
              <span className="hp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hp-cards">
          <div className="hp-card-list-container">

            {FEATURED_POSTS.map((post, i) => (
              <article
                key={post.id}
                className={`hp-card hp-card--${i + 1}`}
                onClick={() => navigate(`/post/${post.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(`/post/${post.id}`)}
              >


                <div className="hp-card-content">
                  <span className="hp-card-cat">{post.category}</span>
                  <h3 className="hp-card-title">{post.title}</h3>
                  <p className="hp-card-excerpt">{post.excerpt}</p>
                  <span className="hp-card-date">{post.date}</span>
                  <Icons></Icons>
                </div>

                <div className="hp-image-container">
                  <img
                    src={`/images/hp_img_${i + 1}.png`} alt="homepage_img"
                    className="hp-image"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <button
        type="button"
        className="hp-link-btn"
        onClick={() => navigate("/blog")}>
        View all →
      </button>

      <section className="hp-about">
        <div className="hp-about-inner">
          <div className="hp-about-text">
            <h2 className="hp-about-title">
              Built for readers,
              by real writers.
            </h2>
            <p className="hp-about-body">
              Inkwell is your community-powered blog platform. Log in to explore
              posts, share ideas, and connect with writers who actually have
              something to say.
            </p>

            {!isAuthenticated && (
              <button
                type="button"
                className="join-convo-btn"
                onClick={() => navigate("/login")}
              >
                Join the Conversation!
              </button>
            )}
          </div>
        </div>
      </section>

      <footer className="hp-footer">
        <p className="hp-footer-copy">© 2026 Inkwell Blog. Made with opinions.</p>
      </footer>
    </div>
  );
}