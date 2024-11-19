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

// more Images
import Img2 from "../Images/Web_Photos/2.jpeg"
import Img3 from "../Images/Web_Photos/2.jpeg"
import Img4 from "../Images/Web_Photos/4.jpeg"
import Img5 from "../Images/Web_Photos/5.jpeg"
import Img6 from "../Images/Web_Photos/6.jpeg"
import Img7 from "../Images/Web_Photos/7.jpeg"
import Img9 from "../Images/Web_Photos/9.jpeg"
import Img10 from "../Images/Web_Photos/10.jpeg"
import Img11 from "../Images/Web_Photos/11.jpeg"
import Img25 from "../Images/Web_Photos/25.jpeg"
import Img26 from "../Images/Web_Photos/26.jpeg"

function Slider() {
  const navigate = useNavigate();

  // Data for locations with images
  const locations = [
    {
      title: "Akola College",
      images: [
        //Akola 
        { src: Img13, id: 13 },
        { src: Img8,  id: 8 },
        { src: Img17, id: 17 },
        { src: Img18, id: 18 },
        { src: Img20, id: 20 },
        { src: Img21, id: 21 },
        { src: Img22, id: 22 },
        { src: Img23, id: 23 },
        { src: Img24, id: 24 },
        { src: Img19, id: 19 },

        // Pune 
        { src: Img1,  id: 1 },
        { src: Img16, id: 16 },
        { src: Img14, id: 14 },
        { src: Img15, id: 15 },

        // More Images 
        { src: Img2, id: 2 },
        { src: Img3, id: 2 },
        { src: Img4, id: 2 },
        { src: Img5, id: 2 },
        { src: Img6, id: 2 },
        { src: Img7, id: 2 },
        { src: Img9, id: 2 },
        { src: Img10, id: 2 },
        { src: Img11, id: 2 },
        { src: Img25, id: 2 },
        { src: Img26, id: 2 },
      ],
    },

    {
      title: "Pune College",
      images: [
        // Pune 
        { src: Img1,  id: 1 },
        { src: Img16, id: 16 },
        { src: Img14, id: 14 },
        { src: Img15, id: 15 },

        //Akola 
        { src: Img13, id: 13 },
        { src: Img8,  id: 8 },
        { src: Img17, id: 17 },
        { src: Img18, id: 18 },
        { src: Img20, id: 20 },
        { src: Img21, id: 21 },
        { src: Img22, id: 22 },
        { src: Img23, id: 23 },
        { src: Img24, id: 24 },
        { src: Img19, id: 19 },

         // More Images 
         { src: Img2, id: 2 },
         { src: Img3, id: 2 },
         { src: Img4, id: 2 },
         { src: Img5, id: 2 },
         { src: Img6, id: 2 },
         { src: Img7, id: 2 },
         { src: Img9, id: 2 },
         { src: Img10, id: 2 },
         { src: Img11, id: 2 },
         { src: Img25, id: 2 },
         { src: Img26, id: 2 },
      ],
    },

    // {
    //   title: "D.Y. Patil College",
    //   images: [
    //     { src: Img1, id: 11 },
    //     { src: Img16, id: 16 },
    //     { src: Img14, id: 17 },
    //     { src: Img15, id: 18 },
    //   ],
    // },

    // {
    //   title: "Pune College",
    //   images: [
    //     { src: Img1, id: 11 },
    //     { src: Img16, id: 16 },
    //     { src: Img14, id: 17 },
    //     { src: Img15, id: 18 },
    //   ],
    // },
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
