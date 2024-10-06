import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styles from "./CourseDetails.module.css";

function CourseDetails() {
  
  const location = useLocation();
  const { course } = location.state;

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Course Details</h1>
      <div className={styles.card}>
        <p><strong>Course Name:</strong> {course.name}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Date:</strong> {course.date}</p>
        <p><strong>Slot:</strong> {course.slot}</p>
        <p><strong>Payment:</strong> {course.payment}</p>
      </div>
    </div>
  );
}

export default CourseDetails;
