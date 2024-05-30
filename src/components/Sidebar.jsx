import React from 'react';
import '../App.css';
import styles from './style.module.css';
import { SidebarData } from './SidebarData';
import facebookicon from '../assets/images/facebookicon.jpg';
import instaicon from '../assets/images/instaicon.jpg';
// import whatsappicon from '../assets/images/whatsappicon.jpg';
import github from '../assets/images/github.svg';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarheader}>
        <div>
          <h1 className={styles.symbol}>N</h1>
          <h2 className={styles.name}>Nina</h2>
          <h3 className={styles.mytitle}>Web Developer</h3>
        </div>
      </div>
      <ul className={styles.sidebarlist}>
        {SidebarData.map((val, key) => (
          <li
            key={key}
            className={styles.row}
            id={window.location.pathname === val.path ? "active" : ""}
            onClick={() => {
              window.location.pathname = val.path;
            }}
          >
          <div className={styles.title}>
              {val.title === 'Blog' && <span className={styles.new}>{val.title}</span>}
              
              {val.title !== 'Blog' && <span>{val.title}</span>}
              
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.socials}>
        <a href="https://www.facebook.com/nina.rosenwald.3" target="_blank" rel="noreferrer">
          <img src={facebookicon} alt="facebookicon" className={styles.facebookicon} />
        </a>
        <a href="https://www.instagram.com/ninaspioquansah/" target="_blank" rel="noreferrer">
          <img src={instaicon} alt="instagramicon" className={styles.instaicon} />
          </a>
         
        <a href="https://www.github.com/nsquansah/">
        <img src={github} alt='github' className={styles.github} />
        </a>
        
        </div>
        
    </div>
    
  );
}

export default Sidebar;
