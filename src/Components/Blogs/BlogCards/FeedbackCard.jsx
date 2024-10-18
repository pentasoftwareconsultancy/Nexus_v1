import styles from './FeedbackCard.module.css';

const FeedbackCard = () => {
  // Dummy data
  const students = [
    {
      image: 'https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg',
      name: 'John Doe',
      role:'Java Devloper',
      course:'AWS',
      feedback: 'This course was amazing!',
      company: 'Devcon Software',
      package: '10 LPA',
      achievements: 'Top Performer',
      skills: 'React, Node.js',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslgCuD5qWrnfLWGVjh0yuPIQxU6G3g8HV8Q&s',
      name: 'Jane Smith',
      role:'AWS Devloper',
      course:'AWS',
      feedback: 'I learned so much in this program!',
      company: 'Tech Solutions',
      package: '12 LPA',
      achievements: 'Best Project Award',
      skills: 'JavaScript, CSS',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywJMP3T99Mfu157cFv5giP7ajIG1rX7Z0rFcB3GPMfXYnO2tszf1I2sLUyCU8M6h4EPc&usqp=CAU',
      name: 'Sam Wilson',
      role:'Power BI ',
      course:'AWS',
      feedback: 'Great instructors and materials!',
      company: 'Innovatech',
      package: '11 LPA',
      achievements: 'Certificate of Excellence',
      skills: 'HTML, Java',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvAXCAS5n2ANb2LQSpLR9jh0lUpOSqa72JuuXpRvISKRHIjQNBs4A-UbX3YwrAqVE9uE&usqp=CAU',
      name: 'Lisa Ray',
      role:'Software Tester',
      feedback: 'Fantastic learning experience!',
      company: 'WebCorp',
      package: '15 LPA',
      achievements: 'Scholarship Recipient',
      skills: 'Python, AI',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_uKVbBGYCfxZv1jIUbtlm_p9P4GekrrNMm0HGZHs7jOlDLADBNZjvALKAMIxFWIvL3U&usqp=CAU',
      name: 'Tom Brown',
      role:'Java Devloper',
      feedback: 'I feel prepared for my career!',
      company: 'Future Tech',
      package: '14 LPA',
      achievements: 'Intern of the Month',
      skills: 'SQL, Cloud Computing',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxr6KdTTQRVDkFnwS4LEuwKLsShaZ-IHjkzRiww0pdCb5lx-KYRMb0FvTbkT4RTRGipE&usqp=CAU',
      name: 'Sara Connor',
      role:'Web Devloper',
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
            <p className={styles.studentRole}>{student.role}</p>
            <div className={styles.additionalInfo}>
              <p><strong>Placed At:</strong> {student.company}</p>
              <p><strong>Package:</strong> {student.package}</p>
            </div>
            <div className={styles.highlights}>
              <p><strong>Achievements:</strong> {student.achievements}</p>
              <p><strong>Special Skills:</strong> {student.skills}</p>
              <p className={styles.feedback}>{student.feedback}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
