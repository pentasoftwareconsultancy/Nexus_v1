import { useState } from "react";
import BookDemo from './BookDemo/BookDemo';
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <a href="/"> {/* Logo code here if necessary */} </a>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/batches">Courses</a></li>
          <li><a href="/blogs">Success Stories</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contactUs">Contact Us</a></li>
          <li><BookDemo /></li>
        </ul>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
