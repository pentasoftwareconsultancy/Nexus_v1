import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom
import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import BatchesPage from "./Pages/BatchesPage/BatchesPage";
import HomePage from "./Pages/HomePage/HomePage";
import ContactUs from "./Components/ContactUs/ContactUs";
import ExamPages from "./Pages/ExamPages/ExamPages";
import ExamPanel from "./Components/Exam/ExamPanel"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/batches" element={<BatchesPage />} />
        <Route path="/exam" element={<ExamPanel />} />
        <Route path="/examDetails" element={<ExamPages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
