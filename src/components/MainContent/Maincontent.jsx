import React from "react";
import styles from './MainContent.module.css';

function MainContent() {
  return (
    <div className={styles.maincontent}>
      <h1 className={styles.main}>
        Hi,
      </h1>
      <div>
        <h2 className={styles.submain}>
            I'm Nina
        </h2>
      </div>
       
    </div>
  );
}

export default MainContent;
