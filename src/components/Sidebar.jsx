import React from 'react';
import '../App.css';
import styles from './style.module.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarheader}>
        <div>
          <h1 className={styles.symbol}>N</h1>
          <h2 className={styles.name}>Nina</h2>
          <h3 className={styles.title}>Web Developer</h3>
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
            <div id="title">{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
