import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  const navigate = useNavigate();



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("author", formData.author);
    if (formData.image) formDataToSend.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:8000/posts/create/", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Post created successfully!");
        navigate("/posts");
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
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
      minHeight: "100px",
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
      <input
        style={styles.input}
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        style={styles.textarea}
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      ></textarea>
      <input
        style={styles.input}
        type="text"
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />

      <button
        type="submit"
        style={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
