import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Slider.module.css";

// Import images

// Akola College
import Img17 from "../Images/Web_Photos/Akola Khandelwal/17.jpeg";
import Img18 from "../Images/Web_Photos/Akola Khandelwal/18.jpeg";
import Img20 from "../Images/Web_Photos/Akola Khandelwal/20.jpeg";
import Img21 from "../Images/Web_Photos/Akola Khandelwal/21.jpeg";
import Img22 from "../Images/Web_Photos/Akola Khandelwal/22.jpeg";
import Img23 from "../Images/Web_Photos/Akola Khandelwal/23.jpeg";
import Img24 from "../Images/Web_Photos/Akola Khandelwal/24.jpeg";
import Img8 from "../Images/Web_Photos/Akola Khandelwal/8.jpeg";
import Img13 from "../Images/Web_Photos/Akola Manav/13.jpeg";
import Img19 from "../Images/Web_Photos/Akola Manav/19.jpeg";

// Pune College
import Img16 from "../Images/Web_Photos/Pune/16.jpeg";
import Img14 from "../Images/Web_Photos/Pune/14.jpeg";
import Img15 from "../Images/Web_Photos/Pune/15.jpeg";
import Img1 from "../Images/Web_Photos/DY Patil/1.jpeg";


function Slider() {
  const navigate = useNavigate();

  // Data for locations with images
  const locations = [
    {
      title: "Akola College",
      images: [
        { src: Img13, id: 1 },
        { src: Img8,  id: 2 },
        { src: Img17, id: 3 },
        { src: Img18, id: 4 },
        { src: Img20, id: 5 },
        { src: Img21, id: 6 },
        { src: Img22, id: 7 },
        { src: Img23, id: 8 },
        { src: Img24, id: 9 },
        { src: Img19, id: 10 },



      ],
    },
    {
      title: "Pune College",
      images: [
        { src: Img1, id: 11 },
        { src: Img16, id: 16 },
        { src: Img14, id: 17 },
        { src: Img15, id: 18 },
      ],
    },
  ];

  const handleImageClick = (location) => {
    // Navigate to GalleryPage with the selected location's images
    navigate("/gallerypage", { state: { location } });
  };

  return (
    <div className={styles.sliderContainer}>
      {locations.map((location, index) => (
        <div
          key={index}
          className={styles.imageWrapper}
          onClick={() => handleImageClick(location)}
        >
          <img
            src={location.images[0].src}
            alt={location.title}
            className={styles.image}
          />
          <div className={styles.imageText}>{location.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
