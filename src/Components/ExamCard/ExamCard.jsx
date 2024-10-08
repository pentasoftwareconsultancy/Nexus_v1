import { Link } from "react-router-dom";
import styles from "./ExamCard.module.css"; // Import your CSS

function ExamCard() {
  const examData = [
    {
      title: "MERN Stack Internship Entrance Exam",
      description:
        "This exam evaluates your foundational knowledge of the MERN stack (MongoDB, Express.js, React, and Node.js). It covers key concepts in full-stack web development, including backend API creation, frontend component design, database management, and application deployment. Successful candidates will demonstrate practical skills and understanding essential for a MERN stack internship role.",
      education: "Graduate",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
    },
    {
      title: "React Developer Challenge",
      description:
        "A test to evaluate your skills in building complex React applications, including state management and component lifecycle.",
      education: "Undergraduate",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
    },
    {
      title: "Node.js Advanced Exam",
      description:
        "Assess your knowledge in Node.js, including asynchronous programming, API development, and server management.",
      education: "Postgraduate",
      startTime: "4:00 PM",
      endTime: "6:00 PM",
    },
    {
      title: "Full Stack Development Test",
      description:
        "A comprehensive test covering both frontend and backend technologies, including project architecture, integration, and deployment.",
      education: "Graduate",
      startTime: "9:00 AM",
      endTime: "11:00 AM",
    },
    {
      title: "JavaScript Mastery Exam",
      description:
        "Evaluate your mastery of JavaScript, including ES6+ features, asynchronous programming, and modern frameworks.",
      education: "Undergraduate",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
    },
  ];

  return (
    <div className={styles.card}>
      {/* Exam Title */}
      <div className={styles.title}>MERN Stack Internship Entrance Exam</div>

      {/* Exam Description */}
      <div className={styles.description}>
        This exam evaluates your foundational knowledge of the MERN stack
        (MongoDB, Express.js, React, and Node.js). It covers key concepts in
        full-stack web development, including backend API creation, frontend
        component design, database management, and application deployment.
        Successful candidates will demonstrate practical skills and
        understanding essential for a MERN stack internship role.
      </div>

      {/* Exam Education Level */}
      <div className={styles.education}>Education Level: Graduate</div>

      {/* Exam Timing */}
      <div className={styles.timing}>
        <div>Start Time: 10:00 AM</div>
        <div>End Time: 12:00 PM</div>
      </div>

      {/* Button to Start the Exam */}
      <Link
        to="/exam"
        onClick={() => localStorage.setItem("fullscreen", "true")}
      >
        <button className={styles.startButton}>Start Exam</button>
      </Link>
    </div>
  );
}

export default ExamCard;
