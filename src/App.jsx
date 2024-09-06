import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import HomePage from "./Pages/HomePage/HomePage";
import ContactUsPage from "./Pages/ContactUsPages/ContactUsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
