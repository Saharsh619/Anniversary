import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./homescreen.css";
import backgroundImage from "../images/backgroundImage.jpg"; // Background Image

const HomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function createFlower() {
      const flower = document.createElement("div");
      flower.classList.add("falling-flower");
      flower.innerText = "🌸"; // Flower emoji
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.bottom = "100vh"; // Start from the top of the screen
      flower.style.animationDuration = Math.random() * 2 + 2 + "s";
      document.body.appendChild(flower);
      
      setTimeout(() => {
        flower.remove();
      }, 2000);
    }
  
    let interval = setInterval(createFlower, 250);
    setTimeout(() => clearInterval(interval), 2000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="home-container">

      {/* Anniversary Message */}
      <div className="content">For our 5 years together ❤️</div>
      
      {/* Background Image */}
      <div className="background-image">
        <img
          src={backgroundImage}
          style={{ width: "80em", height: "1200px" }}
          alt="Background"
        />
      </div>

      {/* Navbar Buttons */}
      <div className="navbar">
        <button className="music-button" onClick={() => navigate("/photos")}>
          <div className="photosText">📸 Photos</div>
        </button>

        <button
          className="music-button"
          onClick={() =>
            window.open(
              "https://open.spotify.com/playlist/3AqxCYjEKdPAffwttWzNmL?si=9ea1813fe47d4e04",
              "_blank"
            )
          }
        >
          🎵<div className="musicText">Music for You</div>
        </button>

        <div className="surpriseText">
          <button onClick={() => navigate("/games")}>🔮 Your Surprise</button>
        </div>
      </div>

      
    </div>
  );
};

export default HomeScreen;