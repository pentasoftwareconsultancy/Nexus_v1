import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyJoin from "../../Components/Home/WhyJoin/WhyJoin";
import Review from "../Review/Review";
import Img2 from "../Gallery/Images/Web_Photos/Team/Aditi Mam.jpeg";
import Img4 from "../Gallery/Images/Web_Photos/Team/Bhagyshree Mam.jpeg";
import Img1 from "../Gallery/Images/Web_Photos/Team/Sagar Sir.jpeg";
import Img3 from "../Gallery/Images/Web_Photos/Team/Vaibhav Jadav.jpeg";
import Img5 from "../Gallery/Images/Web_Photos/Team/Sumit Sir.jpeg";
import Img from "./Image/Mission.jpeg";
import Img6 from "../Gallery/Images/Web_Photos/Team/Abhijit Kumar.webp";
import Img7 from "../Gallery/Images/Web_Photos/Team/Rajeev Khade.webp";
import styles from "./About.module.css"; // Importing the CSS module

const About = () => {
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
    // {
    //   title: "Vikas Gadge",
    //   description: "This is a description for Course 3.",
    //   duration: "12 weeks",
    //   date: "2024-12-01",
    //   imageUrl:
    //     "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
    //   // trending: "Trending",
    //   stars: "★★★★★", // Example star rating
    //   skillTitle: "Power BI ",
    // },
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

  return (
    <div className={styles.aboutPage}>
      <Helmet>
        <title>
          About Us : Top Training Institute with 100 % job placement | nexus CTC{" "}
        </title>
        <meta
          name="description"
          content="About Us : Top Training Institute with 100 % job placement | Nexus CTC , Nexus Corporate Training Institute is the most innovative Training center and providing best Software course in Pune with placement"
        />
        <meta
          name="keywords"
          content="IT training institute in Pune , specialized courses, hands-on training, career support,
          Medical Coding-Software course in Pune with placement,
          Software course in Pune with placement "
        />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src="https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/3c75b5e7-3268-4c80-bef1-7422a2e54976/Cinematic_Kino_dark_black_ai_images_for_technology_in_website_1.jpg"
          alt="Hero"
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
          Nexus Corporate Training Center LLP is Pune’s most innovative IT
          training institute, offering a wide range of specialized courses like
          Medical Coding, Power BI, AWS, and other software courses with
          placement assistance. Our mission is to provide learners with
          industry-relevant skills through hands-on training, led by experienced
          instructors. We focus on delivering the best software courses in Pune
          with placement, ensuring our students are job-ready upon course
          completion. With a strong emphasis on practical knowledge, Nexus
          equips learners to excel in the competitive IT landscape and secure
          promising careers in top companies.
        </p>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className={styles.visionMissionValues}>
        <div className={styles.vision}>
          <div className={styles.text}>
            <h2>Our Vision</h2>
            <p>
              At Nexus Corporate Training Center LLP, our vision is to deliver
              accessible, high-quality IT education with placement support,
              empowering learners in Pune and beyond. Through flexible courses
              in Medical Coding, Power BI, AWS, AR Calling, and more, we aim to
              build an inclusive global community that equips students with the
              skills and connections needed to excel in the dynamic IT industry.
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
              learners with job-focused software skills through tailored
              programs for all experience levels. We aim to equip each student
              with the knowledge and hands-on training needed to thrive in the
              IT industry and excel in their careers.
            </p>
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.text}>
            <h2>Our Values</h2>
            <p>
              {/* At Nexus Corporate Training Center LLP, we are committed to: */}
              At Nexus Corporate Training Center LLP, our values focus on a
              learner-centered approach, career success with 100% placement
              support, continuous improvement through feedback, and a
              collaborative, inclusive community for students and professionals
              alike.
              {/* We empower every learner to achieve success in their IT careers. */}
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
          {courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.cardImage}>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className={styles.cardImage}
                />
              </div>
              <h2 className={styles.courseTitle}>{course.title}</h2>
              {/* <div className={styles.stars}>{course.stars}</div> */}
              <div className={styles.skillTitle}>
                {" "}
                Course Name : {course.skillTitle}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
