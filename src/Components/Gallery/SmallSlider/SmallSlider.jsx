import Img13 from "../Images/Web_Photos/Akola Manav/13.jpeg";
import Img19 from "../Images/Web_Photos/Akola Manav/19.jpeg";
import Img18 from "../Images/Web_Photos/Akola Khandelwal/18.jpeg";
import Img20 from "../Images/Web_Photos/Akola Khandelwal/20.jpeg";
import Img21 from "../Images/Web_Photos/Akola Khandelwal/21.jpeg";
import Img22 from "../Images/Web_Photos/Akola Khandelwal/22.jpeg";
import Img23 from "../Images/Web_Photos/Akola Khandelwal/23.jpeg";
import Img24 from "../Images/Web_Photos/Akola Khandelwal/24.jpeg";
import Img17 from "../Images/Web_Photos/Akola Khandelwal/17.jpeg";
import Img8 from "../Images/Web_Photos/Akola Khandelwal/8.jpeg";
import Img1 from "../Images/Web_Photos/DY Patil/1.jpeg";
import styles from "./SmallSlider.module.css";

// Import your local images or use URLs

function SmallSlider() {
  const row1 = [
    { src: Img8 },
    { src: Img17 },
    { src: Img21 },
    { src: Img22 },
    { src: Img23 },
    { src: Img24 },
    { src: Img18 },
    { src: Img20 },
    { src: Img13 },
    { src: Img19 },
    { src: Img1 },
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
