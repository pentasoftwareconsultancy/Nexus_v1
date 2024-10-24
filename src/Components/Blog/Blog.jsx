
import FeedbackCard from '../Blogs/BlogCards/FeedbackCard';
import BlogHero from ".././Blogs/BlogsHero/Hero";
import styles from "./Blog.module.css";
// import FeedbackSlider from "../Blogs/FeedbackSlider/FeedbackSlider";

function Blog() {
  return (
    <div className={styles.BlogContainer}>

      <BlogHero/>
      <h1>Student Feedback</h1>

      <FeedbackCard/>
      
    </div>
  )
}

export default Blog;
