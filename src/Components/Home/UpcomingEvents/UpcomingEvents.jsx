import styles from "./UpcomingEvents.module.css";

function UpcomingEvents() {
  const courses = [
    {
      title: "New Marketing Course Release",
      description: "This is a description for Course 1.",

      date: "20th April",
    },
    {
      title: "Choose online Education",
      description: "This is a description for Course 2.",
      duration: "8 weeks",
      date: "2024-11-01",
    },
    {
      title: "Launch Party for a new Platform",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
    },
    // Add more courses as needed
  ];

  return (
    <div className={styles.container}>
      <h1>Upcoming Events</h1>
      <div className={styles.courseList}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <h2 className={styles.courseTitle}>{course.title}</h2>
            

            <p className={styles.courseDate}>Start Date: {course.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
