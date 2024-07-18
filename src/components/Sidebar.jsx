import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import styles from './style.module.css';
import { SidebarData } from './SidebarData';

import linkedln from '../assets/images/linkedin1.svg';
import githubicon from '../assets/images/github.svg';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
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
              className={`${styles.row} ${location.pathname === val.path ? styles.active : ''}`}
            >
              <Link to={val.path} className={styles.title}>
                {val.title === 'Blog' ? <span className={styles.new}>{val.title}</span> : <span>{val.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.socials}>
          <a href="https://https://www.linkedin.com/in/nina-spio-quansah-b74268167/" target="_blank" rel="noreferrer">
            <img src={linkedln} alt="linkedinicon" className={styles.linkedin} />
          </a>
          <a href="https://www.github.com/nsquansah/">
            <img src={githubicon} alt='github' className={styles.github} />
          </a>
        </div>
      </div>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </>
  );
}

export default Sidebar;
