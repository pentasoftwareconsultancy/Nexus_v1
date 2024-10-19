import { Helmet } from "react-helmet";

import FeedbackCard from '../Blogs/BlogCards/FeedbackCard';
import Hero from '../Home/Hero/Hero';
import styles from "./Blog.module.css"
// import FeedbackSlider from "../Blogs/FeedbackSlider/FeedbackSlider";

function Blog() {
  return (
    <div className={styles.BlogContainer}>

      <Hero/>
      <FeedbackCard/>
      <h1>Student Feedback</h1>
      
    </div>
  )
}

export default Blog;
