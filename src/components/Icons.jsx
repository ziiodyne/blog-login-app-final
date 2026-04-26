import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaArrowsRotate, FaShareFromSquare } from "react-icons/fa6";

function Icons() {
    const [reaction, setReaction] = useState(null);
    const [reposted, setReposted] = useState(false);

    const handleLike = (e) => {
        e.stopPropagation();
        setReaction(reaction === "like" ? null : "like");
    };

    const handleDislike = (e) => {
        e.stopPropagation();
        setReaction(reaction === "dislike" ? null : "dislike");
    };

    const handleRepost = (e) => {
        e.stopPropagation();
        setReposted(!reposted);
    };

    const handleShare = (e) => {
        e.stopPropagation();
        // Share button intentionally does nothing
    };

    return (
        <ul className="icons">
            <li>
                <button
                    type="button"
                    className={`icon-btn ${reaction === "like" ? "active-icon" : ""}`}
                    onClick={handleLike}
                >
                    <FaThumbsUp />
                </button>
            </li>

            <li>
                <button
                    type="button"
                    className={`icon-btn ${reaction === "dislike" ? "active-icon" : ""}`}
                    onClick={handleDislike}
                >
                    <FaThumbsDown />
                </button>
            </li>

            <li>
                <button
                    type="button"
                    className={`icon-btn ${reposted ? "active-icon" : ""}`}
                    onClick={handleRepost}
                >
                    <FaArrowsRotate />
                </button>
            </li>

            <li>
                <button
                    type="button"
                    className="icon-btn"
                    onClick={handleShare}
                >
                    <FaShareFromSquare />
                </button>
            </li>
        </ul>
    );
}

export default Icons;