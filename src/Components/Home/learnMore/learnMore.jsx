import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./LearnMore.module.css";

function LearnMore() {
  const location = useLocation();
  const { course } = location.state;

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.learnMoreContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <img src={course.imageUrl} alt={course.title} className={styles.heroImage} />
          <h1 className={styles.heroTitle}>{course.title}</h1>
        </section>

        {/* About the Course Section */}
        <div className={styles.header}> 
          <h1 className={styles.title}>About {course.title}</h1>
        </div>

        <div className={styles.card}>
          <p><strong>Course Name:</strong> {course.title}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Start Date:</strong> {course.date}</p>
          <p><strong>Skill Level:</strong> {course.skillTitle}</p>
          <p><strong>Stars:</strong> {course.stars}</p>
          <p><strong>syllabus:</strong> {course.syllabus}</p>
          <p><strong>key Features:</strong> {course.keyfeatures}</p>

         

          {/* Conditionally render these fields */}
          <p><strong>Instructor:</strong> {course.instructor ? course.instructor : "Not available"}</p>
          <p><strong>Fees:</strong> {course.fees ? course.fees : "Not available"}</p>
          <p><strong>Contact:</strong> {course.contact ? course.contact : "Not available"}</p>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Ready to take the next step in your {course.skillTitle} journey?
          </p>
          {/* <button className={styles.enrollButton}>Enroll Now</button>  */}
        </div>

        {/* Additional Course Details Section */}
        <section className={styles.additionalInfoSection}>
          <h2 className={styles.additionalInfoTitle}>What You'll Learn</h2>
          <ul className={styles.learningPoints}>
            <li>{course.learningPoint1}</li>
            <li>{course.learningPoint2}</li>
            <li>{course.learningPoint3}</li>
          </ul>
        </section>
        <section className={styles.additionalInfoSection}>
          <h2 className={styles.additionalInfoTitle}>keyfeatures about {course.title}</h2>
          <ul className={styles.learningPoints}>
            <li>{course.keyfeatures}</li>
            <li>{course.keyfeatures}</li>
            <li>{course.keyfeatures}</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default LearnMore;
