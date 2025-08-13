import "./App.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

function App() {
   const [width, setWidth] = useState(0);
   const carousel = useRef();

   useEffect(() => {
     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
   }, []);

   return (
     <div className="App">
       <header className="app-header">
         <h1> React Image Carousellino</h1>
       </header>
       <motion.div
         ref={carousel}
         className="carousel"
         whileTap={{ cursor: "grabbing" }}>
         <motion.div
           drag="x"
           dragConstraints={{ right: 0, left: -width }}
           className="inner-carousel">
           {images.map((image, index) => (
             <motion.div className="item" key={index}>
               <img src={image} alt="" draggable="false" />
             </motion.div>
           ))}
         </motion.div>
       </motion.div>
     </div>
   );
}

export default App;