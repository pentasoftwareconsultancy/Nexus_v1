import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import img3 from "./Images/pexels-kevin-ku-92347-577585.jpg";
import img4 from "./Images/pexels-mikhail-nilov-6963944.jpg";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive((prev) => !prev);
  };

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  const slides = [
    {
      image:
        "https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/b8fcc053-ee65-4817-accc-de443e99586d/Cinematic_Kino_dark_black_ai_images_for_technology_abstract_ba_0.jpg",
      slogan: "Innovate Beyond Imagination",
      description:
        "Discover cutting-edge technology that propels your ideas into the future.",
    },
    {
      image:
        "https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/b8fcc053-ee65-4817-accc-de443e99586d/Cinematic_Kino_dark_black_ai_images_for_technology_abstract_ba_3.jpg",
      slogan: "Empowering Your Vision",
      description:
        "Unleash your creativity with tools designed to transform your vision into reality.",
    },
    {
      image:
        "https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/8af2e3b1-8715-4be9-b51b-1fdf8534786a/Cinematic_Kino_dark_black_ai_images_for_technology_abstract_ba_3.jpg",
      slogan: "Technology Meets Excellence",
      description:
        "Elevate your business with technology that drives excellence and growth.",
    },
    {
      image:
        "https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/8af2e3b1-8715-4be9-b51b-1fdf8534786a/Cinematic_Kino_dark_black_ai_images_for_technology_abstract_ba_1.jpg",
      slogan: "Innovation at Its Finest",
      description:
        "Experience the future today with innovative solutions for every challenge.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <header className={styles.header}>
        <div
          className={`${styles.menuBtn} ${menuActive ? styles.active : ""}`}
          onClick={handleMenuClick}
        >
          <div
            className={`${styles.navigation} ${menuActive ? styles.active : ""}`}
          >
            {/* Navigation Items */}
          </div>
        </div>
      </header>

      <section className={styles.home}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <img
              decoding="async"
              className={`${styles.imgSlide} ${
                activeIndex === index ? styles.active : ""
              }`}
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
            {activeIndex === index && (
              <div className={styles.slideContent}>
                <span className={styles.slideText}>{slide.slogan}</span>
                {/* <p className={styles.slideDescription}>{slide.description}</p> */}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hero;
