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

  return (
    <div className={styles.aboutPage}>
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
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          nisi augue. Pellentesque volutpat neque et felis ornare, in gravida
          enim ornare. Phasellus fringilla nisi nec arcu volutpat scelerisque.
          Fusce pharetra risus et bibendum pulvinar. Nullam eget quam varius,
          facilisis velit ac, condimentum justo. Integer egestas augue ac
          gravida mollis. Sed cursus nec metus sit amet sodales.
        </p>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className={styles.visionMissionValues}>
        <div className={styles.vision}>
          <div className={styles.text}>
            <h1>Our Vision</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          nisi augue. Pellentesque volutpat neque et felis ornare, in gravida
          enim ornare. Phasellus fringilla nisi nec arcu volutpat scelerisque.
          Fusce pharetra risus et bibendum pulvinar. Nullam eget quam varius,
          facilisis velit ac, condimentum justo. Integer egestas augue ac
          gravida mollis. Sed cursus nec metus sit amet sodales.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          nisi augue. Pellentesque volutpat neque et felis ornare, in gravida
          enim ornare. Phasellus fringilla nisi nec arcu volutpat scelerisque.
          Fusce pharetra risus et bibendum pulvinar. Nullam eget quam varius,
          facilisis velit ac, condimentum justo. Integer egestas augue ac
          gravida mollis. Sed cursus nec metus sit amet sodales.
            </p>
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.text}>
            <h1>Our Values</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          nisi augue. Pellentesque volutpat neque et felis ornare, in gravida
          enim ornare. Phasellus fringilla nisi nec arcu volutpat scelerisque.
          Fusce pharetra risus et bibendum pulvinar. Nullam eget quam varius,
          facilisis velit ac, condimentum justo. Integer egestas augue ac
          gravida mollis. Sed cursus nec metus sit amet sodales.
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
          {[...Array(5)].map((_, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.slideContent}>
                <div className={styles.imageContainer}>
                  <img
                    src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
                    alt={`Success Story ${index + 1}`}
                  />
                </div>
                <div className={styles.textContainer}>
                  <h3>Success Story {index + 1}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent vel libero sit amet justo facilisis luctus. Aenean
                    vitae velit vitae mauris blandit pulvinar at nec metus.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Why Choose Us Section */}
     
      <WhyJoin/>

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
  );
};

export default About;
