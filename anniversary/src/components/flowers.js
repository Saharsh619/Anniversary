document.addEventListener("DOMContentLoaded", () => {
    function createFlower() {
      const flower = document.createElement("div");
      flower.classList.add("falling-flower");
      flower.innerText = "🌸"; // Flower emoji
      flower.style.left = Math.random() * 100 + "vw"; // Random horizontal position
      flower.style.bottom = "-10vh"; // Start from below the screen
      flower.style.animationDuration = Math.random() * 2 + 3 + "s"; // Different speeds
  
      document.body.appendChild(flower);
  
      // Remove the flower after animation
      setTimeout(() => {
        flower.remove();
      }, 5000);
    }
  
    // Generate more flowers every 150ms for 5 seconds
    let interval = setInterval(createFlower, 150);
    setTimeout(() => clearInterval(interval), 5000);
  });
  