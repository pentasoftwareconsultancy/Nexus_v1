import React from 'react';
import { Carousel } from "react-responsive-carousel"; // Import Carousel from the library
import students from "../Blogs/studentsData";
import styles from './Review.module.css';

function Review() {

  return (
    <div>  

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
          {students.map((story, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.slideContent}>
                <div className={styles.imageContainer}>
                  <img
                    src={story.image}
                    alt={`Student ${index + 1}`}
                  />
                </div>
                <div className={styles.textContainer}>
                  <h3>{story.name}</h3>
                  <p>
                    <strong>
                      {story.role}
                      <br />
                      {story.course}
                      <br />
                      {story.company}
                      <br />
                      {story.package}
                      {/* <br />{story.feedback1} */}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

    </div>
  )
}

export default Review
