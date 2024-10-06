

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

        <div className={styles.content}>
          <div className={styles.details}>
            <p className={styles.description}>{course.description}</p>
            
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <strong>Duration:</strong> {course.duration}
              </div>
              <div className={styles.infoItem}>
                <strong>Start Date:</strong> {course.date}
              </div>
              <div className={styles.infoItem}>
                <strong>Skill Level:</strong> {course.skillTitle}
              </div>
              <div className={styles.infoItem}>
                <strong>Price:</strong> ${course.price}
              </div>
            </div>

            {/* Call to Action */}
            <div className={styles.ctaSection}>
              <p className={styles.ctaText}>
                Ready to take the next step in your {course.skillTitle} journey?
              </p>
              <button className={styles.enrollButton}>Enroll Now</button>
            </div>
          </div>
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
      </div>
    </>
  );
}

export default LearnMore;
