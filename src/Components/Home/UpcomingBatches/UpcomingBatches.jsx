import { Helmet } from "react-helmet";

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UpcomingBatches.module.css";

function UpcomingBatches() {
  const navigate = useNavigate();

  // Sample data (this can be dynamic if needed)
  const courses = [
    {
      name: "AR caller/ RCM ",
      duration: "30 days",
      date: "10th Sep 2024",
      slot: "10:00 AM - 12:00 PM",
      payment: "15,000",
    },
    {
      name: "AWS Administrator ",
      duration: "6 months",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "35,000",
    },
    {
      name: "Meadical Coding and Billing",
      duration: "3 months",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "30,000",
    },
    {
      name: "Power BI",
      duration: "3 months",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "35,000",
    },
    {
      name: "Data Science",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Machine Learning ",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Python ",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
   
    {
      name: "Java & ASP.NET ",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Business Analyst ",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Mearn stack Developer ",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Dev-Ops",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Software Teasting",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
    {
      name: "Sales Force Adm/Dev  ",
      duration: "6 weeks",
      date: "15th Sep 2024",
      slot: "2:00 PM - 4:00 PM",
      payment: "$300",
    },
  ];

  // Function to handle row click and navigate to another page
  const handleRowClick = (course) => {
    navigate("/details", { state: { course } });
  };

  return (
    <div className={styles.container}>

<Helmet>
        <title>Nexus Corporate Training Center - Courses / Batches </title>
        <meta
          name="description"
          content="Know more about Nexus "
        />
        <meta
          name="keywords"
          content="Nexus"
        />
      </Helmet>


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
