import styles from "./Terms.module.css";

function Terms() {
  return (
    <div>
      
      <section className={styles.termsSection}>
  <h2>Please read the Terms and Conditions (T&Cs) carefully before enrolling in the course</h2>
  <ul>
    <li>The fees will be non-refundable and non-transferable in any circumstances.</li>
    <li>Batch or course change is not allowed.</li>
    <li>Nexus provides corporate-level training.</li>
    <li>Training will be provided according to the specified syllabus.</li>
    <li>Candidates will receive interview calls from different job portals.</li>
    {/* <li>Payment must be completed before the start of the course.</li> */}
    {/* <li>Late payment may result in suspension or cancellation of enrollment.</li> */}
    <li>Course materials are proprietary and should not be distributed without permission.</li>
    <li>Certification will be provided only after meeting attendance and assessment requirements.</li>
    <li>All personal information collected will be kept confidential and used for official purposes only.</li>
    {/* <li>Job assistance will be provided, but Nexus does not guarantee employment.</li> */}
    <li>All candidates are expected to maintain professional behavior during training.</li>
    {/* <li>Nexus reserves the right to expel candidates for misconduct or disruption.</li> */}
    <li>Candidates must ensure they have access to necessary hardware and software for online sessions.</li>
    <li>Nexus is not liable for any damages arising from the use of its training services.</li>
  </ul> 
  <br />
  <p>All rights reserved to Nexus - Corporate Training Center*</p>
  <br />
  <p>If you have any queries or doubts regarding payment, please contact us at contact@Nexus-CTC-LLP</p>
</section>


    </div>
  )
}

export default Terms
