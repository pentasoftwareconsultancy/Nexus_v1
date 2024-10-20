import React from 'react'
import styles from './Review.module.css'
import { Carousel } from "react-responsive-carousel"; // Import Carousel from the library

function Review() {

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

    </div>
  )
}

export default Review
