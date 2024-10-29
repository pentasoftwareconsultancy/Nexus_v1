import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { FaBook, FaClock, FaPhoneSquareAlt, FaRupeeSign, FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Tearms from '../../../Terms/Terms';
import styles from './learnMore.module.css';

function LearnMore() {
  const location = useLocation();
  const { course } = location.state;

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.learnMoreContainer}>
      <Helmet>
        <title>Nexus Corporate Training Center - About Courses</title>
        <meta name="description" content="Know more about Nexus" />
        <meta name="keywords" content="Nexus" />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <img src={course.imageUrl} alt={course.title} className={styles.heroImage} />
        <h1 className={styles.heroTitle}>{course.title}</h1>
      </section>

      {/* Main Content - Split into Two Columns */}
      <div className={styles.content}>
        {/* Left Column - Course Details */}
        <div className={styles.detailsColumn}>
          <div className={styles.header}>
            <h1 className={styles.title}>About {course.title}</h1>
            {/* <h1 className={styles.title}>About { course.topics}</h1> */}

            
          </div>

          <div className={styles.courseInfo}>
            <div><strong>Course Name: {course.title}</strong></div>
            <div><FaBook className={styles.icon} /> <strong>Description:</strong> {course.description}</div>
            <div><FaClock className={styles.icon} /> <strong>Duration:</strong> {course.duration}</div>
            {/* <div><FaRegCalendarTimes className={styles.icon} /> <strong>Start Date:</strong> {course.date}</div> */}
            <div className={styles.instructor}>
            <FaUser className={styles.icon} /> <strong>Instructor:</strong> {course.instructor}
          </div>
            <div>
              <FaUser className={styles.icon} /> <strong>Skill Level:</strong>
              <ol className={styles.skillsList}> 
                <li>{course.skillTitle1}</li>
                <li>{course.skillTitle2}</li>
                <li>{course.skillTitle3}</li>
              </ol>
            </div> 
          </div>

          <div className={styles.imageContainer}>
            <img src={course.imageUrl} alt={course.title} className={styles.image} />
          </div>

        <div className={styles.syllabus}> 
        <FaUser className={styles.icon} /> <strong> Syllabus</strong>
              <ol className={styles.skillsList}> 
                {course.syllabus && course.syllabus.map((item, index) => (
                  <li key={index}>
                    {item.title}: {item.description}
                    {item.topics && (
                      <ul>
                        {item.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
         </div>

          

          <section className={styles.additionalInfoSection}>
            <h2 className={styles.additionalInfoTitle}>What You'll Learn</h2>
            <ul className={styles.learningPoints}>
              <li>{course.learningPoint1}</li>
              <li>{course.learningPoint2}</li>
              <li>{course.learningPoint3}</li>
            </ul>
          </section>

          <section className={styles.additionalInfoSection}>
            <h2 className={styles.additionalInfoTitle}>Key Features</h2>
            <ul className={styles.learningPoints}>
              <li>{course.keyfeatures1}</li>
              <li>{course.keyfeatures2}</li>
              <li>{course.keyfeatures3}</li>
            </ul>
          </section>
        </div>

        {/* Right Column - Sticky Fee Structure */}
        <div className={styles.feeColumn}>
          <div className={styles.sticky}>
            <h2>Course Details</h2>
            <p><FaUser className={styles.icon} /> <strong>Instructor:</strong> {course.instructor}</p>
            <p><FaRupeeSign className={styles.icon} /> <strong>Fees:</strong> {course.fees}</p>
            <p><FaPhoneSquareAlt className={styles.icon} /> <strong>Contact:</strong> {course.contact}</p>
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <Tearms />
    </div>
  );
}

export default LearnMore;
