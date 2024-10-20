import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom
import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import BatchesPage from "./Pages/BatchesPage/BatchesPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ContactUsPage from "./Pages/ContactUsPages/ContactUsPage";
// import ExamPages from "./Pages/ExamPages/ExamPages";
import LearnMore from "./Components/Home/Course/learnMore/learnMore";
import GalleryPages from "./Pages/GalleryPages/GalleryPages";
import HomePage from "./Pages/HomePage/HomePage";
import BlogDetaills from "./Components/Blogs/BlogDetails/BlogDetails";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/batches" element={<BatchesPage />} />
      
        <Route path="/learnMore" element={<LearnMore />} /> 
        <Route path="/gallery" element={<GalleryPages />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/BlogDetaills/:id" element={<BlogDetaills />} />

          {/* <Route path="/exam" element={<ExamPanel />} />
        <Route path="/examDetails" element={<ExamPages />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
