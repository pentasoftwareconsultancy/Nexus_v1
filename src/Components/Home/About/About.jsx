import styles from "./About.module.css";

function About() {
  return (
    <div>
      <section className={styles.aboutUs}>
        <div>
          <h2 className={styles.headline}>About Us</h2>
        </div>
        <p>
          Nexus Corporate Training Center LLP is Pune’s most innovative IT
          training institute, offering a wide range of specialized courses like
          Medical Coding, Power BI, AWS, and other software courses with
          placement assistance. Our mission is to provide learners with
          industry-relevant skills through hands-on training, led by experienced
          instructors. We focus on delivering the best software courses in Pune
          with placement, ensuring our students are job-ready upon course
          completion. With a strong emphasis on practical knowledge, Nexus
          equips learners to excel in the competitive IT landscape and secure
          promising careers in top companies.
        </p>
      </section>
    </div>
  );
}

export default About;
