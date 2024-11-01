// Team Page
import { Helmet } from "react-helmet";
import Course from "../Home/Course/Course";
import UpcomingBatches from "../Home/UpcomingBatches/UpcomingBatches";
import Img2 from "../Gallery/Images/Web_Photos/Team/Aditi Mam.jpeg";
import Img4 from "../Gallery/Images/Web_Photos/Team/Bhagyshree Mam.jpeg";
import Img1 from "../Gallery/Images/Web_Photos/Team/Sagar Sir.jpeg";
import Img3 from "../Gallery/Images/Web_Photos/Team/Vaibhav Jadav.jpeg";
import Img5 from "../Gallery/Images/Web_Photos/Team/Sumit Sir.jpeg";
import Img6 from "../Gallery/Images/Web_Photos/Team/Abhijit Kumar.webp";
import Img7 from "../Gallery/Images/Web_Photos/Team/Rajeev Khade.webp";
import WhyJoin from "../Home/WhyJoin/WhyJoin";
import Terms from "../Terms/Terms";
import styles from "./Batches.module.css";

const courses = [
  {
    title: "Rajiv Khade",
    description: "This is a description ",
    duration: "8 weeks",
    date: "2024-11-01",
    imageUrl: Img7, // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "",
  },
  {
    title: "Aditi Khade",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: Img2, // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "",
  },

  {
    title: "Sagar Solanke ",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: Img1, // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "Digital Marketing ",
  },
  {
    title: "Bhagyshree Patil ",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: Img4,
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "Medical Coding / Billing",
  },
  {
    title: "Rajiv Kumar ",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "AR Caller",
  },
  {
    title: "Lekhraj Patil ",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: Img5,
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "AWS ",
  },
  {
    title: "Abhijeet Kumar",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: Img6, // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "Software Testing",
  },
  {
    title: "vaibhav jadhav",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: Img3, // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "AR Caller RCM",
  },
];

function Batches() {
  return (
    <div>
      <Helmet>
        <title>Nexus Corporate Training Center - Batches </title>
        <meta name="description" content="Know more about Nexus " />
        <meta name="keywords" content="Nexus" />
      </Helmet>

      <section className={styles.heroSection}>
        <img
          src="https://www.newjobs.ai/assets/front/img/Data_Science.jpg"
          alt="Hero"
          className={styles.heroImage}
        />

        <h1 className={styles.heroTitle}> Our Courses </h1>
      </section>
      <Course />

      <UpcomingBatches />

      <Terms />

      <WhyJoin />

      {/* Our Team Section */}
      <div className={styles.container}>
        <h2>Our Team</h2>
        <div className={styles.courseList}>
          {courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.cardImage}>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className={styles.cardImage}
                />
                {/* <div className={styles.trendingText}>{course.trending}</div> */}
              </div>
              <h2 className={styles.courseTitle}>{course.title}</h2>
              <div className={styles.skillTitle}>{course.skillTitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Batches;
