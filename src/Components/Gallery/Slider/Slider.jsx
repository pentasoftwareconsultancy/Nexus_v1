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
import Img1 from "../Images/Web_Photos/DY Patil/1.jpeg";
import Img14 from "../Images/Web_Photos/Pune/14.jpeg";
import Img15 from "../Images/Web_Photos/Pune/15.jpeg";
import Img16 from "../Images/Web_Photos/Pune/16.jpeg";

// Dr. D.Y. Patil Eduation Images
import Img10 from "../Images/Web_Photos/10.jpeg";
import Img11 from "../Images/Web_Photos/11.jpeg";
import { default as Img2, default as Img3 } from "../Images/Web_Photos/2.jpeg";
import Img25 from "../Images/Web_Photos/25.jpeg";
import Img26 from "../Images/Web_Photos/26.jpeg";
import Img4 from "../Images/Web_Photos/4.jpeg";
import Img5 from "../Images/Web_Photos/5.jpeg";
import Img6 from "../Images/Web_Photos/6.jpeg";
import Img7 from "../Images/Web_Photos/7.jpeg";
import Img9 from "../Images/Web_Photos/9.jpeg";

// more images 

import Img29 from "../Images/Web_Photos/Asian/29.jpeg";
import Img35 from "../Images/Web_Photos/Asian/35.jpeg";
import Img36 from "../Images/Web_Photos/Asian/36.jpeg";
import Img37 from "../Images/Web_Photos/Asian/37.jpeg";
import Img39 from "../Images/Web_Photos/Asian/39.jpeg";
import Img42 from "../Images/Web_Photos/Asian/42.jpeg";
import Img44 from "../Images/Web_Photos/Asian/44.jpeg";
import Img45 from "../Images/Web_Photos/Asian/45.jpeg";
import Img48 from "../Images/Web_Photos/Asian/48.jpeg";
import Img50 from "../Images/Web_Photos/Asian/50.jpeg";
import Img52 from "../Images/Web_Photos/Asian/52.jpeg";
import Img53 from "../Images/Web_Photos/Asian/53.jpeg";
import Img55 from "../Images/Web_Photos/Asian/55.jpeg";
import Img58 from "../Images/Web_Photos/Asian/58.jpeg";
import Img59 from "../Images/Web_Photos/Asian/59.jpeg";
import Img61 from "../Images/Web_Photos/Asian/61.jpeg";
import Img63 from "../Images/Web_Photos/Asian/63.jpeg";
import Img66 from "../Images/Web_Photos/Asian/66.jpeg";
import Img67 from "../Images/Web_Photos/Asian/67.jpeg";
import Img68 from "../Images/Web_Photos/Asian/68.jpeg";
import Img69 from "../Images/Web_Photos/Asian/69.jpeg";
import Img70 from "../Images/Web_Photos/Asian/70.jpeg";
import Img78 from "../Images/Web_Photos/Asian/78.jpeg";
import Img100 from "../Images/Web_Photos/Navsahydri/100.jpeg";
import Img101 from "../Images/Web_Photos/Navsahydri/101.jpeg";
import Img103 from "../Images/Web_Photos/Navsahydri/103.jpeg";
import Img104 from "../Images/Web_Photos/Navsahydri/104.jpeg";
import Img105 from "../Images/Web_Photos/Navsahydri/105.jpeg";
import Img108 from "../Images/Web_Photos/Navsahydri/108.jpeg";
import Img109 from "../Images/Web_Photos/Navsahydri/109.jpeg";
import Img12 from "../Images/Web_Photos/Navsahydri/12.jpeg";
import Img84 from "../Images/Web_Photos/Navsahydri/84.jpeg";
import Img86 from "../Images/Web_Photos/Navsahydri/86.jpeg";
import Img90 from "../Images/Web_Photos/Navsahydri/90.jpeg";
import Img94 from "../Images/Web_Photos/Navsahydri/94.jpeg";
import Img98 from "../Images/Web_Photos/Navsahydri/98.jpeg";
import Img99 from "../Images/Web_Photos/Navsahydri/99.jpeg";



