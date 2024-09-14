import styles from "./Footer.module.css";
import footerImg from "./Images/pexels-iliescu-victor-95204-306198.jpg";
import logo from "./Images/nexus-updated logo.webp"; // Import your logo

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
            <p>
              Nexus - Corporate Training Center is leading IT Training service
              provider mainly provide training of latest technology with real
              time experience. Get connect with us for more details.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Quick Link</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">404</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.footerCredit}>
        <p style={{ textAlign: "center" }}>
          © 2023 Influenca Template - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
