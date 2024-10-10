import React, { useEffect, useRef } from 'react';
import styles from './Gallery.module.css';
// import image1 from '../assets/makhana.jpg'; // Local image example

const Gallery = () => {
    const listRef = useRef(null);
    const carouselRef = useRef(null);
    const runningTimeRef = useRef(null);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    
    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runNextAuto;

    const resetTimeAnimation = () => {
        const runningTime = runningTimeRef.current;
        if (runningTime) {
            runningTime.style.animation = 'none';
            void runningTime.offsetHeight; // Trigger reflow
            runningTime.style.animation = `${styles.runningTime} 7s linear 1 forwards`;
        }
    };

    const showSlider = (type) => {
        const list = listRef.current;
        const sliderItemsDom = list.querySelectorAll(`.${styles.item}`);

        if (type === 'next') {
            list.appendChild(sliderItemsDom[0]);
            list.classList.add(styles.fadeIn);
        } else {
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            list.classList.add(styles.fadeIn);
        }

        setTimeout(() => {
            list.classList.remove(styles.fadeIn);
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextBtnRef.current.click();
        }, timeAutoNext);

        resetTimeAnimation();
    };

    useEffect(() => {
        runNextAuto = setTimeout(() => {
            nextBtnRef.current.click();
        }, timeAutoNext);

        resetTimeAnimation();
    }, []);

    return (
        <div>
            <div className={styles.carousel} ref={carouselRef}>
                <div className={styles.list} ref={listRef}>
                    <div className={styles.item} style={{ backgroundImage: `url(https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/09/Pros-and-Cons-of-Using-Education-Technology.png)` }}>
                        {/* Image content */}
                    </div>

                    <div className={styles.item} style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbd8oDuW2ITtgBR9B6caUr6NSXQ9sIdsl1hmm6-pi4yek5ol_z1VwAXWYc0ADXQgWzOo&usqp=CAU)` }}>
                        {/* Image content */}
                    </div>

                    <div className={styles.item} style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGIGut8ZI6hqtWS2zbtOg-Nh-FuLiMq9IbugMo8B0n3iyy0cMse4wnYGGuNsL9cGPJPE&usqp=CAU)` }}>
                        {/* Image content */}
                    </div>

                    <div className={styles.item} style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnyc1RHZTsx8_CB5KJZuuE-5gmXpjT1hV20G_RKCMYd22O_xpdWvp7S3ZtmmboyMeCbI&usqp=CAUg)` }}>
                        {/* Image content */}
                    </div>
                    {/* Add other items similarly */}
                </div>

                <div className={styles.arrows}>
                    <button className={styles.prev} ref={prevBtnRef} onClick={() => showSlider('prev')}>{'<'}</button>
                    <button className={styles.next} ref={nextBtnRef} onClick={() => showSlider('next')}>{'>'}</button>
                </div>

                <div className={styles.runningTime} ref={runningTimeRef}></div>
                    
            </div>
            <div className={styles.Gallery}>
                    <div className={styles.items} style={{ backgroundImage: `url(https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/09/Pros-and-Cons-of-Using-Education-Technology.png)` }}>
                        {/* Image content */}
                    </div>

                    <div className={styles.items} style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbd8oDuW2ITtgBR9B6caUr6NSXQ9sIdsl1hmm6-pi4yek5ol_z1VwAXWYc0ADXQgWzOo&usqp=CAU)` }}>
                        {/* Image content */}
                    </div>

                    <div className={styles.items} style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGIGut8ZI6hqtWS2zbtOg-Nh-FuLiMq9IbugMo8B0n3iyy0cMse4wnYGGuNsL9cGPJPE&usqp=CAU)` }}>
                        {/* Image content */}
                    </div>

                    <div className={styles.items} style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnyc1RHZTsx8_CB5KJZuuE-5gmXpjT1hV20G_RKCMYd22O_xpdWvp7S3ZtmmboyMeCbI&usqp=CAUg)` }}>
                        {/* Image content */}
                    </div>
                    {/* Add other items similarly */}
                    </div>
        </div>
    );
};

export default Gallery;
