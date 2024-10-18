import { useState, useEffect } from "react";
import styles from './Hero.module.css';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    "https://img.freepik.com/free-photo/kids-having-their-hands-dirty-after-planting_23-2149002815.jpg",
    "https://img.freepik.com/premium-photo/group-diverse-cheerful-fun-happy-multiethnic-children-outdoors_146482-14096.jpg",
    "https://img.freepik.com/premium-photo/children-play-laugh-sunny-day_232104-8036.jpg",
    "https://equityforchildren.org/wp-content/uploads/2024/05/children-laughing-in-woods-compressed-1.jpg",
    "https://udaipurblog.com/wp-content/uploads/2018/02/About-Us-Bal-Utsav-Bangalore-India.jpg",
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
