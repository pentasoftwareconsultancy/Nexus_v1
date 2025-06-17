import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import courses from "../../../data"; // Adjust the path based on your project structure
import styles from "./Course.module.css";

function Course() {
  const navigate = useNavigate();

  // Function to handle button click
  const handleLearnMoreClick = (course) => {
    const courseName = course.title.replace(/\s+/g, "-").toLowerCase(); // Convert course title to URL-friendly format
    navigate(`/learnMore/${courseName}`, { state: { course } });
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Nexus Corporate Training Center - Home | Courses </title>
        <meta
          name="description"
          content="best IT courses for beginners providers offer short-term online courses designed to help professionals in India enhance their skills."
        />
        <meta
          name="keywords"
          content="best IT courses for beginners"
        />
      </Helmet>

      <h2>We Offer the Following Courses</h2>
      <p>Best Software training institute in Pune and certification provider offers professional training across India. Advance your career today!</p>
      <div className={styles.courseList}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <div className={styles.cardImage}>
              <img
                src={course.imageUrl}
                alt={course.title}
                className={styles.cardImage}
              />
              {course.trending && (
                <div className={styles.trendingText}>{course.trending}</div>
              )}
            </div>
            <h2 className={styles.courseTitle}>{course.title}</h2>
            <div className={styles.stars}>{course.stars}</div>
            <div className={styles.skillTitle}>
              {course.skillTitle1}
              {/* Add other skill titles if they exist */}
              {/* {course.skillTitle2} {course.skillTitle3} */}
            </div>
            <p className={styles.courseDescription}>{course.description}</p>

            <div className={styles.buttonContainer}>
              <button
                onClick={() => handleLearnMoreClick(course)}
                className={styles.btnLearn}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;