import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <h1>✦ Welcome To INKWELL ✦</h1>
        <p>Enter in your information below.</p>
        <p>The stars <i>await</i> for your arrival.</p>
        <LoginForm />
      </div>

      <footer className="hp-footer">
        <p className="hp-footer-copy">© 2026 Inkwell Blog. Made with opinions.</p>
      </footer>
    </div>


  );
}