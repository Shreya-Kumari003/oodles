import React from "react";
import { useNavigate } from "react-router-dom";
import Test from "./Test";

const Home = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Inline styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f4f4f9",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      color: "#333",
      fontSize: "2.5rem",
      marginBottom: "1.5rem",
      textAlign: "center",
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
    buttonActive: {
      backgroundColor: "#003d80",
    },
  };

  // Button hover and active states
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = styles.button.backgroundColor;
  };

  const handleMouseDown = (e) => {
    e.target.style.backgroundColor = styles.buttonActive.backgroundColor;
  };

  const handleMouseUp = (e) => {
    e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Home View!</h1>
      <button
        style={styles.button}
        onClick={() => navigate("/posts")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Go to Posts
      </button>
    </div>
  );
};

export default Home;
