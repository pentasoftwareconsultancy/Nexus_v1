import styles from './Blog.module.css';
import FeedbackCard from '../Blogs/BlogCards/FeedbackCard';
import Hero from '../Blogs/BlogsHero/Hero';
import FeedbackSlider from '../Blogs/FeedbackSlider/FeedbackSlider';

const feedbacks = [
  {
    image: 'student1.jpg',
    name: 'John Doe',
    text: 'The course was amazing and helped me get a job at Devcon Software.',
    company: 'Devcon Software',
    package: '12 LPA',
  },
  {
    image: 'student2.jpg',
    name: 'Jane Smith',
    text: 'The guidance provided was extremely helpful and I learned a lot!',
    company: 'Tech Solutions',
    package: '10 LPA',
  },
];


function Blog() {
  return (
    <div className={styles.BlogContainer}>
     
      <Hero/>
      <FeedbackCard/>
      <h1>Student Feedback</h1>
      <FeedbackSlider feedbacks={feedbacks} />
    </div>
  )
}

export default Blog;
