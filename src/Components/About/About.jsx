// src/path/to/About.js
import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyJoin from "../../Components/Home/WhyJoin/WhyJoin";
import Review from "../Review/Review";
import styles from "./About.module.css"; // Importing the CSS module
import teamData from "./teamdata"; // Import the team data from the new file

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Helmet>
        <title>
          About Us : Top Training Institute with 100 % job placement | Nexus CTC{" "}
        </title>
        <meta
          name="description"
          content="About Us : Top Training Institute with 100 % job placement | Nexus CTC , 
          Nexus Corporate Training Institute is the most innovative Training center and providing best Software course in Pune with placement"
        />
        <meta
          name="keywords"
          content="IT training institute in Pune , specialized courses, hands-on training, career support,
          Medical Coding-Software course in Pune with placement,
          Software course in Pune with placement "
        />
      </Helmet>

      {/* WhyJoin Sections */}
      <WhyJoin />

      {/* Review Sections */}
      <Review />
      {/* Our Team Section */}
      <div className={styles.container}>
        <h2>Our Team</h2>
        <div className={styles.courseList}>
          {teamData.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.cardImage}>
                <img src={course.imageUrl} alt={course.title} className={styles.cardImage} />
              </div>
              <h2 className={styles.courseTitle}>{course.title}</h2>
              <div className={styles.skillTitle}>Course Name: {course.skillTitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
