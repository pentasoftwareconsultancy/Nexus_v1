import { Helmet } from "react-helmet";
import styles from "./Blog.module.css"
import FeedbackCard from '../Blogs/BlogCards/FeedbackCard';
import Hero from '../Home/Hero/Hero';
// import FeedbackSlider from "../Blogs/FeedbackSlider/FeedbackSlider";

function Blog() {
  return (
    <div className={styles.BlogContainer}>

      <Hero/>
      <FeedbackCard/>
      <h1>Student Feedback</h1>
      {/* <FeedbackSlider feedbacks={feedbacks} /> */}
    </div>
  )
}

export default Blog;
