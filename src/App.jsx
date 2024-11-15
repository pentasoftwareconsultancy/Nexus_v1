import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import BatchesPage from "./Pages/BatchesPage/BatchesPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ContactUsPage from "./Pages/ContactUsPages/ContactUsPage";
import BlogDetaills from "./Components/Blogs/BlogDetails/BlogDetails";
import LearnMore from "./Components/Home/Course/learnMore/learnMore";
import GalleryPages from "./Pages/GalleryPages/GalleryPages";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/courses" element={<BatchesPage />} />
        <Route path="/learnMore/:courseName" element={<LearnMore />} />
        <Route path="/gallery" element={<GalleryPages />} />
        <Route path="/successs-stories" element={<BlogPage />} />
        <Route path="/blog-details/:id" element={<BlogDetaills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
