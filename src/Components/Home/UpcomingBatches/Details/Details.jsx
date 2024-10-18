import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Details.module.css'; // Importing the CSS module

function Details() {
  // Access the location object to get the course data
  const location = useLocation();
  const course = location.state?.course;

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If no course is provided, handle this scenario
  if (!course) {
    return <div>No course details available.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Course Details</h1>
      <div className={styles.courseDetails}>
        <h2>{course.name}</h2>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Date:</strong> {course.date}</p>
        <p><strong>Slot:</strong> {course.slot}</p>
        <p><strong>Payment:</strong> {course.payment}</p>
      </div>
    </div>
  );
}

export default Details;
