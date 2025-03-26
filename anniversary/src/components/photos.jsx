import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./photos.css";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img6.jpeg";
import img7 from "../images/img7.jpeg";
import img8 from "../images/img8.jpeg";
import img9 from "../images/img9.jpeg";
import img10 from "../images/img10.jpeg";
import img11 from "../images/img11.jpeg";
import img12 from "../images/img12.jpeg";
import img13 from "../images/img13.jpeg";

const photos = [
  { src: img1, text: "Memories from our first trip" },
  { src: img2, text: "A cozy evening together" },
  { src: img3, text: "Sunset at the beach" },
  { src: img4, text: "Our favorite cafe" },
  { src: img5, text: "Laughing uncontrollably" },
  { src: img6, text: "Our anniversary dinner" },
  { src: img7, text: "The first gift I gave you" },
  { src: img8, text: "A random cute moment" },
  { src: img9, text: "Exploring a new city" },
  { src: img10, text: "Our lazy Sunday morning" },
  { src: img11, text: "You looking adorable" },
  { src: img12, text: "A perfect day" },
  { src: img13, text: "One of our happiest moments" },
];

const Photos = () => {
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for Next, -1 for Previous

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX - 1500;
      const y = event.clientY - 1500;
      setSpotlightPos({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const totalPages = Math.ceil(photos.length / 3);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setDirection(-1);
      setPage(page - 1);
    }
  };

  return (
    <div className="diary-container">
      <div
        className="spotlight"
        style={{ transform: `translate(${spotlightPos.x}px, ${spotlightPos.y}px)` }}
      ></div>

      <div className="diary">
        <AnimatePresence mode="wait" custom={direction}>
          {Array.from({ length: totalPages }).map((_, index) => (
            page === index && (
              <motion.div
                key={index}
                className="page"
                initial={{ opacity: 0, rotateY: direction === 1 ? -90 : 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: direction === 1 ? 90 : -90 }}
                transition={{ duration: 0.6 }}
              >
                <div className="photo-grid">
                  {photos.slice(index * 3, index * 3 + 3).map((photo, idx) => (
                    <div key={idx} className="photo-container">
                      <div className="photo">
                        <img src={photo.src} alt={`Photo ${index * 3 + idx + 1}`} />
                        <div className="photo-text">{photo.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      <div className="controls">
        <button onClick={prevPage} disabled={page === 0}>🢀</button>
        <button onClick={nextPage} disabled={page === totalPages - 1}>🡆</button>
      </div>
    </div>
  );
};

export default Photos;
