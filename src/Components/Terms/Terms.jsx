import styles from "./Terms.module.css";

function Terms() {
  return (
    <div>
      
      <section className={styles.termsSection}>
        <h2>Please read the Terms and Conditions (T&Cs) carefully before enrolling in the course</h2>
        <ul>
          <li>The fees will be non-refundable and non-transferable in any circumstances.</li>
          <li>Batch or course change is strictly not allowed.</li>
          <li>Nexus provides corporate-level training.</li>
          <li>Training will be provided according to the specified Syllabus.</li>
          <li>Candidates will receive interview calls from different job portals.</li>
        </ul> <br />
        <p>All rights reserved to Nexus - Corporate Training Center*</p><br />
        <p>If you have any queries/doubt regarding payment, please contact us at contact@Nexus-CTC-LLP</p>
      </section>

    </div>
  )
}

export default Terms
