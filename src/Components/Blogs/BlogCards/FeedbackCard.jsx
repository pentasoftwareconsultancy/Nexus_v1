import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import students from '../stydentsData';
import styles from './FeedbackCard.module.css';


const FeedbackCard = () => {
  const navigate = useNavigate(); // Initialize useNavigate


  // Handle click to navigate to the detailed blog page
  const handleCardClick = (id) => {
    navigate(`/BlogDetaills/${id}`); // Navigate to the student's detailed page
  };

  return (
    <div className={styles.cardContainer}>
      <Helmet>
        <title>Nexus Corporate Training Center - Success Stories And Placements</title>
        <meta name="description" content="Know more about Nexus " />
        <meta name="keywords" content="Nexus" />
      </Helmet>
      {students.map((student, index) => (
        <div
          key={index}
          className={styles.card}
          onClick={() => handleCardClick(student.id)} // Add onClick handler here
        >
          <img src={student.image} alt={student.name} className={styles.studentImage} />
          <div className={styles.cardContent}>
            <h2 className={styles.studentName}>{student.name}</h2>

            <p className={styles.studentRole}>{student.role}</p>
            <div className={styles.additionalInfo}>
              <p><strong>Placed At:</strong> {student.company}</p>
              <p><strong>Package:</strong> {student.package}</p>
            </div>
            <div className={styles.highlights}>
              <p><strong>Achievements:</strong> {student.achievements}</p>
              <p><strong>Special Skills:</strong> {student.skills}</p>
              {/* <p className={styles.feedback}>{student.feedback1}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
