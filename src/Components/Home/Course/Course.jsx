import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Course.module.css";
// import img form ""
import Img from "../Course/Images/DataScience.jpeg";



  function Course() {
    const navigate = useNavigate();

    const courses = [
      {
        title: "Power BI" ,
        description: "Integration with Power Automate to trigger workflows based on data changes..",
        duration: "10 weeks",
        date: "2024-10-01",
        imageUrl: "https://codewave.com/insights/wp-content/uploads/2022/08/mern-stack-header-codewave.jpg", // Example image URL
        trending: "Trending",
        stars: "★★★★★", // Example star rating
        skillTitle: "Data Modeling and Analysis, Data Visualization",
        instructor: "Hello",
        contact: "8988765679",
        fees: "30,000",
        learningPoint1:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
        learningPoint2:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        learningPoint3:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        syllabus:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        keyfeatures:"keyFeatures",
      },
      {
        title: "AR Caller/RCM",
        description: "This is a description for AI Developer.",
        duration: "8 weeks",
        date: "2024-11-01",
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/028/578/963/small_2x/ar-glasses-technology-concept-with-transparent-goggles-augmented-reality-futuristic-immersive-experience-generated-ai-photo.jpg", 
        trending: "Trending",
        stars: "★★★★☆",
        skillTitle: "Advanced Skills",
        instructor: "John Doe",
        contact: "1234567890",
        fees: "15,000",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      
      {
        title: " Medical Coding/Billing ",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: "https://nividous.com/wp-content/uploads/2022/07/artificial-intelligence-in-medical-billing-an-introduction-nividous.jpg", // Example image URL
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "30,000",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },

      {
        title: "AWS Administrator",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: "https://www.spoclearn.com/blog/wp-content/uploads/2023/12/AI-and-Power-BI-A-Powerful-Combination-for-Data-Visualization.jpg", // Example image URL
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "30,000",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Soft Skills",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: "https://www.damcogroup.com/wp-content/uploads/2023/12/python-for-ai-and-ml.jpg", // Example image URL
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "30,000",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Testing",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: "https://pixelplex.io/wp-content/uploads/2021/01/artificial-intelligence-applications-in-healthcare-main-image-1600.jpg", // Example image URL
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "30,000",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
       
      },
      {
        title: "Sales Force Adm/Dev",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: "https://s3.us-east-1.amazonaws.com/asugv5-assets/archive/uploads/images/main/_featureLarge/artificial-intelligence.jpg", // Example image URL
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "8988765679",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Data Science",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: Img, // Use the imported Img variable
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "8988765679",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Machine Learning ",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: Img, // Use the imported Img variable
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "8988765679",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Python",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: Img, // Use the imported Img variable
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "8988765679",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Java And ASP.Net",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: Img, // Use the imported Img variable
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "8988765679",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Business Analyst",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: Img, // Use the imported Img variable
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "8988765679",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Agile Methodology",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: "https://www.shutterstock.com/image-photo/agile-development-methodology-concept-on-260nw-1341139619.jpg", // Example image URL
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "8988765679",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
      {
        title: "Dev-Ops",
        description: "This is a description for Course 3.",
        duration: "12 weeks",
        date: "2024-12-01",
        imageUrl: "https://sourcebae.com/blog/wp-content/uploads/2023/08/top-ai-programming-languages.png", // Example image URL
        trending: "Trending",
        stars: "★★★☆☆", // Example star rating
        skillTitle: "Beginner Skills",
        instructor: "Hello",
        contact: "8988765679",
        fees: "8988765679",
        learningPoint1:"hello",
        learningPoint2:"hello",
        learningPoint3:"hello",
        syllabus:"one two three",
        keyfeatures:"keyFeatures",
      },
    ];

    // Function to handle button click
    const handleLearnMoreClick = (course) => {
      navigate("/learnMore", { state: { course } });
    };

    const handleBookDemoClick = (course) => {
      navigate("/bookdemo", { state: { course } }); 
    };

  return (
    <div className={styles.container}>
      <h1>We Offer Following Courses</h1>
      
      <div className={styles.courseList}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <div className={styles.cardImage}>
              <img
                src={course.imageUrl}
                alt={course.title}
                className={styles.cardImage}
              />
              <div className={styles.trendingText}>{course.trending}</div>
            </div>
            <h2 className={styles.courseTitle}>{course.title}</h2>
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
  );
}

  export default Course;