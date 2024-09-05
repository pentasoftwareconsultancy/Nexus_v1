import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import img1 from "./Images/pexels-freestocks-1122528.jpg";
import img2 from "./Images/pexels-iliescu-victor-95204-306198.jpg";
import img3 from "./Images/pexels-kevin-ku-92347-577585.jpg";
import img4 from "./Images/pexels-mikhail-nilov-6963944.jpg";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };
  const slides = [
    "https://t3.ftcdn.net/jpg/04/69/70/96/360_F_469709690_v1xpZt24mqGORK5HxilKoNNJrqqxgs8U.jpg",
    "https://media.istockphoto.com/id/1255099921/vector/innovation-business-project-start-up-launching-product-with-rocket-concept-landing-page.jpg?s=612x612&w=0&k=20&c=G1xES4zIU0e2rdvN6T5BE9g71UAK1LTIPgcw_opq1gE=",
    img3,
    img4,
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
        {/* <a href="/" className={styles.brand}>
          <strong>
            <h2>Matrimony</h2>
          </strong>
        </a> */}
        <div
          className={`${styles.menuBtn} ${menuActive ? styles.active : ""}`}
          onClick={handleMenuClick}
        >
          <div
            className={`${styles.navigation} ${
              menuActive ? styles.active : ""
            }`}
          >
            {/* <div className={styles.navigationItems}>
              <a href="/">Home</a>
              <a href="about">About</a>
              <a href="services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/briedcard">Bride</a>
              <a href="/groom">Groom</a>
              <a href="/form">Profile Form</a>
              <a href="/login">Login</a>
            </div> */}
          </div>
        </div>
      </header>

      <section className={styles.home}>
        {slides.map((slide, index) => (
          <img
            key={index}
            decoding="async"
            className={`${styles.imgSlide} ${
              activeIndex === index ? styles.active : ""
            }`}
            src={slide}
            alt=""
          />
        ))}
      </section>
    </div>
  );
};

export default Hero;
