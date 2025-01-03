import React from 'react';
import styles from './PDF.module.css';

function PDF({ filePath, fileName }) {
  return (
    <div>
      <a href={filePath} download={fileName}>
        <button className={styles.btn}>Download PDF</button>
      </a>
    </div>
  );
}

export default PDF;
