import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  // Inline styles
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "2rem",
      color: "#333",
      marginBottom: "20px",
    },
    postList: {
      listStyle: "none",
      padding: 0,
    },
    postItem: {
      marginBottom: "10px",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
      fontSize: "1.1rem",
    },
    linkHover: {
      color: "#0056b3",
    },
    createLink: {
      display: "inline-block",
      marginTop: "20px",
      padding: "10px 15px",
      backgroundColor: "#007bff",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
    },
    createLinkHover: {
      backgroundColor: "#0056b3",
    },
  };

  // Hover effects for links
  const handleMouseEnter = (e, hoverStyle) => {
    Object.assign(e.target.style, hoverStyle);
  };

  const handleMouseLeave = (e, defaultStyle) => {
    Object.assign(e.target.style, defaultStyle);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Posts</h1>
      <ul style={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} style={styles.postItem}>
            <Link
              to={`/posts/${post.id}`}
              style={styles.link}
              onMouseEnter={(e) => handleMouseEnter(e, styles.linkHover)}
              onMouseLeave={(e) => handleMouseLeave(e, styles.link)}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/posts/create"
        style={styles.createLink}
        onMouseEnter={(e) => handleMouseEnter(e, styles.createLinkHover)}
        onMouseLeave={(e) => handleMouseLeave(e, styles.createLink)}
      >
        Create New Post
      </Link>
    </div>
  );
};

export default PostList;

