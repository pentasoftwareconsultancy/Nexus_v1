import styles from "./UpcomingBatches.module.css";

function UpcomingBatches() {
  return (<div className={styles.container}>
      <h1>Upcoming Batches</h1>
    <div className={styles.tableContainer}>
      <table className={styles.upcomingBatchesTable}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Slot</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data */}
          <tr>
            <td>React Basics </td>
            <td>4 weeks</td>
            <td>10th Sep 2024</td>
            <td>10:00 AM - 12:00 PM</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Advanced JavaScript</td>
            <td>6 weeks</td>
            <td>15th Sep 2024</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Advanced JavaScript</td>
            <td>6 weeks</td>
            <td>15th Sep 2024</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Advanced JavaScript</td>
            <td>6 weeks</td>
            <td>15th Sep 2024</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Advanced JavaScript</td>
            <td>6 weeks</td>
            <td>15th Sep 2024</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Advanced JavaScript</td>
            <td>6 weeks</td>
            <td>15th Sep 2024</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Advanced JavaScript</td>
            <td>6 weeks</td>
            <td>15th Sep 2024</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Advanced JavaScript</td>
            <td>6 weeks</td>
            <td>15th Sep 2024</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>Advanced JavaScript</td>
            <td>6 weeks</td>
            <td>15th Sep 2024</td>
            <td>2:00 PM - 4:00 PM</td>
            <td>$300</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default UpcomingBatches;
