import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import courses from "../../../data"; // Adjust the path based on your project structure
import styles from "./Course.module.css";

function Course() {
  const navigate = useNavigate();

  // Function to handle button click
  const handleLearnMoreClick = (course) => {
    navigate("/learnMore", { state: { course } });
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Nexus Corporate Training Center - Home | Courses </title>
        <meta
          name="description"
          content="Nexus Corporate Training Institute, a leading online IT course and certification provider, offers professional training across India. Advance your career today!"
        />
        <meta
          name="keywords"
          content="Best Software training institute in Pune with placement"
        />
      </Helmet>

<<<<<<< HEAD
      <h1>We Offer the Following Courses</h1>
      <p>Explore our industry-leading IT training courses at Nexus Corporate Training Institute. From beginners to professionals, our comprehensive, short-term courses in software development, data science, AI, and more empower learners across India to advance their skills and secure high-demand roles. Join Nexus, a trusted training provider with a strong track record in placement success.</p>
=======
      <h2>We Offer the Following Courses</h2>
      <p>Best Software training institute in pune and certification provider offers professional training across India. Advance your career today!</p>
>>>>>>> b669fb7cbc9ae34b79e7fb593de194212776912b
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
