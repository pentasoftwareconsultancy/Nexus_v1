import Hero from "../Home/Hero/Hero";
import UpcomingBatches from "../Home/UpcomingBatches/UpcomingBatches";
import WhyJoin from "../Home/WhyJoin/WhyJoin";
import styles from "./Batches.module.css"; // Importing the CSS module



function Batches() {
  return (
    <div>
        <Hero />
        <UpcomingBatches />
      {/* Terms and Conditions Section */}
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
      <WhyJoin />

    </div>
  )
}

export default Batches
