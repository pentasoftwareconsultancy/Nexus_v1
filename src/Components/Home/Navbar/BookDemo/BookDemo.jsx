import { useState } from 'react';
import styles from "./BookDemo.module.css";

// Define the courses in a constant array
const courses = [
  "Power BI",
  "AR Caller/RCM",
  "AWS Administrator",
  "Medical Coding/Billing",
  "Soft Skills",
  "CTesting",
  "Sales Force Adm/Dev",
  "Data Science",
  "Machine Learning",
  "Python",
  "Java And ASP.Net",
  "Business Analyst",
  "Agile Methodology",
  "Dev-Ops"
];

const BookDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [selectedCourse, setSelectedCourse] = useState(''); // Dropdown state for selected course
  const [formErrors, setFormErrors] = useState({}); // Store form errors

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when clicking the "×" button
  };

  // Handle course selection change
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value); // Update the selected course state
  };

  // Validate form fields
  const validateForm = (formData) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // For 10-digit phone number validation

    if (!formData.fullName) {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.course) {
      errors.course = 'Please select a course';
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fullName: event.target.fullName.value,
      course: event.target.course.value,
      email: event.target.email.value,
      phone: event.target.phone.value
    };

    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      // No errors, proceed with form submission logic
      console.log('Form Data:', formData);
    } else {
      // Set form errors to display
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <button className={styles.btn} onClick={toggleModal}>
        Book Demo
      </button>

      {/* Modal Component */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <span className={styles.closeModal} onClick={closeModal}>
              &times;
            </span>
            <h2>Book a Demo</h2>
            {/* Form inside modal */}
            <form className={styles.demoForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />
                {formErrors.fullName && <p className={styles.error}>{formErrors.fullName}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="course">Select Course:</label>
                <select
                  id="course"
                  name="course"
                  value={selectedCourse}
                  onChange={handleCourseChange} // Handle course selection change
                  required
                >
                  <option value="">Select a Course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                {formErrors.course && <p className={styles.error}>{formErrors.course}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  required
                />
                {formErrors.phone && <p className={styles.error}>{formErrors.phone}</p>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDemo;
