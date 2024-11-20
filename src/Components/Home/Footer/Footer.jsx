import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import courses from "../../../data"; // Import courses data
import styles from "./Footer.module.css";
import logo from "./Images/NctcLogo.png"; // Import your logo
import footerImg from "./Images/contact-us.jpg";

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle button click and navigate to the Learn More page with course data
  const handleRowClick = (course) => {
    const formattedCourseName = course.title
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .toLowerCase();
    navigate(`/learnMore/${formattedCourseName}`, { state: { course } });
  };

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
          <p>+91 9545450788 / +91 9545450677</p>
          <p>contact@Nexus-CTC-LLP</p>
          <p>
            Office No. 4-B, Second Floor, Ganesham Commercial -A, Survey No.
            21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027
          </p>
          <div className={styles.socialLinks}>
            <div className={styles.logo}>
              <a
                href="https://www.instagram.com/nexus_ctc/?next=%2Flivein.now%2Ftagged%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100092539515709"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className={styles.socialIcon} />
              </a>
              <a
                href="https://www.youtube.com/@NexusCorporateTrainingCentre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className={styles.socialIcon} />
              </a>
              <a
                href="https://www.linkedin.com/in/nexus-corporate-traninig-center-llp-03b14b277/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h2>
              <img src={logo} alt="Nexus Logo" className={styles.logoImage} />
            </h2>
            <p className={styles.para}>
              <span>
                <i>Address:</i>{" "}
              </span>
              Office No. 4-B, Second Floor, Ganesham Commercial -A, Survey No.
              21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3>Navigation</h3>
            <hr className={styles.hr} />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/successs-stories">Success Stories</a>
              </li>
              <li>
                <a href="/contactUs">Contact Us</a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdQWhOWPEKtydDpPq2tY6VCoghQOgU-kXzH6zZthggqek-sww/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Dynamic Course Links */}
          <div className={styles.footerSection}>
            <h3>Courses</h3>
            <hr className={styles.hr} />
            <div className={styles.courseGrid}>
              {courses.map((course, index) => (
                <button
                  key={index}
                  className={styles.courseLink}
                  onClick={() => handleRowClick(course)}
                >
                  {course.title}
                </button>
              ))}
            </div>
          </div>

        </div>
        
      </footer>
      <div className={styles.footerCredit}>
        <div>
          © {new Date().getFullYear()} Nexus Corporate Training Center - All
          Rights Reserved
        </div>
        <div className={styles.right}>
         Made By <a href="https://nexusctc.com" target="_blank" rel="noopener noreferrer">Nexusctc.com</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
