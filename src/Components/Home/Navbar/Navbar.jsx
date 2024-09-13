import { useState } from 'react';
import styles from './Navbar.module.css'; // Importing the CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <a href="./nexus-updated logo.webp">NEXUS</a>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/batches">Upcoming Batches</a></li>
          <li><a href="/contactUs">Contact Us</a></li>
          <li><a href="/exam">Exam</a></li>
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
