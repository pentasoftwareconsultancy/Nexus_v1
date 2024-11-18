import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyJoin from "../../Components/Home/WhyJoin/WhyJoin";
import Review from "../Review/Review";
import styles from "./About.module.css";
import Img from "./Image/Mission.jpeg";
import teamData from "./teamdata";
import heroimg from "./Image/aboutus.jpg";
const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Helmet>
        <title>
          About Us : Top Training Institute with 100 % job placement | nexus CTC
        </title>
        <meta
          name="description"
          content="About Us : Top Training Institute with 100 % job placement | Nexus CTC , 
          Nexus Corporate Training Institute is the most innovative Training center and providing best Software course in Pune with placement"
        />
        <meta
          name="keywords"
          content="IT training institute in Pune , specialized courses, hands-on training, career support,
          Medical Coding-Software course in Pune with placement,
          Software course in Pune with placement | Best Software training institute in pune "
        />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src={heroimg}
          alt="AboutUsPage Hero image"
          className={styles.heroImage}
        />
        <h1 className={styles.heroTitle}>
         About Ne<span className={styles.logox}>X</span>us
        </h1>

      </section>

      {/* About Us Section */}
      <section className={styles.aboutUs}>
        <div>
          <h2 className={styles.headline}>About Us</h2>
        </div>
        <p>
          Nexus Corporate Training Center LLP is Pune’s most innovative IT no.1
          training institute, offering a wide range of specialized courses like
          Medical Coding, Power BI, AWS, Software Testing, AWS Administrator,
          Dev-Ops, Data Science, Full Stack Devloper, Big Data, AR Caller/RCM,
          Java, C# and .NET, Business Analyst, Sales Force Adm/Dev, SQL, Scrum
          Master, Digital Marketing and Soft Skills courese other software
          courses with placement assistance with live sessions. Our mission is
          to provide learners with industry-relevant skills through hands-on
          training, led by experienced IT instructors. We focus on delivering
          the best software courses in Pune (online and offline) with placement,
          ensuring our students are job-ready upon course completion. With a
          strong emphasis on practical knowledge, Nexus equips learners to excel
          in the competitive IT landscape and secure promising careers in top
          companies.
        </p>
      </section>

      {/* Vision, Mission, Values Section */}
     {/* Vision, Mission, Values Section */}
<section className={styles.visionMissionValues}>
  <div className={styles.vision}>
    <div className={styles.text}>
      <h2>Our Vision</h2>
      <p>
        At Nexus Corporate Training Center LLP, our vision is to deliver
        accessible, high-quality IT education with placement support,
        empowering learners in Pune and beyond. We aim to build an inclusive
        global community that equips students with the skills and connections
        needed to excel in the dynamic IT industry.
      </p>
    </div>
    <div className={styles.image}>
      <img
        src="https://www.infoworld.com/wp-content/uploads/2024/06/eye_circuits_system_artificial_intelligence_machine_learning_privacy_by_vijay_patel_gettyimages-936718998_1200x800-100768000-orig.jpg?resize=1024%2C683&quality=50&strip=all"
        alt="Vision"
      />
    </div>
  </div>

  <div className={styles.mission}>
    <div className={styles.image}>
      <img src={Img} alt="Mission" />
    </div>
    <div className={styles.text}>
      <h2>Our Mission</h2>
      <p>
        Our mission at Nexus Corporate Training Center LLP is to empower
        learners with job-focused software skills through tailored programs
        for all experience levels. We aim to equip each student with the
        knowledge and hands-on training needed to thrive in the IT industry
        and excel in their careers.
      </p>
    </div>
  </div>

  <div className={styles.values}>
    <div className={styles.text}>
      <h2>Our Values</h2>
      <p>
        At Nexus Corporate Training Center LLP, our values focus on a
        learner-centered approach, career success with 100% placement
        support, continuous improvement through feedback, and a collaborative,
        inclusive community for students and professionals alike.
      </p>
    </div>
    <div className={styles.image}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/58fbfecf725e25a3d1966494/1617223162803-MNI0TRV5G87CA86KU8UP/image-asset.jpeg"
        alt="Values"
      />
    </div>
  </div>
</section>


      {/* Success Stories Section */}
      <Review />
      {/* Why Choose Us Section */}
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
              </div>
              <h2 className={styles.courseTitle}>{course.title}</h2>
              <div className={styles.skillTitle}>
                {/* Course Name: {course.skillTitle} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
