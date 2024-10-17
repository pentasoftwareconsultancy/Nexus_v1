import styles from './FeedbackCard.module.css';

const FeedbackCard = () => {
  // Dummy data
  const students = [
    {
      image: 'https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg',
      name: 'John Doe',
      feedback: 'This course was amazing!',
      company: 'Devcon Software',
      package: '10 LPA',
      achievements: 'Top Performer',
      skills: 'React, Node.js',
    },
    {
      image: 'https://via.placeholder.com/100',
      name: 'Jane Smith',
      feedback: 'I learned so much in this program!',
      company: 'Tech Solutions',
      package: '12 LPA',
      achievements: 'Best Project Award',
      skills: 'JavaScript, CSS',
    },
    {
      image: 'https://via.placeholder.com/100',
      name: 'Sam Wilson',
      feedback: 'Great instructors and materials!',
      company: 'Innovatech',
      package: '11 LPA',
      achievements: 'Certificate of Excellence',
      skills: 'HTML, Java',
    },
    {
      image: 'https://via.placeholder.com/100',
      name: 'Lisa Ray',
      feedback: 'Fantastic learning experience!',
      company: 'WebCorp',
      package: '15 LPA',
      achievements: 'Scholarship Recipient',
      skills: 'Python, AI',
    },
    {
      image: 'https://via.placeholder.com/100',
      name: 'Tom Brown',
      feedback: 'I feel prepared for my career!',
      company: 'Future Tech',
      package: '14 LPA',
      achievements: 'Intern of the Month',
      skills: 'SQL, Cloud Computing',
    },
    {
      image: 'https://via.placeholder.com/100',
      name: 'Sara Connor',
      feedback: 'Invaluable skills gained!',
      company: 'Data Dynamics',
      package: '13 LPA',
      achievements: 'Hackathon Winner',
      skills: 'Data Science, ML',
    },
  ];

  return (
    <div className={styles.cardContainer}>
      {students.map((student, index) => (
        <div key={index} className={styles.card}>
          <img src={student.image} alt={student.name} className={styles.studentImage} />
          <div className={styles.cardContent}>
            <h2 className={styles.studentName}>{student.name}</h2>
            {/* <p className={styles.feedback}>"{student.feedback}"</p> */}
            <div className={styles.additionalInfo}>
              <p><strong>Placement Company:</strong> {student.company}</p>
              <p><strong>Package:</strong> {student.package}</p>
            </div>
            <div className={styles.highlights}>
              <p><strong>Achievements:</strong> {student.achievements}</p>
              <p><strong>Special Skills:</strong> {student.skills}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
