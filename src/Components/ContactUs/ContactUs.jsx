import styles from "./ContactUs.module.css";
import LeafletMap from './LeafletMap/LeafletMap';
import { Helmet } from "react-helmet";

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
          src="https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/10c58bd4-986f-4cb0-bb57-ec0e4985d14b/Leonardo_Kino_XL_dark_black_ai_images_for_technology_in_websit_1.jpg"
          alt="Hero"
          className={styles.heroImage}
        />
        <span className={styles.heroTitle}>Contact Us</span>
      </section>

      <div className={styles.contactSection}>
        <div className={styles.contactCol}>
        <h3>
           Know More About Ne<span className={styles.logox}>X</span>us
          </h3>
          <span>
            We are a team of skilled and experienced web developers dedicated to creating
            high-quality, responsive, and user-friendly websites for our clients. From
            responsive designs to robust backend systems, we leverage a diverse skill set
            to deliver tailored web solutions.
          </span>
          <ul>
            <li>
              <span>Mail ID:</span><a href="mailto:contact@Nexus-CTC-LLP">contact@Nexus-CTC-LLP</a>
            </li>
            <li>
              <span>Contact Us:</span> +91 9112100663
            </li>
            <li>
              <span>Address:</span>
               <p><i>A] Pune Address: </i> Office No. 4-B, Second Floor, Ganesham
              Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027</p>


             <p><i>B] Nashik Address :</i> Amideep Apartment
             Amideep Apartment, Parab Nagar, Nashik, Maharashtra 422006</p>
              
             <p><i>C] Amravati Address :</i>  Our Address Office No. 4-B, Second Floor, Ganesham
              Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027</p>

             <p><i>D] Nagpur Address :</i> Our Address Office No. 4-B, Second Floor, Ganesham
              Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027</p>
             <p><i>E] Akola Address :</i> Our Address Office No. 4-B, Second Floor, Ganesham
              Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027</p>
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
              <input type="text" name="name" placeholder="Enter Your Name" required />

              <label>Your Mobile Number:</label>
              <input
                type="number"
                name="mobile"
                placeholder="Enter Mobile Number"
                required
              />

              <label>Your Email:</label>
              <input type="email" name="email" placeholder="Enter Email ID" required />

              <label>Your Course:</label>
              <input type="text" name="course" placeholder="Enter Your Course" required />

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
