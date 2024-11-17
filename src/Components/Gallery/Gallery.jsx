import { Helmet } from "react-helmet";

import styles from "./Gallery.module.css";
import HeroSlider from "./HeroSlider/HeroSlider";
import Img9 from "./Images/Web_Photos/9.jpeg";
import Img17 from "./Images/Web_Photos/Akola Khandelwal/17.jpeg";
import Img18 from "./Images/Web_Photos/Akola Khandelwal/18.jpeg";
import Img20 from "./Images/Web_Photos/Akola Khandelwal/20.jpeg";
import Img21 from "./Images/Web_Photos/Akola Khandelwal/21.jpeg";
import Img22 from "./Images/Web_Photos/Akola Khandelwal/22.jpeg";
import Img23 from "./Images/Web_Photos/Akola Khandelwal/23.jpeg";
import Img24 from "./Images/Web_Photos/Akola Khandelwal/24.jpeg";
import Img8 from "./Images/Web_Photos/Akola Khandelwal/8.jpeg";
import Img13 from "./Images/Web_Photos/Akola Manav/13.jpeg";
import Img19 from "./Images/Web_Photos/Akola Manav/19.jpeg";
import Img1 from "./Images/Web_Photos/DY Patil/1.jpeg";
import Slider from "./Slider/Slider";
import SmallSlider from "./SmallSlider/SmallSlider";
const images = [{ src: Img8 }, { src: Img17 }, { src: Img21 }];

const images1 = [{ src: Img13 }, { src: Img19 }, { src: Img1 }];

function Gallery() {
  return (
    <div>
      <Helmet>
        <title>Nexus Corporate Training Center - Gallery </title>
        <meta name="description" content="Know more about Nexus " />
        <meta name="keywords" content="Nexus" />
      </Helmet>

      <HeroSlider />

      <Slider />

      <div className={styles.galleryContainer}>
        <h2 className={styles.title}>Galleries</h2>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <img
                src={image.src}
                alt={image.title}
                className={styles.galleryImage}
              />
              {/* <div className={styles.imageTitle}>{image.title}</div> */}
            </div>
          ))}
        </div>

        <div className={styles.galleryGrid1}>
          {images1.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <img
                src={image.src}
                alt={image.title}
                className={styles.galleryImage}
              />
              {/* <div className={styles.imageTitle}>{image.title}</div> */}
            </div>
          ))}
        </div>
      </div>

      {/* <SmallSlider /> */}
    </div>
  );
}

export default Gallery;
