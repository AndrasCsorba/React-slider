import "./App.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

function App() {
  

  return (
    <div className="App">
      <motion.div className="carousel">
        <motion.div drag="x" className="inner-carousel">
          {images.map((image, index) => (
            <motion.div className="item" key={index}>
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;