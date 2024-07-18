import React from "react";
import styles from './MainContent.module.css';

function MainContent() {
  const handleContactClick = () => {
    window.location.href = 'mailto:ninaspioquansah@gmail.com?subject=Contact&body=Hello Nina,';
  };

  return (
    <div className={styles.maincontent}>
      <h1 className={styles.main}>
        Hi,
      </h1>
      <div>
        <h2 className={styles.submain}>
          I'm <span className={styles.Nstyle}>N</span>ina,
        </h2>
        <h2 className={styles.submain}>
          a web developer  
          <p className={styles.sign1}>  
          <p className={styles.addition}>
           <i> and a Social Entrepreneur.</i>
          </p>
          &lt;/p&gt;
        </p>
        </h2>
      </div>
      
      <button className={styles.button} onClick={handleContactClick}>Contact Me</button>
    </div>
  );
}

export default MainContent;