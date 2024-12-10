import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${postId}/`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
      });
  }, [postId]);
  console.log(title,author,content)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/posts/${postId}/edit/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content ,author}),
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/posts/${postId}`);
        } else {
          response.json().then((data) => alert(data.errors));
        }
      });
  };

  // Inline styles
  const styles = {
    form: {
      maxWidth: "600px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: "2rem",
      color: "#333",
    },
    input: {
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
    },
    textarea: {
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      minHeight: "150px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      textAlign: "center",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  // Button hover effect
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = styles.button.backgroundColor;
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h1 style={styles.heading}>Edit Post</h1>
      <input
        style={styles.input}
        type="text"
        value={title}
        placeholder="Post Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={styles.textarea}
        value={content}
        placeholder="Post Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <textarea
        style={styles.input}
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        style={styles.button}
        type="submit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Update
      </button>
    </form>
  );
};

export default EditPost;
