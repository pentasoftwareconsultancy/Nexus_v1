import { Helmet } from "react-helmet";
import About from "../../Components/Home/About/About";
import Course from "../../Components/Home/Course/Course";
import Home from "../../Components/Home/Hero/Hero";
import UpcomingBatches from "../../Components/Home/UpcomingBatches/UpcomingBatches";
import WhyJoin from "../../Components/Home/WhyJoin/WhyJoin";
import Review from "../../Components/Review/Review";
import FadeInSection from "../../Hookes/useInView";
import PartnerPage from "../Partner/PartnerPage";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Nexus Corporate Training Center - Home </title>
        <meta
          name="description"
          content="Best Software training institute in pune and certification provider offers professional training across India. Advance your career today!| Best Software training institute in Pune | Power BI, Python, SAP"
        />
        <meta
          name="keywords"
          content="Best Software training institute in pune |Best Software training institute in Pune | Power BI, Python, SAP"
        />
      </Helmet>
      <FadeInSection>
        <Home />
      </FadeInSection>
      <FadeInSection>
        <PartnerPage />
        <UpcomingBatches />
      </FadeInSection>
      <FadeInSection>
        <Course />
      </FadeInSection>
      <FadeInSection>
        <WhyJoin />
      </FadeInSection>
      <FadeInSection>
        {/* <UpcomingEvents /> */}
        <About />
        <Review />
      </FadeInSection>
    </div>
  );
}

export default HomePage;
