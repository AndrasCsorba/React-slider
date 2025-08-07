import "./App.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <motion.h1 animate={{ x: 400, y: 150 }}>Hello Moto</motion.h1>
    </div>
  );
}

export default App;
