// Team Page 
import { Helmet } from "react-helmet";
import Course from "../Home/Course/Course";
import UpcomingBatches from "../Home/UpcomingBatches/UpcomingBatches";
import WhyJoin from "../Home/WhyJoin/WhyJoin";
import Terms from "../Terms/Terms";
import styles from "./Batches.module.css";


const courses = [
  {
    title: "Rajiv Khade",
    description: "This is a description ",
    duration: "8 weeks",
    date: "2024-11-01",
    imageUrl:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg", // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "",
  },
  {
    title: "Aditi Khade",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg", // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "",
  },

  {
    title: "Sagar Solanke ",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl:
      "https://imgcdn.stablediffusionweb.com/2024/2/28/64f23186-ec94-4291-885b-3c0f433877df.jpg", // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "Digital Marketing ",
  },
  {
    title: "Bhagyshree Patil ",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
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
    imageUrl:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "AWS ",
  },
  {
    title: "Vikas Gadge",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "Power BI ",
  },
  {
    title: "Abhijit Sir",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg", // Example image URL
    // trending: "Trending",
    stars: "★★★★★", // Example star rating
    skillTitle: "Testing",
  },
  {
    title: "Vaibhav Jadhav",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl:
      "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg", // Example image URL
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
        <meta
          name="description"
          content="Know more about Nexus "
        />
        <meta
          name="keywords"
          content="Nexus"
        />
      </Helmet>

      <section className= {styles.heroSection}>
        <img
        src="https://www.newjobs.ai/assets/front/img/Data_Science.jpg"
        alt="Hero"
        className={styles.heroImage}
        />

        <span className={styles.heroTitle}> Our Courses </span>

      </section>
        <Course />

        <UpcomingBatches />

        <Terms/>

        <WhyJoin />
      
      
      {/* Our Team Section */}
      <div className={styles.container}>
      <h1>Our Team</h1>
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
            <h1 className={styles.courseTitle}>{course.title}</h1>
            <div className={styles.stars}>{course.stars}</div>
            <div className={styles.skillTitle}>{course.skillTitle}</div>
            <p className={styles.courseDescription}>{course.description}</p>
            <div className={styles.buttonContainer}>
          
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
  )
}

export default Batches;
