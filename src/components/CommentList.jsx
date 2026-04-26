import "../styles/CommentList.css";

function CommentList({ comments }) {

  return (
    <>
      <h2 className="comment_header">Existing Comments</h2>
      <ul className="comm_list">
        <li><b>Albert P:</b> "Wow! This is great!"</li>
        <li><b>Robert D:</b> "This post is very informative."</li>
        <li><b>DogMan254:</b> "1+ FOLLOWER!!!"</li>

        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}:</strong> "{comment.text}"
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentList