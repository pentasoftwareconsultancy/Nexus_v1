import React from 'react';
import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <img
          src="https://thumbs.dreamstime.com/b/ai-artificial-intelligence-machine-learning-big-data-analysis-automation-technology-business-industrial-manufacturing-132528154.jpg"
          alt="Hero"
          className={styles.heroImage} />
          <h1 className={styles.heroTitle}>Contact Us</h1>
       </section>
      <p>We would love to provide you with more information and answer any questions that you might have. We look forward to hearing from you.</p>
      <h1 className={styles.header}>Contact Us</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.inputField} />
        <input type="email" placeholder="Email" className={styles.inputField} />
        <textarea placeholder="Message" className={styles.inputField}></textarea>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
