// Team Page
import { Helmet } from "react-helmet";
import teamData from "../About/teamdata";
import Course from "../Home/Course/Course";
import UpcomingBatches from "../Home/UpcomingBatches/UpcomingBatches";
import WhyJoin from "../Home/WhyJoin/WhyJoin";
import Terms from "../Terms/Terms";
import styles from "./Batches.module.css";
import Img from "./image/courses.jpg";


function Batches() {
  return (
    <div>
      <Helmet>
        <title>
          best IT courses for beginners-Data science, AWS, Power BI
        </title>
        <meta
          name="description"
          content="best IT courses for beginners providers offer short-term online courses designed to help professionals in India enhance their skills. "
        />
        <meta name="keywords" content="best IT courses for beginners" />
      </Helmet>

      <section className={styles.heroSection}>
        <img
          src={Img}
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
          {teamData.map((course, index) => (
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