import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel"; // Import Carousel from the library
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyJoin from '../../Components/Home/WhyJoin/WhyJoin';
import styles from "./About.module.css"; // Importing the CSS module


const About = () => {
  const courses = [
    {
      title: "AI Develpoer",
      description: "This is a description for Course 2.",
      duration: "8 weeks",
      date: "2024-11-01",
      imageUrl:
        "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg", // Example image URL
      // trending: "Trending",
      stars: "★★★★☆", // Example star rating
      skillTitle: "Advanced Skills",
    },
    {
      title: "Java Developer",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl:
        "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg", // Example image URL
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },

    {
      title: "Advance Power BI",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl:
        "https://imgcdn.stablediffusionweb.com/2024/2/28/64f23186-ec94-4291-885b-3c0f433877df.jpg", // Example image URL
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl:
        "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl:
        "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl:
        "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl:
        "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg",
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
    {
      title: "Course 3",
      description: "This is a description for Course 3.",
      duration: "12 weeks",
      date: "2024-12-01",
      imageUrl:
        "https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg", // Example image URL
      // trending: "Trending",
      stars: "★★★☆☆", // Example star rating
      skillTitle: "Beginner Skills",
    },
  ];

  // src/constants/successStories.js

  const successStories = [
    {
      name: "Milind Patil",
      role: "Software Quality Analyst",
      experience: "4 years of Experience",
      message:
        "Great teachers make Nexus Corporate Training Center Great. Thank You Nexus for my job and the knowledge.",
      imageUrl:
        "https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg",
    },
    {
      name: "Sushil Shelar",
      role: "Software Testing Engineer",
      experience: "3 years of Experience with MNC",
      message:
        "All application falls less for the quality learning found here. Thank You Nexus Corporate Training Center for teaching me better than any college.",
      imageUrl:
        "https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg",
    },
    {
      name: "Miss Arti Patel",
      role: "Software Testing Engineer",
      experience: "5 years of Experience with MNC",
      message:
        "Learning with Nexus Corporate Training Center Pune was one of the best decisions for my career.",
      imageUrl:
        "https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg",
    },
    // Add more success stories as needed
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
          content="Nexus"
        />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src="https://cdn.leonardo.ai/users/1d4ba5ac-caad-4968-8a76-5fcff230733f/generations/3c75b5e7-3268-4c80-bef1-7422a2e54976/Cinematic_Kino_dark_black_ai_images_for_technology_in_website_1.jpg"
          alt="Hero"
          className={styles.heroImage}
        />
        <span className={styles.heroTitle}>About Nexus</span>
      </section>

      {/* About Us Section */}
      <section className={styles.aboutUs}>
        <div>
        <h1 className= {styles.headline} >About Us</h1>
        </div>
        <p>
        Welcome to Nexus Corporate Training Center LLP, a premier IT training institute in Pune, 
        committed to empowering individuals with cutting-edge skills and industry-relevant knowledge to excel in the dynamic
         tech world. At Nexus, we offer a wide range of specialized courses designed to meet the growing demand for IT 
         professionals across various sectors. Our experienced instructors provide hands-on training in the latest technologies,
          ensuring that learners gain practical experience in real-world applications.
        </p>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className={styles.visionMissionValues}>
        <div className={styles.vision}>
          <div className={styles.text}>
            <h1>Our Vision</h1>
            <p>
                As a top IT training institute in Pune with placement, we are
                dedicated to delivering high-quality, accessible education. With
                our flexible course structures and learning formats, individuals
                from all backgrounds can access top-tier training that suits
                their schedule and learning style. We foster inclusivity and
                collaboration, creating a global learning community where
                students can engage with peers and mentors from around the
                world.
            </p>
          </div>
          <div className={styles.image}>
            <img
              src="https://www.techopedia.com/wp-content/uploads/2023/02/istock-958259766-1.jpeg"
              alt="Vision"
            />
          </div>
        </div>

        <div className={styles.mission}>
          <div className={styles.image}>
            <img
              src="https://i0.wp.com/www.policycircle.org/wp-content/uploads/2023/05/ai10.jpg"
              alt="Mission"
            />
          </div>
          <div className={styles.text}>
            <h1>Our Mission</h1>
            <p>
                Our mission is to offer a transformative learning experience
                through a comprehensive range of job-focused software courses.
                Whether you're a beginner starting your coding journey or an
                experienced professional looking to enhance your skills, we have
                the ideal program for you.
            </p>
          </div>
        </div>

      <div className={styles.values}>
        <div className={styles.text}>
          <h1>Our Values</h1>
          <p>
          
            What sets Nexus CTC apart is our unwavering commitment to student success. With 100% placement assistance,
             we go beyond the classroom to ensure our students are well-prepared for the workforce. 
            Our career services team offers personalized support and resources to help students secure fulfilling roles in their chosen fields.         
              
          </p>
        </div>
        <div className={styles.image}>
          <img src="https://imageio.forbes.com/specials-images/imageserve/62468a610c6dc8f419eac76b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="Values" />
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
                      {story.role}
                      <br />
                      {story.experience}
                      <br />"{story.message}"
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

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
