import { useParams } from "react-router-dom";
import useShowImages from "../hooks/useShowImages";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  console.log(post);
  useEffect(() => {
    fetch(`http://localhost:8000/posts/${postId}/`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  const imageSrc = useShowImages(post?.image);
  console.log(imageSrc);
  if (!post) return <p>Loading...</p>;

  // Inline styles
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2rem",
      color: "#333",
      marginBottom: "20px",
    },
    content: {
      fontSize: "1.2rem",
      color: "#555",
      marginBottom: "20px",
      lineHeight: "1.6",
    },
    author: {
      fontSize: "1rem",
      color: "#777",
      marginBottom: "20px",
    },
    meta: {
      fontSize: "0.9rem",
      color: "#777",
      marginBottom: "20px",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "8px",
      marginTop: "20px",
    },
    linkContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    link: {
      padding: "10px 15px",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#007bff",
      borderRadius: "5px",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
      textAlign: "center",
    },
    linkHover: {
      backgroundColor: "#0056b3",
    },
  };

  // Hover effects
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.linkHover.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = styles.link.backgroundColor;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{post.title}</h1>
      <p style={styles.content}>{post.content}</p>
      <p style={styles.author}>{post.author}</p>
      <p style={styles.meta}>Created at: {post.created_at}</p>
      {imageSrc && <img src={imageSrc} alt="Post" style={styles.image} />}
      <div style={styles.linkContainer}>
        <a
          href={`/posts/${postId}/edit`}
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Edit Post
        </a>
        <a
          href={`/posts/${postId}/delete`}
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Delete Post
        </a>
      </div>
    </div>
  );
};

export default PostDetail;
