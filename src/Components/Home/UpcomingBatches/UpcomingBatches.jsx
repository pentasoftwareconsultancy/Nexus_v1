import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UpcomingBatches.module.css";

function UpcomingBatches() {
  const navigate = useNavigate();

  // Sample data (this can be dynamic if needed)
  const courses = [
    {
      name: "Software Testing ",
      duration: "4 weeks",
      date: "10th Sep 2024",
      slot: "10:00 AM - 12:00 PM",
      payment: "$200",
    },
    {
      name: "Power BI ",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "AWS And Linux",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Sales Force Admin ",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "SAP BI (Business Intellingence)",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "DOT NET",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Full Stack Web Devloper",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "AR Caller",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
  ];

  // Function to handle row click and navigate to another page
  const handleRowClick = (course) => {
    navigate("/course-details", { state: { course } });
  };

  return (
    <div className={styles.container}>
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
            {courses.map((course, index) => (
              <tr key={index} onClick={() => handleRowClick(course)} >
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.date}</td>
                <td>{course.slot}</td>
                <td>{course.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UpcomingBatches;