// Events 
import ev1 from "../Images/Events/1 (1).jpeg";
import ev10 from "../Images/Events/1 (10).jpeg";
import ev11 from "../Images/Events/1 (11).jpeg";
import ev12 from "../Images/Events/1 (12).jpeg";
import ev13 from "../Images/Events/1 (13).jpeg";
import ev14 from "../Images/Events/1 (14).jpeg";
import ev15 from "../Images/Events/1 (15).jpeg";
import ev16 from "../Images/Events/1 (16).jpeg";
import ev17 from "../Images/Events/1 (17).jpeg";
import ev18 from "../Images/Events/1 (18).jpeg";
import ev19 from "../Images/Events/1 (19).jpeg";
import ev20 from "../Images/Events/1 (21).jpeg";
import ev3 from "../Images/Events/1 (3).jpeg";
import ev4 from "../Images/Events/1 (4).jpeg";
import ev5 from "../Images/Events/1 (5).jpeg";
import ev6 from "../Images/Events/1 (6).jpeg";
import ev7 from "../Images/Events/1 (7).jpeg";
import ev8 from "../Images/Events/1 (8).jpeg";
import ev9 from "../Images/Events/1 (9).jpeg";

import ev21 from "../Images/Events/1 (22).jpeg";
import ev22 from "../Images/Events/1 (23).jpeg";
import ev23 from "../Images/Events/1 (24).jpeg";
import ev24 from "../Images/Events/1 (25).jpeg";
import ev25 from "../Images/Events/1 (26).jpeg";
import ev26 from "../Images/Events/1 (27).jpeg";
import ev27 from "../Images/Events/1 (28).jpeg";
import ev28 from "../Images/Events/1 (29).jpeg";
import ev29 from "../Images/Events/1 (30).jpeg";

import ev30 from "../Images/Events/1 (31).jpeg";
import ev31 from "../Images/Events/1 (32).jpeg";
import ev32 from "../Images/Events/1 (33).jpeg";
import ev33 from "../Images/Events/1 (34).jpeg";
import ev34 from "../Images/Events/1 (35).jpeg";
import ev35 from "../Images/Events/1 (36).jpeg";
import ev36 from "../Images/Events/1 (37).jpeg";
import ev37 from "../Images/Events/1 (38).jpeg";
import ev38 from "../Images/Events/1 (39).jpeg";
import ev39 from "../Images/Events/1 (40).jpeg";



