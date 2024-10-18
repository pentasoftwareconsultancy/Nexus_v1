import styles from './FeedbackSlider.module.css';

const FeedbackSlider = ({ feedbacks }) => {
  return (
    <div className={styles.sliderContainer}>
      {feedbacks.map((feedback, index) => (
        <div className={styles.feedbackCard} key={index}>
          <div className={styles.imageContainer}>
            <img src={feedback.image} alt={feedback.name} className={styles.feedbackImage} />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.studentName}>{feedback.name}</h3>
            <p className={styles.feedbackText}>{feedback.text}</p>
            <p className={styles.companyName}><strong>Company:</strong> {feedback.company}</p>
            <p className={styles.package}><strong>Package:</strong> {feedback.package}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackSlider;
