import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import students from "../studentsData";
import styles from "./FeedbackCard.module.css";

const FeedbackCard = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/BlogDetaills/${id}`); // Ensure the path matches your router setup
  };

  return (
    <div className={styles.cardContainer}>
      <Helmet>
        <title>
          Nexus Corporate Training Center - Success Stories And Placements
        </title>
        <meta name="description" content="Know more about Nexus" />
        <meta name="keywords" content="Nexus" />
      </Helmet>
      {students.map((student) => (
        <div
          key={student.id} // Use student.id directly
          className={styles.card}
          onClick={() => handleCardClick(student.id)} // Pass correct id
        >
          <img
            src={student.image}
            alt={student.name}
            className={styles.studentImage}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.studentName}>{student.name}</h2>
            <p className={styles.studentRole}>{student.role}</p>
            <div className={styles.additionalInfo}>
              <p>
                <strong>Placed At:</strong> {student.company}
              </p>
              <p>
                <strong>Package:</strong> {student.package}
              </p>
            </div>
            <div className={styles.highlights}>
              <p>
                <strong>Courses:</strong> {student.course}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
