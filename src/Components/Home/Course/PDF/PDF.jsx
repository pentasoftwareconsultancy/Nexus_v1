import React from 'react'
import styles from './PDF.module.css'
function PDF() {
  return (
    <div>
      {/* <h2>Download Syllabus</h2> */}
      <a href="src\Components\Home\Course\PDF\Dhanashree Sonune.pdf" download>
        <button className={styles.btn}>Download PDF</button>
      </a>
    </div>
  )
}

export default PDF;
