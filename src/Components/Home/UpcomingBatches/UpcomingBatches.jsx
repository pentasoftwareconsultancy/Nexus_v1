import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import courses from "../../../data"; 
import styles from "./UpcomingBatches.module.css";


function UpcomingBatches() {
  const navigate = useNavigate();

  // Function to handle row click and navigate to another page
  const handleRowClick = (course) => {
    navigate("/learnMore", { state: { course } });
  };

  return (
    <div className={styles.container}>

      <Helmet>
        <title>Nexus Corporate Training Center - Courses | Batches </title>
        <meta
          name="description"
          content="Online IT Courses - Nexus Corporate Training Institute, one of the world's leading certification training 
          providers, offers short-term online courses designed to help professionals in India enhance their skills. , 
          best IT courses for beginners providers offer short-term online courses designed to help professionals in India enhance their skills."
              
        />
        <meta
          name="keywords"
          content="Best Software training institute in pune with placement , best IT courses for beginners,
          best IT courses for beginners-Data science, AWS, Power BI"
        />
      </Helmet>


      <h1>Upcoming Batches</h1>
      <div className={styles.tableContainer}>
        <table className={styles.upcomingBatchesTable}>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              {/* <th>Date</th> */}
              <th>Fees</th>
              <th>Contact</th>
              {/* <th>Instructor</th> */}
              <th>Know More </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} onClick={() => handleRowClick(course)} >
                <td>{course.title}</td>
                <td>{course.duration}</td>
                {/* <td>{course.date}</td> */}
                <td>{course.fees}</td>
                <td>{course.contact}</td>
                <td><button>See More</button></td>
                {/* <td>{course.instructor}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UpcomingBatches;
