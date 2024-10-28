import { useState, useEffect } from "react";
import styles from './Hero.module.css';
import placement from "./Images/placement1.jpeg"
import placement1 from "./Images/placement2.jpeg"
import placement2 from "./Images/placement3.jpeg"

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    placement,
    placement1,
    placement2,
    placement1,
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.hero}>
      
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <img
            key={index}
            className={`${styles.slide} ${activeIndex === index ? styles.active : ""}`}
            src={slide}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
