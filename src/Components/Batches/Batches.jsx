// Team Page
import { Helmet } from "react-helmet";
import teamData from "../About/teamdata";
import Course from "../Home/Course/Course";
import UpcomingBatches from "../Home/UpcomingBatches/UpcomingBatches";
import WhyJoin from "../Home/WhyJoin/WhyJoin";
import Terms from "../Terms/Terms";
import styles from "./Batches.module.css";


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
