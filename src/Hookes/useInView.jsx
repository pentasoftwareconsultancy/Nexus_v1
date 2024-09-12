import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './FadeInSection.module.css'; // Ensure this is updated with the new CSS

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust visibility threshold
  });

  return (
    <div
      ref={ref}
      className={`${styles.fadeInSection} ${inView ? styles.isVisible : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
