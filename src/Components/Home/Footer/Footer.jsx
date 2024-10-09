import styles from "./Footer.module.css";
import logo from "./Images/nexus-updated logo.webp"; // Import your logo
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
            <p>
              Nexus - Corporate Training Center is leading IT Training service
              provider mainly provide training of latest technology with real
              time experience. Get connect with us for more details.
            </p>
          </div>
          <div className={styles.footerSection}>

            <h3>Navigation</h3>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/batches">Upcoming Batches</a></li>
            <li><a href="/contactUs">Contact Us</a></li>
            </ul>

          </div>

          <div className={styles.footerSection}>
            <h3>Quick Link</h3>
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
            <h3>Qucik Links </h3>
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
        <p style={{ textAlign: "center" }}>
          © 2024 Influenca Template - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
