import React from 'react';
import styles from './SmallSlider.module.css';

// Import your local images or use URLs

function SmallSlider() {
  const row1 = [
    { src: 'https://i.ibb.co/qCkd9jS/img1.jpg', title: 'Switzerland' },
    { src: 'https://i.ibb.co/jrRb11q/img2.jpg', title: 'Finland' },
    { src: 'https://i.ibb.co/NSwVv8D/img3.jpg', title: 'Iceland' },
    { src: 'https://i.ibb.co/Bq4Q0M8/img4.jpg', title: 'Australia' },
    { src: 'https://i.ibb.co/jTQfmTq/img5.jpg', title: 'Netherlands' },
    { src: 'https://i.ibb.co/RNkk6L0/img6.jpg', title: 'Ireland' },
  ];


  return (
    <div className={styles.sliderContainer}>
      <div className={styles.wrapper}>
        {/* First Row */}
        <div className={styles.marquee}>
          <div className={styles.marqueeGroup}>
            {row1.map((el, index) => (
              <div key={index} className={styles.imageGroup}>
                <img src={el.src} className={styles.image} alt={el.title} />
              </div>
            ))}
          </div>
          <div className={styles.marqueeGroup}>
            {row1.map((el, index) => (
              <div key={index} className={styles.imageGroup}>
                <img src={el.src} className={styles.image} alt={el.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        
      </div>
    </div>
  );
}

export default SmallSlider;
