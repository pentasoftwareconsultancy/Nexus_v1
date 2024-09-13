import styles from './ExamPanel.module.css';

const ExamPanel = () => {
  return (
    <div className={styles.examPanel}>
      {/* Exam Title and Timer */}
      <div className={styles.header}>
        <div className={styles.title}>Enter Exam Title</div>
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
            <div className={styles.questionNumber}>Question 1:</div>
            <div className={styles.questionText}>
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
          Total Questions: 10
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
