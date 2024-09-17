import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./LearnMore.module.css"; // Add your custom styles here

function LearnMore() {
  const location = useLocation();
  const { course } = location.state; // Get the course details from navigation

  return (
    <div className={styles.learnMoreContainer}>
      <h1 className={styles.title}>{course.title}</h1>
      <img src={course.imageUrl} alt={course.title} className={styles.courseImage} />
      <p>{course.description}</p>
      <div><strong>Duration:</strong> {course.duration}</div>
      <div><strong>Start Date:</strong> {course.date}</div>
      <div><strong>Skill Level:</strong> {course.skillTitle}</div>
    </div>
  );
}

export default LearnMore;
