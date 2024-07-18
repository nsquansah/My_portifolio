import React from 'react';
import styles from './DownloadButton.module.css';

const DownloadButton = () => {
  return (
    <div className={styles.wrap}>
      
      <button className={styles.button}>Download CV</button>
    </div>
  );
};

export default DownloadButton;
