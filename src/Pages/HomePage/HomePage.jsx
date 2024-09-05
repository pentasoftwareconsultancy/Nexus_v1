import Course from "../../Components/Home/Course/Course";
// import Footer from "../../Components/Home/Footer/Footer";
import Home from "../../Components/Home/Hero/Hero";
import UpcomingBatches from "../../Components/Home/UpcomingBatches/UpcomingBatches";
import UpcomingEvents from "../../Components/Home/UpcomingEvents/UpcomingEvents";
import WhyJoin from "../../Components/Home/WhyJoin/WhyJoin";

function HomePage() {
  return (
    <div>
      <Home />
      <UpcomingBatches />
      <Course />
      <WhyJoin/>
      <UpcomingEvents/>
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
