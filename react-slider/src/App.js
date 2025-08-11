import "./App.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <motion.div className="carossel">
        <motion.div className="inner-carossel"></motion.div>
      </motion.div>
    </div>
  );
}

export default App;
