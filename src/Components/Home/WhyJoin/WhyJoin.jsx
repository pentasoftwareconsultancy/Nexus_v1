import styles from "./WhyJoin.module.css";
// import coursesImg3 from "./Images/Home_20240823_153805_0000.jpg";

function WhyJoin() {
  const courses = [
    {
      title: "Extensive Industry Experience",
      description:
        "We have over 20 years of experience providing high-quality corporate training solutions across various industries, helping companies enhance employee skills and productivity.",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4E12AQE9PynghwnfBA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703624413744?e=2147483647&v=beta&t=flmY42TR1WDPtydBudSjguuucBXVawcu5ijGOgSA8bA", // Example image URL
      stars: "★★★★★", // Example star rating
    },
    {
      title: "Customized Training Programs",
      description:
        "Our training programs are tailored to meet the specific needs of your organization, ensuring that your employees gain the most relevant and impactful skills.",

      imageUrl:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c1a0b8c4-aa4f-42aa-8b5a-aa723dabc7f6/95279c53-ae4c-44a8-9b72-e9850dcc4143.png", // Example image URL

      stars: "★★★★★", // Example star rating
    },
    {
      title: "Certified and Experienced Trainers",
      description:
        "Our trainers are industry experts with certifications and hands-on experience in their respective fields, ensuring top-notch training quality.",

      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQFXf7wr7dGDpQ/article-cover_image-shrink_720_1280/0/1705431516441?e=2147483647&v=beta&t=u2I9cw0zwgM2hecJX0Y_HbFdwhY2n3PUZCTuB4rFjNc", // Example image URL

      stars: "★★★★★", // Example star rating
    },

    // {
    //   title: "Comprehensive Course Offerings",
    //   description:
    //     "We offer a wide range of courses covering technical skills, leadership development, and soft skills, ensuring a holistic approach to employee development.",

    //   imageUrl:
    //     "https://miro.medium.com/v2/resize:fit:1024/1*zasLVeXsR311ZK0vyA5_xg.png", // Example image URL

    //   stars: "★★★★★", // Example star rating
    // },
  ];

  return (
    <div className={styles.container}>
      <h1>Why Choose Us?</h1>
      {/* <h3 className={styles.text}>Best software training institute in Pune with placement </h3> */}
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
            <h2 className={styles.courseTitle}>{course.title}</h2>
            <div className={styles.stars}>{course.stars}</div>
            <div className={styles.skillTitle}>{course.skillTitle}</div>
            <p className={styles.courseDescription}>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyJoin;
