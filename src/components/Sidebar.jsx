import React from 'react';
import '../App.css';
import styles from './style.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarheader}>
        <div>
          <h1 className={styles.symbol}> N</h1> 
          <h2 className={styles.name}>Nina</h2>
          <h3 className={styles.title}>Web Developer</h3>
        </div>
        <div>
          
          </div>
        
      </div>
      {/* Add more content for your sidebar here */}
    </div>
  );
}

export default Sidebar; // Use default export
