import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom
import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import BatchesPage from "./Pages/BatchesPage/BatchesPage";
import ContactUsPage from "./Pages/ContactUsPages/ContactUsPage";
import HomePage from "./Pages/HomePage/HomePage";
import ExamPanel from "./Components/Exam/ExamPanel";
import BookDemo from "./Components/Home/bookdemo/bookdemo";
import Details from "./Components/Home/UpcomingBatches/details"
import LearnMore from "./Components/Home/learnMore/learnMore";
import ExamPages from "./Pages/ExamPages/ExamPages";
import GalleryPages from "./Pages/GalleryPages/GalleryPages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/batches" element={<BatchesPage />} />
        <Route path="/exam" element={<ExamPanel />} />
        <Route path="/examDetails" element={<ExamPages />} />
        <Route path="/learnMore" element={<LearnMore />} /> 
        <Route path="/bookdemo" element={<BookDemo />} />
        <Route path="/details" element={<Details />} />
        <Route path="/gallery" element={<GalleryPages />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
