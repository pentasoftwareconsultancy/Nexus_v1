import FeedbackCard from "../Blogs/BlogCards/FeedbackCard";
import BlogHero from ".././Blogs/BlogsHero/Hero";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.BlogContainer}>
      <BlogHero />
      <h2>Student Feedback</h2>
      <FeedbackCard />
    </div>
  );
}



export default Blog;
