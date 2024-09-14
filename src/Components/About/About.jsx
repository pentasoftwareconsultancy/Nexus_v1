import { Carousel } from "react-responsive-carousel"; // Import Carousel from the library
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyJoin from "../Home/WhyJoin/WhyJoin";
import styles from "./About.module.css"; // Importing the CSS module
const About = () => {

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
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl: "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg", // Example image URL
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    }
  ];

  // src/constants/successStories.js

const successStories = [
  {
    name: "Milind Patil",
    role: "Software Quality Analyst",
    experience: "4 years of Experience",
    message: "Great teachers make Nexus Corporate Training Center Great. Thank You Nexus for my job and the knowledge.",
    imageUrl: "https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
  },
  {
    name: "Sushil Shelar",
    role: "Software Testing Engineer",
    experience: "3 years of Experience with MNC",
    message: "All application falls less for the quality learning found here. Thank You Nexus Corporate Training Center for teaching me better than any college.",
    imageUrl: "https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
  },
  {
    name: "Miss Arti Patel",
    role: "Software Testing Engineer",
    experience: "5 years of Experience with MNC",
    message: "Learning with Nexus Corporate Training Center Pune was one of the best decisions for my career.",
    imageUrl: "https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
  }
  // Add more success stories as needed
];


  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
          alt="Hero"
          className={styles.heroImage}
        />
        <h1 className={styles.heroTitle}>About Nexus</h1>
      </section>

    {/* About Us Section */}
    <section className={styles.aboutUs}>
      <h1>About Us</h1>
      <p>1. Location: Nexus Corporate Training Center is situated in Pimple Gurav, Pune, known for its professional training and development services.
         2. Services Offered: Technical Training: Courses on the latest technologies, programming languages, software development methodologies, etc.
            Leadership Training: Programs designed to enhance leadership skills, including strategic thinking, decision-making, and team management.
            Soft Skills Development: Training in communication, negotiation, conflict resolution, and other interpersonal skills.
            Real-Time Experience: Practical, hands-on training to simulate real-world scenarios and challenges in IT and development.
      </p>
    </section>

    {/* Vision, Mission, Values Section */}
    <section className={styles.visionMissionValues}>
      <div className={styles.vision}>
        <div className={styles.text}>
          <h1>Our Vision</h1>
          <p>
            <strong>
              Transforming the Digital Landscape:
              Objective: To significantly impact and reshape how technology is used and perceived.
              Approach: Innovating in software solutions to drive this transformation.
              Innovative Software Solutions:
              "Transforming the digital landscape through innovative software solutions that redefine the way individuals and organizations engage with technology, fostering efficiency, empowerment, and sustainable growth for the future is our vision."
            </strong>
          </p>
        </div>
        <div className={styles.image}>
          <img src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg" alt="Vision" />
        </div>
      </div>

      <div className={styles.mission}>
        <div className={styles.image}>
          <img src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg" alt="Mission" />
        </div>
        <div className={styles.text}>
          <h1>Our Mission</h1>
          <p>
            <strong>
              Empowering businesses and individuals worldwide by delivering cutting-edge software solutions that enhance productivity, streamline processes, and drive digital transformation, while prioritizing security, reliability, and customer satisfaction as the cornerstone of our mission.
            </strong>
          </p>
        </div>
      </div>

      <div className={styles.values}>
        <div className={styles.text}>
          <h1>Our Values</h1>
          <p>
            <strong>
              "Nexus Corporate Training Center is committed to driving innovation across all aspects of our training programs. We continually explore and integrate the latest methodologies and technologies to provide cutting-edge solutions that meet the evolving demands of the industry."
            </strong>
          </p>
        </div>
        <div className={styles.image}>
          <img src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg" alt="Values" />
        </div>
      </div>
    </section>

    {/* Success Stories Section */}
    <section className={styles.successStories}>
      <h1>Success Stories</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        className={styles.carousel}
      >
        {successStories.map((story, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.slideContent}>
              <div className={styles.imageContainer}>
                <img
                  src={story.imageUrl}
                  alt={`Success Story ${index + 1}`}
                />
              </div>
              <div className={styles.textContainer}>
                <h3>{story.name}</h3>
                <p>
                  <strong>
                    {story.role}<br/>
                    {story.experience}<br/>
                    "{story.message}"
                  </strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUs}>
        <h1>Why Choose Us</h1>
        <div className={styles.cards}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.card}>
              <img
                src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
                alt="Why Choose Us"
              />
              <h1>Reason {index + 1}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel urna felis.
              </p>
            </div>
          ))}
        </div>
      </section>

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
);
};


export default About;
