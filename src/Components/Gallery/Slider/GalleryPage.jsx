import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import styles from "./GalleryPage.module.css";

function GalleryPage() {
  const { state } = useLocation();
  const { location } = state || {};

  if (!location) {
    return <div>No data available</div>;
  }

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.galleryContainer}>
      <h1>{location.title}</h1>
      <div className={styles.imageGrid}>
        {location.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${image.id}`}
            className={styles.galleryImage}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
