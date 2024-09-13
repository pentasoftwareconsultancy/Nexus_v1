import React, { useState } from 'react';
import styles from './ExamPanel.module.css';

const ExamPanel = () => {
  // State to keep track of the selected question number
  const [selectedQuestion, setSelectedQuestion] = useState(1);

  // Handle click on question number
  const handleQuestionClick = (questionNumber) => {
    setSelectedQuestion(questionNumber);
  };

  return (
    <div className={styles.examPanel}>
      {/* Exam Title and Timer */}
      <div className={styles.header}>
        <div className={styles.title}>Enter Exam</div>
        <div className={styles.timer}>Timer: 10:00</div>
      </div>

      {/* User Information */}
      <div className={styles.userInfo}>
        <div className={styles.userName}>User Name: John Doe</div>
        <div className={styles.userId}>User ID: 12345</div>
      </div>

      {/* Question and Options */}
      <div className={styles.mainContent}>
        <div className={styles.questionSection}>
          <div className={styles.questionHeader}>
            <div className={styles.questionNumber}>Question {selectedQuestion}:</div>
            <div className={styles.questionText}>
              {/* Sample question text based on selected question number */}
              What is the capital of France?
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.option}>A. Paris</div>
            <div className={styles.option}>B. Rome</div>
            <div className={styles.option}>C. Berlin</div>
            <div className={styles.option}>D. Madrid</div>
          </div>
        </div>
        <div className={styles.totalQuestions}>
          {/* Dynamic Question Numbers */}
          {Array.from({ length: 20 }, (_, index) => (
            <div
              key={index + 1}
              className={`${styles.questionNumberBox} ${
                selectedQuestion === index + 1 ? styles.selected : ''
              }`}
              onClick={() => handleQuestionClick(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className={styles.footer}>
        <button className={styles.navButton}>Previous</button>
        <button className={styles.navButton}>Next</button>
      </div>
    </div>
  );
};

export default ExamPanel;
