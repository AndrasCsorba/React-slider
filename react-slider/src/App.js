import "./App.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

function App() {
  return (
    <div className="App">
      <motion.div className="carossel">
        <motion.div className="inner-carossel">
          {images.map((image) => {
            return (
              <motion.div className="item">
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}


export default App;
