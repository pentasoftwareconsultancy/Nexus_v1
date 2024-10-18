import { useState, useEffect } from "react";
import styles from "./Hero.module.css"; 

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  const slides = [
    "https://img.freepik.com/free-photo/kids-having-their-hands-dirty-after-planting_23-2149002815.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717804800&semt=ais_user",
    "https://img.freepik.com/premium-photo/group-diverse-cheerful-fun-happy-multiethnic-children-outdoors_146482-14096.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716768000&semt=ais_user",
    "https://img.freepik.com/premium-photo/children-play-laugh-sunny-day_232104-8036.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user",
    "https://equityforchildren.org/wp-content/uploads/2024/05/children-laughing-in-woods-compressed-1.jpg",
    "https://udaipurblog.com/wp-content/uploads/2018/02/About-Us-Bal-Utsav-Bangalore-India.jpg",
  ];

  const contents = [
    {
      title: "Your Support is Powerful",
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: "We work Together",
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: "To the Homeless & Hpoeless People",
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: "Together we can Change",
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: "Save a Child's Life",
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
        <a href="#" className={styles.brand}>
          <strong>
            <h2>NGO</h2>
          </strong>
        </a>
        <div
          className={`${styles.menuBtn} ${menuActive ? styles.active : ""}`}
          onClick={handleMenuClick}
        >
          <div className={`${styles.navigation} ${menuActive ? styles.active : ""}`}>
            <div className={styles.navigationItems}>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Explore</a>
              <a href="#">Gallery</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.home}>
        {slides.map((slide, index) => (
          <img
            key={index}
            decoding="async"
            className={`${styles.imgSlide} ${activeIndex === index ? styles.active : ""}`}
            src={slide}
            alt=""
          />
        ))}
        {contents.map((content, index) => (
          <div
            key={index}
            className={`${styles.content} ${activeIndex === index ? styles.active : ""}`}
          >
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <a href="#">
              <strong>DONATE</strong>
            </a>
          </div>
        ))}
        <div className={styles.mediaIcons}>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className={styles.sliderNavigation}>
          {contents.map((_, index) => (
            <div
              key={index}
              className={`${styles.navBtn} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => handleNavClick(index)}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;
