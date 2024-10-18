import { useEffect, useRef } from "react";
import styles from "./HeroSlider.module.css";

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
    "https://i.redd.it/asking-ai-to-create-a-family-picture-of-every-country-v0-zzeloe3pis0b1.png?width=1456&format=png&auto=webp&s=b18e0341eee33f82acb6af5a036ca1ba274f8739",
    "https://images.nightcafe.studio/jobs/G3l3ujMJ1T61Lwz0Gy4H/G3l3ujMJ1T61Lwz0Gy4H--1--qifi6.jpg?tr=w-1600,c-at_max",
    "https://img.freepik.com/premium-photo/boy-programming-room-rendered-3d-style_870512-151.jpg",
    "https://img.freepik.com/premium-photo/3d-rendered-photos-slow-morning_1139417-68859.jpg",
    "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/a9ef5e3d-8763-4036-8a38-44367888e38a/bba2c8f5-8b3e-4149-8ae4-e8ae6d12c144.png",
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
                <div className={styles.title}>d .y patil </div>
                <div className={styles.name}>college</div>
                <div className={styles.des}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis culpa similique consequuntur, reprehenderit dicta
                  repudiandae.
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
