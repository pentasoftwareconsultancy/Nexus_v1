import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import courses from "../../../data";
import styles from "./UpcomingBatches.module.css";

function UpcomingBatches() {
  const navigate = useNavigate();

  // Function to handle button click and navigate to the Learn More page with course data
  const handleRowClick = (course) => {
    const formattedCourseName = course.title
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .toLowerCase();
    navigate(`/learnMore/${formattedCourseName}`, { state: { course } });
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Nexus Corporate Training Center - Courses | Batches</title>
        <meta
          name="description"
          content="Online IT Courses - Nexus Corporate Training Institute, one of the world's leading certification training providers, offers short-term online courses designed to help professionals in India enhance their skills. Best IT courses for beginners providers offer short-term online courses designed to help professionals in India enhance their skills."
        />
        <meta
          name="keywords"
          content="Best Software training institute in Pune with placement, best IT courses for beginners, best IT courses for beginners-Data science, AWS, Power BI"
        />
      </Helmet>

      <h2>Upcoming Batches</h2>
      <div className={styles.tableContainer}>
        <table className={styles.upcomingBatchesTable}>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Fees</th>
              <th>Contact</th>
              <th>Know More</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.title}</td>
                <td>{course.duration}</td>
                <td>{course.fees}</td>
                <td>{course.contact}</td>
                <td>
                  <button onClick={() => handleRowClick(course)}>See More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UpcomingBatches;
