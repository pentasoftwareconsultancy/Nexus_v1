import { useState, useEffect } from "react";
import styles from "./ExamPanel.module.css";
import questions from "./data"; // Import questions from data.js

const ExamPanel = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    // Check if we need to enter fullscreen mode
    const shouldGoFullscreen = localStorage.getItem("fullscreen") === "true";
    if (shouldGoFullscreen) {
      enterFullscreenMode();
      localStorage.setItem("fullscreen", "false");
    }

    // Event listeners for keyboard shortcuts
    const handleKeydown = (e) => {
      // Prevent new tab (Ctrl+T), close tab (Ctrl+W), and more
      if (
        (e.ctrlKey && (e.key === 't' || e.key === 'w' || e.key === 'n')) ||
        (e.metaKey && (e.key === 't' || e.key === 'w' || e.key === 'n')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'j')) // Dev tools
      ) {
        e.preventDefault();
        alert("Opening new tabs or closing this tab is disabled during the exam.");
      }
    };

    // Event listener for detecting fullscreen exit
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        // If the user exits fullscreen, prompt them back
        enterFullscreenMode();
        alert("You cannot exit fullscreen mode during the exam.");
      }
    };

    // Add event listeners
    window.addEventListener("keydown", handleKeydown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []); // Run only once when the component mounts

  const enterFullscreenMode = () => {
    const examPanelElement = document.getElementById("examPanel");
    if (examPanelElement.requestFullscreen) {
      examPanelElement.requestFullscreen();
    } else if (examPanelElement.mozRequestFullScreen) {
      examPanelElement.mozRequestFullScreen();
    } else if (examPanelElement.webkitRequestFullscreen) {
      examPanelElement.webkitRequestFullscreen();
    } else if (examPanelElement.msRequestFullscreen) {
      examPanelElement.msRequestFullscreen();
    }
  };

  // Rest of your component logic...
  const handleQuestionClick = (questionNumber) => {
    setSelectedQuestion(questionNumber);
  };

  const handleOptionClick = (optionIndex) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [selectedQuestion]: optionIndex,
    }));
  };

  const handleNextClick = () => {
    if (selectedQuestion < questions.length) {
      setSelectedQuestion((prev) => prev + 1);
    }
  };

  const handlePreviousClick = () => {
    if (selectedQuestion > 1) {
      setSelectedQuestion((prev) => prev - 1);
    }
  };

  const currentQuestion = questions[selectedQuestion - 1];

  return (
    <div className={styles.examPanel} id="examPanel">
      <div className={styles.header}>
        <div className={styles.title}>Entrance Exam</div>
        <div className={styles.timer}>Timer: 10:00</div>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.userName}>User Name: Sagar Sir</div>
        <div className={styles.userId}>User ID: 12345</div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.questionSection}>
          <div className={styles.questionHeader}>
            <div className={styles.questionNumber}>
              Question {selectedQuestion}:
            </div>
            <div className={styles.questionText}>{currentQuestion.question}</div>
          </div>
          <div className={styles.options}>
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`${styles.option} ${
                  selectedOptions[selectedQuestion] === index
                    ? styles.selectedOption
                    : ""
                }`}
                onClick={() => handleOptionClick(index)}
              >
                {String.fromCharCode(65 + index)}. {option}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.totalQuestions}>
          {Array.from({ length: 20 }, (_, index) => (
            <div
              key={index + 1}
              className={`${styles.questionNumberBox} ${
                selectedQuestion === index + 1 ? styles.selected : ""
              }`}
              onClick={() => handleQuestionClick(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <button
          className={styles.navButton}
          onClick={handlePreviousClick}
          disabled={selectedQuestion === 1}
        >
          Previous
        </button>
        <button
          className={styles.navButton}
          onClick={handleNextClick}
          disabled={selectedQuestion === questions.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExamPanel;
