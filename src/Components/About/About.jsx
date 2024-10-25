import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyJoin from '../../Components/Home/WhyJoin/WhyJoin';
import Review from "../Review/Review";
import styles from "./About.module.css"; // Importing the CSS module


const About = () => {
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
      title: "Abhijit Talegaonkar",
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

  return (
    <div className={styles.aboutPage}>

      <Helmet>
        <title>About Us :  Top Training Institute with 100 % job placement | nexus CTC</title>
        <meta
          name="description"
          content="About Us : Top Training Institute with 100 % job placement | Nexus CTC"
        />
        <meta
          name="keywords"
          content="IT training institute in Pune , specialized courses, hands-on training, career support"
        />
      </Helmet>
      

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src="https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/3c75b5e7-3268-4c80-bef1-7422a2e54976/Cinematic_Kino_dark_black_ai_images_for_technology_in_website_1.jpg"
          alt="Hero"
          className={styles.heroImage}
        />
        <span className={styles.heroTitle}>About  Ne<span className={styles.logox}>X</span>us</span>
      </section>

      {/* About Us Section */}
      <section className={styles.aboutUs}>
        <div>
        <h1 className= {styles.headline} >About Us</h1>
        </div>
        <p>
         Nexus Corporate Training Center LLP is Pune’s most innovative IT training institute, offering a wide range of specialized
         courses like Medical Coding, Power BI, AWS, and other software courses with placement assistance. Our mission is to 
         provide learners with industry-relevant skills through hands-on training, led by experienced instructors. 
         We focus on delivering the best software courses in Pune with placement, ensuring our students are job-ready upon course
          completion. With a strong emphasis on practical knowledge, Nexus equips learners to excel in the competitive IT 
          landscape and secure promising careers in top companies.
        </p>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className={styles.visionMissionValues}>
        <div className={styles.vision}>
          <div className={styles.text}>
            <h1>Our Vision</h1>
            <p>
            As a top IT training institute in Pune with placement assistance, Nexus Corporate Training Center LLP is dedicated
             to delivering high-quality, accessible education for all learners. Our vision is to provide flexible course 
             structures and diverse learning formats, empowering individuals to achieve their goals in Medical Coding, Power BI,
             AWS, AR Caller and other software courses. By fostering inclusivity and collaboration, we aim to create a global learning community where students can connect with peers and mentors, preparing them to excel in the dynamic IT industry.


            </p>
          </div>
          <div className={styles.image}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRoJqhFqp0EV-o_-FiS04NjDg9X8Kcc3_cw&s"
              alt="Vision"
            />
          </div>
        </div>

        <div className={styles.mission}>
          <div className={styles.image}>
            <img
              src="https://img.freepik.com/premium-photo/concept-mission-with-network-business-symbols_220873-12797.jpg"
              alt="Mission"
            />
          </div>
          <div className={styles.text}>
            <h1>Our Mission</h1>
            <p>
            Here’s a refined and SEO-friendly version of your mission and values statements for Nexus Corporate Training Center 
            LLP: Mission Our mission at Nexus Corporate Training Center LLP is to deliver a transformative learning experience 
            through a comprehensive range of job-focused software courses. Whether you're a beginner embarking on your coding 
            journey or an experienced professional seeking to enhance your skills, we provide tailored programs designed to meet
             your needs. Our commitment is to equip every learner with the knowledge and practical experience necessary to excel 
             in the fast-paced IT industry, ensuring they are career-ready upon graduation.
            </p>
          </div>
        </div>

      <div className={styles.values}>
        <div className={styles.text}>
          <h1>Our Values</h1>
          <p>
          At Nexus Corporate Training Center LLP, we are committed to:
          <ul>
        <li>Learner-Focused Approach:</li> Customizing courses and support to align with individual goals and preferences.
        <li>Career Success:</li> Offering 100% placement assistance and personalized guidance.
        <li>Continuous Enhancement:</li>  Improving programs based on student and industry feedback.
        <li>Inclusive Community:</li>  Fostering collaboration among students and professionals.
        </ul>
        We empower every learner to achieve success in their IT careers.
            
          </p>
        </div>
        <div className={styles.image}>
          <img src="https://st2.depositphotos.com/3246463/7385/i/450/depositphotos_73852933-stock-photo-hand-holding-words-core-values.jpg" alt="Values" />
        </div>
      </div>
    </section>

      {/* Success Stories Section */}
        <Review />
      {/* Why Choose Us Section */}
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
              </div>
              <h1 className={styles.courseTitle}>{course.title}</h1>
              <div className={styles.stars}>{course.stars}</div>
              <div className={styles.skillTitle}> Course Name : {course.skillTitle}</div>
              <p className={styles.courseDescription}>{course.description}</p>
              <div className={styles.buttonContainer}>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 