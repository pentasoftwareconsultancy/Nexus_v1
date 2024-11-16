import React, { useState } from "react";
import styles from "./Slider.module.css";

// Import images
import Img13 from "../Images/Web_Photos/Akola Manav/13.jpeg";
import Img19 from "../Images/Web_Photos/Akola Manav/19.jpeg";
import Img12 from "../Images/Web_Photos/Akola Khandelwal/12.jpeg";
import Img18 from "../Images/Web_Photos/Akola Khandelwal/18.jpeg";
import Img20 from "../Images/Web_Photos/Akola Khandelwal/20.jpeg";
import Img21 from "../Images/Web_Photos/Akola Khandelwal/21.jpeg";
import Img22 from "../Images/Web_Photos/Akola Khandelwal/22.jpeg";
import Img23 from "../Images/Web_Photos/Akola Khandelwal/23.jpeg";
import Img24 from "../Images/Web_Photos/Akola Khandelwal/24.jpeg";
import Img17 from "../Images/Web_Photos/Akola Khandelwal/17.jpeg";
import Img8 from "../Images/Web_Photos/Akola Khandelwal/8.jpeg";
import Img1 from "../Images/Web_Photos/DY Patil/1.jpeg";

function Slider() {
  const [isExpanded, setIsExpanded] = useState(false);

  const row1 = [
    { src: Img8 },
    { src: Img17 },
    { src: Img21 },
    { src: Img22 },
    { src: Img23 },
    { src: Img24 },
    { src: Img18 },
    { src: Img20 },
    { src: Img12 },
    { src: Img13 },
    { src: Img19 },
    { src: Img1 },
  ];

  // Event to toggle display of more photos
  const togglePhotos = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.circle} onClick={togglePhotos}>
        <span>+</span>
      </div>
      {isExpanded && (
        <div className={styles.wrapper}>
          <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
              {row1.map((el, index) => (
                <div key={index} className={styles.imageGroup}>
                  <img src={el.src} className={styles.image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
