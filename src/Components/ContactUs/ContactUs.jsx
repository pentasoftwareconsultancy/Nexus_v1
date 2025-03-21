import styles from "./ContactUs.module.css";
import LeafletMap from "./LeafletMap/LeafletMap";
import { Helmet } from "react-helmet";
import Img from "./image/contactUs.jpg";


const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Nexus Corporate Training Center - Contact</title>
        <meta name="description" content="Know more about Nexus" />
        <meta name="keywords" content="Nexus" />
      </Helmet>

      <section className={styles.heroSection}>
        <img
          src={Img}
          alt="Hero"
          className={styles.heroImage}
        />
        <h1 className={styles.heroTitle}>Contact Us</h1>
      </section>

      <div className={styles.contactSection}>
        <div className={styles.contactCol}>
          <h3>
            Know More About Ne<span className={styles.logox}>X</span>us
          </h3>
          <span>
            Nexus Corporate Training Institute is the most innovative Training
            center and providing best Software course in Pune with placement
          </span>
          <ul>
            <li>
              <span>Mail ID:</span>
              <a href="mailto:contact@Nexus-CTC-LLP">nexusctc2020@gmail.com</a>
            </li>
            <li>
              <span>Contact Us:</span> +91 9112100663
            </li>
            <li>
              <span>Address:</span>
              <p>
                <i>A] Pune Address: </i> Office No. 4-B, Second Floor, Ganesham
                Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple
                Saudagar, Pune- 411027
              </p>

              <p>
                <i>B] Nashik Address :</i> Amideep Apartment Amideep Apartment,
                Parab Nagar, Nashik, Maharashtra 422006
              </p>

              <p>
                <i>C] Akola Address :</i>Lotus Green Address: Geeta Nagar, Dahigaon Gawande,
               Akola, Maharashtra 444002
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <div className={styles.formContainer}>
            <h3>
              Send Message to the Ne<span className={styles.logox}>X</span>us
            </h3>
            <form>
              <label>Your Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />

              <label>Your Mobile Number:</label>
              <input
                type="number"
                name="mobile"
                placeholder="Enter Mobile Number"
                required
              />

              <label>Your Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email ID"
                required
              />

              <label>Your Course:</label>
              <input
                type="text"
                name="course"
                placeholder="Enter Your Course"
                required
              />

              <label>Write Your Message Here:</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Enter Message"
                required
              />

              <button type="submit" className="btn dark-btn">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <LeafletMap />
    </>
  );
};

export default ContactUs;
