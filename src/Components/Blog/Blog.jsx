import styles from './Blog.module.css';
import FeedbackCard from '../Blogs/BlogCards/FeedbackCard';
import Hero from '../Home/Hero/Hero';

function Blog() {
  return (
    <div className={styles.BlogContainer}>
     
      <Hero/>
      <FeedbackCard/>
    </div>
  )
}

export default Blog;
