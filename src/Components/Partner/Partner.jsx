  import React from 'react';
import styles from './Partner.module.css'; // Import the CSS module

// Import local images
// import image1 from './Images/Access.jpeg';
import image2 from './Images/Cognizant.jpeg';
import image3 from './Images/Convergys.jpeg';
import image4 from './Images/Cordys.jpeg';
import image5 from './Images/Countrywide.jpeg';
import image6 from './Images/Cypress.jpeg';
import image7 from './Images/Dell.jpeg';
import image8 from './Images/Deloitte.jpeg';
import image9 from './Images/Google.jpeg';
import image10 from './Images/Infosys.jpeg';
import image11 from './Images/Keane.jpeg';
// import image12 from './Images/Honeywell.jpeg';
import image13 from './Images/Hsbc.jpeg';
// import image14 from './Images/Infotech.jpeg';
import image15 from './Images/Intergraphy.jpeg';
import image16 from './Images/Kanbay.jpeg';
import image17 from './Images/Mcgrawhill.jpeg';
import image18 from './Images/Mentor.jpeg';
import image19 from './Images/Microsoft.jpeg';
import image20 from './Images/Motorola.jpeg';
import image21 from './Images/Ncr.jpeg';
import image22 from './Images/Oracle.jpeg';
import image23 from './Images/Polaris.jpeg';
import image24 from './Images/Tcs.jpeg';
import image25 from './Images/Verizon.jpeg';
// import image26 from './Images/Wipro.jpeg';

function Partner() {
  const row1 = [
    // image1,
     image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11,
    //  image12,
      image13,
  ];

  const row2 = [
    // image14,
     image15, image16, image17, image18, image19,
    image20, image21, image22, image23, image24, image25,
    //  image26,
  ];

  return (
    <div className={styles.appContainer}>
      <div className={styles.wrapper}>
        {/* First Row */}

        <h1> Our Partner </h1>
        <div className={styles.marquee}>
          <div className={styles.marqueeGroup}>
            {row1.map((el, index) => (
              <div key={index} className={styles.imageGroup}>
                <img src={el} className={styles.image} alt={`Partner ${index}`} />
              </div>
            ))}
          </div>
          <div className={styles.marqueeGroup}>
            {row1.map((el, index) => (
              <div key={index} className={styles.imageGroup}>
                <img src={el} className={styles.image} alt={`Partner ${index}`} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Row */}
        <div className={styles.marquee}>
          <div className={styles.marqueeGroup2}>
            {row2.map((el, index) => (
              <div key={index} className={styles.imageGroup}>
                <img src={el} className={styles.image} alt={`Partner ${index}`} />
              </div>
            ))}
          </div>
          <div className={styles.marqueeGroup2}>
            {row2.map((el, index) => (
              <div key={index} className={styles.imageGroup}>
                <img src={el} className={styles.image} alt={`Partner ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Partner;
