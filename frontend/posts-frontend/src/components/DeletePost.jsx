
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeletePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8000/posts/${postId}/delete/`, {
      method: "DELETE",
    }).then(() => navigate("/posts"));
  };

  // Inline styles
  const styles = {
    container: {
      textAlign: "center",
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "1.8rem",
      color: "#333",
      marginBottom: "20px",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    deleteButton: {
      backgroundColor: "#e74c3c",
      color: "#fff",
    },
    cancelButton: {
      backgroundColor: "#3498db",
      color: "#fff",
    },
    deleteButtonHover: {
      backgroundColor: "#c0392b",
    },
    cancelButtonHover: {
      backgroundColor: "#2980b9",
    },
  };

  // Hover effects for buttons
  const handleMouseEnter = (e, type) => {
    e.target.style.backgroundColor =
      type === "delete"
        ? styles.deleteButtonHover.backgroundColor
        : styles.cancelButtonHover.backgroundColor;
  };

  const handleMouseLeave = (e, type) => {
    e.target.style.backgroundColor =
      type === "delete"
        ? styles.deleteButton.backgroundColor
        : styles.cancelButton.backgroundColor;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Are you sure you want to delete this post?</h1>
      <div style={styles.buttonGroup}>
        <button
          style={{ ...styles.button, ...styles.deleteButton }}
          onClick={handleDelete}
          onMouseEnter={(e) => handleMouseEnter(e, "delete")}
          onMouseLeave={(e) => handleMouseLeave(e, "delete")}
        >
          Yes, Delete
        </button>
        <button
          style={{ ...styles.button, ...styles.cancelButton }}
          onClick={() => navigate(`/posts/${postId}`)}
          onMouseEnter={(e) => handleMouseEnter(e, "cancel")}
          onMouseLeave={(e) => handleMouseLeave(e, "cancel")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeletePost;
