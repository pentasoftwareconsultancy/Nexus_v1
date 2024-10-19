import { Helmet } from "react-helmet";

import FeedbackCard from '../Blogs/BlogCards/FeedbackCard';
import Hero from '../Blogs/BlogsHero/Hero';
import styles from './Blog.module.css';

function Blog() {
  return (
    <div className={styles.BlogContainer}>

      <Hero/>
      <FeedbackCard/>
    </div>
  )
}

export default Blog;