function Slider() {
  const navigate = useNavigate();

  // Data for locations with images
  const locations = [
    {
      title: "Events",
      images: [
        //Akola 
        { src: ev1, id: 13 },
        { src: ev3, id: 17 },
        { src: ev4, id: 18 },
        { src: ev5, id: 20 },
        { src: ev6, id: 21 },
        { src: ev7, id: 22 },
        { src: ev8, id: 23 },
        { src: ev9, id: 24 },
        { src: ev10, id: 19 },

        // Pune 
        { src: ev11,  id: 1 },
        { src: ev12, id: 16 },
        { src: ev13, id: 14 },
        { src: ev14, id: 15 },

        // More Images 
        { src: ev15, id: 2 },
        { src: ev16, id: 2 },
        { src: ev17, id: 2 },
        { src: ev18, id: 2 },
        { src: ev19, id: 2 },
        // { src: ev20, id: 2 },

        // { src: ev21, id: 2 },
        { src: ev22, id: 2 },
        { src: ev23, id: 2 },
        { src: ev24, id: 2 },
        { src: ev25, id: 2 },
        { src: ev26, id: 2 },
        { src: ev27, id: 2 },
        // { src: ev28, id: 2 },
        // { src: ev29, id: 2 },

        // { src: ev30, id: 2 },
        // { src: ev31, id: 2 },
        // { src: ev32, id: 2 },
        // { src: ev33, id: 2 },
        { src: ev34, id: 2 },
        { src: ev35, id: 2 },
        { src: ev36, id: 2 },
        { src: ev37, id: 2 },
        // { src: ev38, id: 2 },
        // { src: ev39, id: 2 },

      ],
    },


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

    {
      title: "Asian College of Pharmacy",
      images: [
        { src: Img35, id: 16 },
        { src: Img29, id: 17 },
        { src: Img36, id: 18 },
        { src: Img37, id: 18 },
        { src: Img39, id: 18 },
        { src: Img42, id: 18 },
        { src: Img44, id: 18 },
        { src: Img45, id: 18 },
        { src: Img48, id: 18 },
        { src: Img50, id: 18 },
        { src: Img52, id: 18 },
        { src: Img53, id: 18 },
        { src: Img55, id: 18 },
        { src: Img58, id: 18 },
        { src: Img59, id: 18 },
        { src: Img61, id: 18 },
        { src: Img63, id: 18 },
        { src: Img66, id: 18 },
        { src: Img67, id: 18 },
        { src: Img68, id: 18 },
        { src: Img69, id: 18 },
        { src: Img70, id: 18 },
        { src: Img78, id: 18 },


      ],
    },

    {
      title: "Navsahydri Institute of Pharmacy ",
      images: [
        { src: Img12, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img105, id: 18 },
        { src: Img108, id: 18 },
        { src: Img109, id: 18 },

      ],
    },

    {
      title: "Manav College Of Engineering, Akola ",
      images: [
        { src: Img109, id: 18 },
        { src: Img12, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img108, id: 18 },
        { src: Img105, id: 18 },

      ],
    },

    {
      title: "Shankarlal Khandelwal, Akola ",
      images: [
        { src: Img100, id: 18 },

        { src: Img12, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img105, id: 18 },
        { src: Img108, id: 18 },
        { src: Img109, id: 18 },

      ],
    },

    {
      title: "G.S. College, Khamgaon",
      images: [
        // { src: Img12, id: 11 },
        // { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img105, id: 18 },
        { src: Img108, id: 18 },
        { src: Img109, id: 18 },

      ],
    },

    {
      title: "Shree Goraksha College of Pharmacy and Research Center, Aurangabad",
      images: [
        { src: Img104, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img108, id: 18 },
        { src: Img105, id: 18 },
        { src: Img12, id: 18 },
        { src: Img109, id: 18 },

      ],
    },

    {
      title: "D Y Patil Talegoan, with Devcons placement",
      images: [
        { src: Img99, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img12, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img105, id: 18 },
        { src: Img108, id: 18 },
        { src: Img109, id: 18 },

      ],
    },

    {
      title: "Genba Sopanrao Moze College of Engineering Balewadi, Pune ",
      images: [
        { src: Img17, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img105, id: 18 },
        { src: Img108, id: 18 },
        { src: Img109, id: 18 },

      ],
    },

    {
      title: "Pankaj Laddhad Institute of Technology and Management Studies- [PLITMS], Buldhana",
      images: [
        { src: Img18, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img105, id: 18 },
        { src: Img108, id: 18 },
        { src: Img109, id: 18 },

      ],
    },

    {
      title: "Mahatma Gandhi Pharmacy, Nashik ",
      images: [
        { src: Img2, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img105, id: 18 },
        { src: Img108, id: 18 },
        { src: Img109, id: 18 },

      ],
    },

    {
      title: "Sangli Pharmacy",
      images: [
        { src: Img19, id: 11 },
        { src: Img84, id: 16 },
        { src: Img86, id: 17 },
        { src: Img90, id: 18 },
        { src: Img94, id: 18 },
        { src: Img98, id: 18 },
        { src: Img99, id: 18 },
        { src: Img100, id: 18 },
        { src: Img101, id: 18 },
        { src: Img103, id: 18 },
        { src: Img104, id: 18 },
        { src: Img105, id: 18 },
        { src: Img108, id: 18 },
        { src: Img109, id: 18 },

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
    <div key={index} className={styles.imageWrapper} onClick={() => handleImageClick(location)}>
      <img src={location.images[0].src} alt={location.title} className={styles.image} />
      <div className={styles.imageTitle}>{location.title}</div>
    </div>
  ))}
</div>

  );
}

export default Slider;
