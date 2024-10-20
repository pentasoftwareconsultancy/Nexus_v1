import { Helmet } from "react-helmet";
import Course from '../../Components/Home/Course/Course';
import Home from '../../Components/Home/Hero/Hero';
import UpcomingBatches from '../../Components/Home/UpcomingBatches/UpcomingBatches';
import WhyJoin from '../../Components/Home/WhyJoin/WhyJoin';
import FadeInSection from '../../Hookes/useInView';
import PartnerPage from '../Partner/PartnerPage';
import Review from "../../Components/Review/Review";


function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Nexus Corporate Training Center - Home </title>
        <meta
          name="description"
          content="Know more about Nexus "
        />
        <meta
          name="keywords"
          content="Nexus"
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

        <Review />
      </FadeInSection>
    </div>
  );
}

export default HomePage;
