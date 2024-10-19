import styles from "./Footer.module.css";
// import logo from "./Images/nexus-updated logo.webp"; // Import your logo
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Example FontAwesome icons

import logo from "./Images/NctcLogo.png"; // Import your logo
import footerImg from "./Images/pexels-iliescu-victor-95204-306198.jpg";

const Footer = () => {
  return (
    <>
      <div className={styles.footerImg}>
        <div className={styles.blurWrapper}>
          <img
            src={footerImg}
            alt="Footer Background"
            className={styles.footerImage}
          />
        </div>
        <div className={styles.overlayText}>
          <p>Nexus - Corporate Training Center</p>
          <p> +91 9545450788 / +91 9545450677</p>
          <p> contact@Nexus-CTC-LLP</p>
          <p>
            Nexus - Corporate Training Center is leading IT Training service
            provider mainly provide training of latest technology with real time
            experience. Get connect with us for more details.
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h2>

              <img src={logo} alt="Nexus Logo" className={styles.logoImage} />
            </h2>
            <p className={styles.para}>
              Nexus - Corporate Training Center is leading IT Training service
              provider mainly provide training of latest technology with real
              time experience. Get connect with us for more details.
            </p>

            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/nexus_ctc/?next=%2Flivein.now%2Ftagged%2F" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092539515709" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className={styles.socialIcon} />
              </a>
              <a href="www.youtube.com/@NexusCorporateTrainingCentre" target="_blank" rel="noopener noreferrer">
                <FaYoutube className={styles.socialIcon} />
              </a>
              <a href="https://www.linkedin.com/in/nexus-corporate-traninig-center-llp-03b14b277/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className={styles.socialIcon} />
              </a>
            </div>
          </div>
          <div className={styles.footerSection}>

            <h3>Navigation</h3>
            <hr className={styles.hr} />

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/batches">Courses</a></li>
              <li><a href="/contactUs">Contact Us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contactUs">Contact Us</a></li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQWhOWPEKtydDpPq2tY6VCoghQOgU-kXzH6zZthggqek-sww/viewform" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </li>

            </ul>

          </div>

          <div className={styles.footerSection}>
            <h3>Courses</h3>
            <hr className={styles.hr} />
            <ul>
              <li>
                <a href="/batches">Software Testing </a>
              </li>
              <li>
                <a href="/batches">AWS</a>
              </li>
              <li>
                <a href="/batches">Power BI </a>
              </li>
              <li>
                <a href="/batches">Sales Force Adm/Dev </a>
              </li>
              <li>
                <a href="/batches">Data Science</a>
              </li>
              <li>
                <a href="/batches">Machine Learnig </a>
              </li>
              <li>
                <a href="/batches">Medical Coding and builling  </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Courses </h3>
            <hr className={styles.hr} />
            <ul>
              <li>
                <a href="/batches">Python</a>
              </li>
              <li>
                <a href="/batches">Java & ASP Dot Net </a>
              </li>
              <li>
                <a href="/batches">Business Analyst</a>
              </li>
              <li>
                <a href="/batches">Agile Methodology </a>
              </li>
              <li>
                <a href="/batches">Devops </a>
              </li>
              <li>
                <a href="/batches">AR caller/ RCM  </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className={styles.footerCredit}>
        <div>
          © {new Date().getFullYear()} Nexus Corporate Training Center - All Rights Reserved
        </div>
      
        <div className={styles.right}>Made By Nexus</div>
      </div>

    </>
  );
};

export default Footer;
