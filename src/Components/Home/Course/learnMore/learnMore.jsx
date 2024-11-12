import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useLocation } from "react-router-dom";
import {
  FaBook,
  FaClock,
  FaPhoneSquareAlt,
  FaRupeeSign,
  FaUser,
} from "react-icons/fa";
import Tearms from "../../../Terms/Terms";
import styles from "./learnMore.module.css";

function LearnMore() {
  const { courseName } = useParams(); // Fetch course name from URL
  const location = useLocation();
  const { course } = location.state || {};

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return <p>No course information available.</p>;
  }

  return (
    <div className={styles.learnMoreContainer}>
      <Helmet>
        <title>{`Nexus Corporate Training Center - ${course.title}`}</title>
        <meta name="description" content={`${course.meta}`} />
        <meta name="keywords" content={`${course.keywords}`} />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <img
          src={course.imageUrl}
          alt={course.title}
          className={styles.heroImage}
        />
        <h1 className={styles.heroTitle}>{course.title}</h1>
      </section>

      {/* Main Content - Course Details */}
      <div className={styles.content}>
        <div className={styles.detailsColumn}>
          <h1>About {course.title}</h1>
          <p>{course.description}</p>

          <div className={styles.courseInfo}>
            <div>
              <FaBook className={styles.icon} /> <strong>Description:</strong>{" "}
              {course.description}
            </div>
            <div>
              <FaClock className={styles.icon} /> <strong>Duration:</strong>{" "}
              {course.duration}
            </div>
            <div>
              <FaUser className={styles.icon} /> <strong>Instructor:</strong>{" "}
              {course.instructor}
            </div>
          </div>

          {/* Syllabus Section */}
          <div className={styles.syllabus}>
            <FaUser className={styles.icon} /> <strong> Syllabus</strong>
            <ol>
              {course.syllabus && course.syllabus.length > 0 ? (
                course.syllabus.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}</strong>
                    {item.topics && item.topics.length > 0 && (
                      <ul>
                        {item.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))
              ) : (
                <li>No syllabus available.</li>
              )}
            </ol>
          </div>
          <section className={styles.additionalInfoSection}>
            <h2 className={styles.additionalInfoTitle}>What You'll Learn</h2>
            <ul className={styles.learningPoints}>
              <li>{course.learningPoint1}</li>
              <li>{course.learningPoint2}</li>
              <li>{course.learningPoint3}</li>
            </ul>
          </section>

          <section className={styles.additionalInfoSection}>
            <h2 className={styles.additionalInfoTitle}>Key Features</h2>
            <ul className={styles.learningPoints}>
              <li>{course.keyfeatures1}</li>
              <li>{course.keyfeatures2}</li>
              <li>{course.keyfeatures3}</li>
            </ul>
          </section>
        </div>

        {/* Right Column - Sticky Fee Structure */}
        <div className={styles.feeColumn}>
          <div className={styles.sticky}>
            <h2>Course Details</h2>
            <p>
              <FaUser className={styles.icon} /> <strong>Instructor:</strong>{" "}
              {course.instructor}
            </p>
            <p>
              <FaRupeeSign className={styles.icon} /> <strong>Fees:</strong>{" "}
              {course.fees}
            </p>
            <p>
              <FaPhoneSquareAlt className={styles.icon} />{" "}
              <strong>Contact:</strong> {course.contact}
            </p>
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <Tearms />
    </div>
  );
}

export default LearnMore;
