import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom
import "./App.css";
import Footer from "./Components/Home/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import BatchesPage from "./Pages/BatchesPage/BatchesPage";
import ContactUsPage from "./Pages/ContactUsPages/ContactUsPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/batches" element = {<BatchesPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
