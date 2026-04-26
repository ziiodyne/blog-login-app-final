import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";

export default function Header() {
    const navigate = useNavigate();
    const { user, logout, isAuthenticated } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="nav">
            <span className="logo" onClick={() => navigate("/")}>
                ✦ INKWELL ✦
            </span>

            <div className="nav-links">
                <button className="home-btn" type="button" onClick={() => navigate("/")}>
                    Home
                </button>

                {isAuthenticated ? (
                    <div className="auth-group">
                        <span className="user">
                            Hey, <strong>{user?.username}</strong> 👋
                        </span>
                        <button
                            type="button"
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        className="login-btn"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}