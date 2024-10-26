import { useEffect, useRef } from "react";
import styles from "./HeroSlider.module.css";
import Img4 from '../Images/Web_Photos/4.jpeg'
import Img2 from '../Images/Web_Photos/2.jpeg'
import Img3 from '../Images/Web_Photos/3.jpeg'
import Img5 from '../Images/Web_Photos/5.jpeg'
import Img6 from '../Images/Web_Photos/6.jpeg'
import Img7 from '../Images/Web_Photos/7.jpeg'


const HeroSlider = () => {
  const listRef = useRef(null);
  const carouselRef = useRef(null);
  const runningTimeRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  const timeRunning = 1000;
  const timeAutoNext = 3000;
  let runNextAuto;

  const resetTimeAnimation = () => {
    const runningTime = runningTimeRef.current;
    if (runningTime) {
      runningTime.style.animation = "none";
      void runningTime.offsetHeight; // Trigger reflow
      runningTime.style.animation = "runningTime 7s linear 1 forwards";
    }
  };

  const showSlider = (type) => {
    const list = listRef.current;
    const sliderItemsDom = list.querySelectorAll(`.${styles.item}`);

    if (type === "next") {
      list.appendChild(sliderItemsDom[0]);
      carouselRef.current.classList.add("next");
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextBtnRef.current.click();
    }, timeAutoNext);

    resetTimeAnimation();
  };

  useEffect(() => {
    resetTimeAnimation();
    runNextAuto = setTimeout(() => {
      nextBtnRef.current.click();
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto); // Cleanup timeout on unmount
  }, []);

  // Array of image URLs
  const imageUrls = [
    Img4,
    Img2,
    Img3,
    Img5,
    Img6,
    Img7,
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.list} ref={listRef}>
          {/* Repeat this block for each item */}
          {imageUrls.map((url, index) => (
            <div
              className={styles.item}
              key={index}
              style={{ backgroundImage: `url(${url})` }}
            >
              <div className={styles.content}>
                <div className={styles.title}></div>
                <div className={styles.name}></div>
                <div className={styles.des}>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.arrows}>
          <button
            className={styles.prev}
            ref={prevBtnRef}
            onClick={() => showSlider("prev")}
          >
            {"<"}
          </button>
          <button
            className={styles.next}
            ref={nextBtnRef}
            onClick={() => showSlider("next")}
          >
            {">"}
          </button>
        </div>

        <div className={styles.timeRunning} ref={runningTimeRef}></div>
      </div>
    </div>
  );
};

export default HeroSlider;
