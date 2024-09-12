import styles from "./Course.module.css";
import coursesImg2 from "./Images/Home_20240904_165412_0000.png";
import coursesImg3 from "./Images/Home_20240823_153805_0000.jpg";

function Course() {
  const courses = [
    {
      title: "MERN Stack",
      description: "This is a description for Course 1.",
      duration: "10 weeks",
      date: "2024-10-01",
      imageUrl: "https://codewave.com/insights/wp-content/uploads/2022/08/mern-stack-header-codewave.jpg", // Example image URL
      trending: "New",
      stars: "★★★★★", // Example star rating
      skillTitle: "Multiple Skills",
    },
    {
      title: "AI Develpoer",
      description: "This is a description for Course 2.",
      duration: "8 weeks",
      date: "2024-11-01",
      imageUrl: "https://s3.us-east-1.amazonaws.com/asugv5-assets/archive/uploads/images/main/_featureLarge/artificial-intelligence.jpg", // Example image URL
      trending: "Trending",
      stars: "★★★★☆", // Example star rating
      skillTitle: "Advanced Skills",
    },
    {
      title: "Java Developer",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://sourcebae.com/blog/wp-content/uploads/2023/08/top-ai-programming-languages.png", // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },

    {
      title: "Advance Power BI",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://www.spoclearn.com/blog/wp-content/uploads/2023/12/AI-and-Power-BI-A-Powerful-Combination-for-Data-Visualization.jpg", // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Python Developer",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://www.damcogroup.com/wp-content/uploads/2023/12/python-for-ai-and-ml.jpg", // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Medical Coding",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://pixelplex.io/wp-content/uploads/2021/01/artificial-intelligence-applications-in-healthcare-main-image-1600.jpg", // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: coursesImg3, // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: coursesImg3, // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: coursesImg3, // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: coursesImg3, // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: coursesImg3, // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: coursesImg3, // Example image URL
      trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>We Offer Following Courses</h1>
      <div className={styles.courseList}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <div className={styles.cardImage}>
              <img
                src={course.imageUrl}
                alt={course.title}
                className={styles.cardImage}
              />
              <div className={styles.trendingText}>{course.trending}</div>
            </div>
            <h2 className={styles.courseTitle}>{course.title}</h2>
            <div className={styles.stars}>{course.stars}</div>
            <div className={styles.skillTitle}>{course.skillTitle}</div>
            <p className={styles.courseDescription}>{course.description}</p>
            <div className={styles.buttonContainer}>
              <div className={styles.btnLearn}>Learn More</div>
              <div className={styles.btn}>Book Demo</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
