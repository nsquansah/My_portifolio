import React from 'react';
import styles from './Mousetrail.module.css'

const Mousetrail = ({ x, y }) => {
  const style = {
    left: `${x}px`,
    top: `${y}px`,
    background: `radial-gradient(circle, rgba(255,0,150,0.5) 10%, rgba(0,229,255,0.5) 80%)`,
  };
  return <div className={styles.trail} style={style}></div>;
};

export default Mousetrail;
