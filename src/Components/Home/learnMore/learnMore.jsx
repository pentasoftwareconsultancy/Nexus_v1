import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Tearms from '../../Terms/Terms';
import styles from './LearnMore.module.css';

function LearnMore() {
  const location = useLocation();
  const { course } = location.state;

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.learnMoreContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img src={course.imageUrl} alt={course.title} className={styles.heroImage} />
        <h1 className={styles.heroTitle}>{course.title}</h1>
      </section>

      {/* Main Content - Split into Two Columns */}
      <div className={styles.content}>
        {/* Left Column - Course Details */}
        <div className={styles.detailsColumn}>
          <div className={styles.header}>
            <h1 className={styles.title}>About {course.title}</h1>
          </div>
          <p><strong>Course Name:</strong> {course.title}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Start Date:</strong> {course.date}</p>
          <p><strong>Skill Level:</strong> {course.skillTitle}</p>
          <img src={course.imageUrl} className={styles.image}/>
          <p><strong>Stars:</strong> {course.stars}</p>
          <p><strong>Syllabus:</strong> {course.syllabus}</p>
          <p><strong>instructor:</strong> {course.instructor}</p>


          {/* Additional Course Details */}
          <section className={styles.additionalInfoSection}>
            <h2 className={styles.additionalInfoTitle}>What You'll Learn</h2>
            <ul className={styles.learningPoints}>
              <li>{course.skillTitle}</li>
              <li>{course.learningPoint1}</li>
              <li>{course.learningPoint2}</li>
              <li>{course.learningPoint3}</li>
            </ul>
          </section>

          <section className={styles.additionalInfoSection}>
            <h2 className={styles.additionalInfoTitle}>keyfeatures</h2>
            <ul className={styles.learningPoints}>
              <li>{course.keyfeatures}</li>
              <li>{course.learningPoint1}</li>
              <li>{course.learningPoint2}</li>
              <li>{course.learningPoint3}</li>
            </ul>
          </section>

        </div>

        {/* Right Column - Sticky Fee Structure */}
        <div className={styles.feeColumn}>
          <div className={styles.sticky}>
            <h2>Fee Structure</h2>
            <p><strong>Instructor:</strong> {course.instructor }</p>
            <p><strong>Fees:</strong> {course.fees} </p>
            <p><strong>Contact:</strong> {course.contact }</p>
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <Tearms />

    </div>
  );
}

export default LearnMore;
