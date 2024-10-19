import { Helmet } from "react-helmet";

import styles from "./Gallery.module.css";
import HeroSlider from "./HeroSlider/HeroSlider";
import Slider from "./Slider/Slider";
import SmallSlider from "./SmallSlider/smallSlider";

const images = [
  { src: "https://i.ibb.co/Bq4Q0M8/img4.jpg" },
  { src: "https://i.ibb.co/jTQfmTq/img5.jpg" },
  { src: "https://i.ibb.co/RNkk6L0/img6.jpg" },
];

const images1 = [
  { src: "https://i.ibb.co/qCkd9jS/img1.jpg" },
  { src: "https://i.ibb.co/jrRb11q/img2.jpg" },
  { src: "https://i.ibb.co/NSwVv8D/img3.jpg" },
];

function Gallery() {
  return (
    <div>

     <Helmet>
        <title>Nexus Corporate Training Center - Gallery  </title>
        <meta
          name="description"
          content="Know more about Nexus "
        />
        <meta
          name="keywords"
          content="Nexus"
        />
      </Helmet> 

      <HeroSlider />
      
      <Slider />
      <Slider />


      <div className={styles.galleryContainer}>
        <h1 className={styles.title}>Galleries </h1>
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
          
      <SmallSlider/>
    </div>
  );
}

export default Gallery;
