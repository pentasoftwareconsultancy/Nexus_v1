import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Router> {/* Wrap the application with Router */}
      <Navbar />
      <Routes> {/* Define the Routes */}
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="/about" element={<AboutUsPage />} /> {/* About Us Page Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
