import { Helmet } from "react-helmet";
import UpcomingBatches from "../Home/UpcomingBatches/UpcomingBatches";
import WhyJoin from "../Home/WhyJoin/WhyJoin";
import Terms from "../Terms/Terms";
import styles from "./Batches.module.css";


const courses = [
   
  {
    title: "AI Develpoer",
    description: "This is a description for Course 2.",
    duration: "8 weeks",
    date: "2024-11-01",
    imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg", // Example image URL
    // trending: "Trending",
    stars: "★★★★☆", // Example star rating
    skillTitle: "Advanced Skills",
  },
  {
    title: "Java Developer",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg", // Example image URL
    // trending: "Trending",
    stars: "★★★☆☆", // Example star rating
    skillTitle: "Beginner Skills",
  },

  {
    title: "Advance Power BI",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: "https://imgcdn.stablediffusionweb.com/2024/2/28/64f23186-ec94-4291-885b-3c0f433877df.jpg", // Example image URL
    // trending: "Trending",
    stars: "★★★☆☆", // Example star rating
    skillTitle: "Beginner Skills",
  },
  {
    title: "Course 4",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    // trending: "Trending",
    stars: "★★★☆☆", // Example star rating
    skillTitle: "Beginner Skills",
  },
  {
    title: "Course 5",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    // trending: "Trending",
    stars: "★★★☆☆", // Example star rating
    skillTitle: "Beginner Skills",
  },
  {
    title: "Course 6",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    // trending: "Trending",
    stars: "★★★☆☆", // Example star rating
    skillTitle: "Beginner Skills",
  },
  {
    title: "Course 7",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    // trending: "Trending",
    stars: "★★★☆☆", // Example star rating
    skillTitle: "Beginner Skills",
  },
  {
    title: "Course 8",
    description: "This is a description for Course 3.",
    duration: "12 weeks",
    date: "2024-12-01",
    imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg", // Example image URL
    // trending: "Trending",
    stars: "★★★☆☆", // Example star rating
    skillTitle: "Beginner Skills",
  }
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
        src="https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/3c75b5e7-3268-4c80-bef1-7422a2e54976/Cinematic_Kino_dark_black_ai_images_for_technology_in_website_1.jpg"
        alt="Hero"
        className={styles.heroImage}
        />

        <span className={styles.heroTitle}>Upcoming Batches </span>

      </section>

      
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
              <div className={styles.btnLearn}>Learn More</div>
              <div className={styles.btn}>Book Demo</div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
  )
}

export default Batches
