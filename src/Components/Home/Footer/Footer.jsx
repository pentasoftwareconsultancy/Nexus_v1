import styles from "./Footer.module.css";
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
          <p>London Eye, London, UK</p>
          <p>+ (876) 765 685</p>
          <p>mail@influenca.ld</p>
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
            <h2>NEXUS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis elit
              tellus.
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
