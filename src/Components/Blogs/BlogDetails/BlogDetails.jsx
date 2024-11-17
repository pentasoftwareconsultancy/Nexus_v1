import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../BlogDetails/BlogDetails.module.css";
import students from "../studentsData";

const BlogDetaills = () => {
  const { id } = useParams(); // Get id from URL
  const student = students.find(
    (student) => String(student.id) === id // Convert both to string for comparison
  );

  if (!student) {
    return <div>Student not found!</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{student.name}</h2>
      <img src={student.image} alt={student.name} className={styles.image} />

      <p className={styles.detail}>
        <strong>Role:</strong> {student.role}
      </p>
      <p className={styles.detail}>
        <strong>Company:</strong> {student.company}
      </p>
      <p className={styles.detail}>
        <strong>Package:</strong> {student.package}
      </p>
      <p className={styles.detail}>
        <strong>Course:</strong> {student.course}
      </p>

      <div className={styles.question}>
        <p>
          <strong>{student.Q1}</strong>
        </p>
        <span>{student.feedback1}</span>
        <p>
          <strong>
            <i>{student.detail}</i>
          </strong>
        </p>
        <p>
          <strong>{student.Q2}</strong>
        </p>
        <span>{student.feedback2}</span>
        <p>
          <strong>{student.Q3}</strong>
        </p>
        <span>{student.feedback3}</span>
        <p>
          <strong>{student.Q4}</strong>
        </p>
        <span>{student.feedback4}</span>
        <p>
          <strong>{student.Q5}</strong>
        </p>
        <span>{student.feedback5}</span>
      </div>
    </div>
  );
};

export default BlogDetaills;
