import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./ExamCard.module.css"; // Import your CSS

function ExamCard() {
  return (
    <div className={styles.card}>

      <Helmet>
        <title>Nexus Corporate Training Center- Exam </title>
        <meta
          name="description"
          content="Know more about Nexus "
        />
        <meta
          name="keywords"
          content="Nexus"
        />
      </Helmet>

      {/* Exam Title */}
      <div className={styles.title}>MERN Stack Internship Entrance Exam</div>

      {/* Exam Description */}
      <div className={styles.description}>
        This exam evaluates your foundational knowledge of the MERN stack (MongoDB, Express.js, React, and Node.js). It covers key concepts in full-stack web development, including backend API creation, frontend component design, database management, and application deployment. Successful candidates will demonstrate practical skills and understanding essential for a MERN stack internship role.
      </div>

      {/* Exam Education Level */}
      <div className={styles.education}>Education Level: Graduate</div>

      {/* Exam Timing */}
      <div className={styles.timing}>
        <div>Start Time: 10:00 AM</div>
        <div>End Time: 12:00 PM</div>
      </div>

      {/* Button to Start the Exam */}
      <Link to="/exam" onClick={() => localStorage.setItem("fullscreen", "true")}>
        <button className={styles.startButton}>Start Exam</button>
      </Link>
    </div>
  );
}

export default ExamCard;
