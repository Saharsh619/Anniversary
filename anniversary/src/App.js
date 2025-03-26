import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/homeScreen";
import Photos from "./components/photos";
import GameScreen from "./components/games";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/games" element={<GameScreen />} />

      </Routes>
    </Router>
  );
}

export default App;
