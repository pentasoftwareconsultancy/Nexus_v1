import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import courses from "../../../data"; // Adjust the path based on your project structure
import styles from "./Course.module.css";

function Course() {
  const navigate = useNavigate();

    // const courses = [
    //   {
    //     title: "Power BI" ,
    //     description: "Integration with Power Automate to trigger workflows based on data changes..",
    //     duration: "10 weeks",
    //     date: "2024-10-01",
    //     imageUrl: "https://codewave.com/insights/wp-content/uploads/2022/08/mern-stack-header-codewave.jpg", // Example image URL
    //     trending: "Trending",
    //     stars: "★★★★★", // Example star rating
    //     skillTitle: "Data Modeling and Analysis, Data Visualization",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "30,000",
    //     learningPoint1:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    //     learningPoint2:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    //     learningPoint3:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    //     syllabus:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "AR Caller/RCM",
    //     description: "This is a description for AI Developer.",
    //     duration: "8 weeks",
    //     date: "2024-11-01",
    //     imageUrl: "data:image/jpeg;base64,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", 
    //     trending: "Trending",
    //     stars: "★★★★☆",
    //     skillTitle: "Advanced Skills",
    //     instructor: "John Doe",
    //     contact: "1234567890",
    //     fees: "15,000",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
      
    //   {
    //     title: " Medical Coding/Billing ",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: "https://nividous.com/wp-content/uploads/2022/07/artificial-intelligence-in-medical-billing-an-introduction-nividous.jpg", // Example image URL
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "30,000",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },

    //   {
    //     title: "AWS Administrator",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: "https://www.spoclearn.com/blog/wp-content/uploads/2023/12/AI-and-Power-BI-A-Powerful-Combination-for-Data-Visualization.jpg", // Example image URL
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "30,000",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Soft Skills",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: "https://www.damcogroup.com/wp-content/uploads/2023/12/python-for-ai-and-ml.jpg", // Example image URL
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "30,000",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Testing",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: "https://pixelplex.io/wp-content/uploads/2021/01/artificial-intelligence-applications-in-healthcare-main-image-1600.jpg", // Example image URL
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "30,000",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
       
    //   },
    //   {
    //     title: "Sales Force Adm/Dev",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: "https://s3.us-east-1.amazonaws.com/asugv5-assets/archive/uploads/images/main/_featureLarge/artificial-intelligence.jpg", // Example image URL
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Data Science",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: Img, // Use the imported Img variable
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Machine Learning ",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: Img, // Use the imported Img variable
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Python",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: Img, // Use the imported Img variable
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Java And ASP.Net",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: Img, // Use the imported Img variable
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Business Analyst",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: Img, // Use the imported Img variable
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Agile Methodology",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: "https://www.shutterstock.com/image-photo/agile-development-methodology-concept-on-260nw-1341139619.jpg", // Example image URL
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    //   {
    //     title: "Dev-Ops",
    //     description: "This is a description for Course 3.",
    //     duration: "12 weeks",
    //     date: "2024-12-01",
    //     imageUrl: "https://sourcebae.com/blog/wp-content/uploads/2023/08/top-ai-programming-languages.png", // Example image URL
    //     trending: "Trending",
    //     stars: "★★★☆☆", // Example star rating
    //     skillTitle: "Beginner Skills",
    //     instructor: "Hello",
    //     contact: "8988765679",
    //     fees: "8988765679",
    //     learningPoint1:"hello",
    //     learningPoint2:"hello",
    //     learningPoint3:"hello",
    //     syllabus:"one two three",
    //     keyfeatures:"keyFeatures",
    //   },
    // ];

    // Function to handle button click
    const handleLearnMoreClick = (course) => {
      navigate("/learnMore", { state: { course } });
    };



  return (
    <div className={styles.container}>
      <Helmet>
        <title>Nexus Corporate Training Center - Home | Courses</title>
        <meta
          name="description"
          content="Nexus Corporate Training Institute, a leading online IT course and certification provider, offers professional training across India. Advance your career today!"
        />
        <meta
          name="keywords"
          content="Best Software training institute in Pune with placement"
        />
      </Helmet>

      <h1>We Offer the Following Courses</h1>

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
              <button
                onClick={() => handleLearnMoreClick(course)}
                className={styles.btnLearn}
              >
                Learn More
              </button>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;