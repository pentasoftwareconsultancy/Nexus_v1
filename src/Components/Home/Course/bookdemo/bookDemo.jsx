import { Helmet } from "react-helmet";

import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./BookDemo.module.css"; // Add your custom styles here

function bookDemo() {
  const location = useLocation();
  const { course } = location.state;

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className={styles.bookDemoContainer}>
      <Helmet>
        <title>Nexus Corporate Training Center - Courses Demo </title>
        <meta
          name="description"
          content="Know more about Nexus "
        />
        <meta
          name="keywords"
          content="Nexus"
        />
      </Helmet>

      <h1 className={styles.title}>{course.title} - Demo</h1>
      <p>Watch this demo video to learn more about the course. </p>
      <video width="600" controls>
        <source src="path-to-demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default bookDemo;
