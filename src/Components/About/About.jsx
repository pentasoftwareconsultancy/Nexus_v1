import styles from "./About.module.css"; // Importing the CSS module

const About = () => {
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
        <h2>About Us</h2>
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
            <h3>Our Vision</h3>
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
            <h3>Our Mission</h3>
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
            <h3>Our Values</h3>
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
        <h2>Success Stories</h2>
        <div className={styles.slider}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className={styles.slide}>
              <img
                src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
                alt={`Success Story ${index + 1}`}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vel libero sit amet justo facilisis luctus.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us</h2>
        <div className={styles.cards}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.card}>
              <img
                src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
                alt="Why Choose Us"
              />
              <h3>Reason {index + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel urna felis.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section className={styles.ourTeam}>
        <h2>Our Team</h2>
        <div className={styles.teamMembers}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className={styles.teamMember}>
              <img
                src="https://justenergy.com/wp-content/uploads/2023/12/artificial-intelligence-in-energy-illustration.jpeg"
                alt={`Teacher ${index + 1}`}
              />
              <div className={styles.details}>
                <h3>Teacher Name {index + 1}</h3>
                <p>Education: Lorem ipsum dolor sit amet</p>
                <p>Experience: 5 years</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
