// src/pages/CvPage/index.jsx

import styles from './style.module.css';

import React from 'react'

export const CvPage = () => {
  return (
    <div className={styles.CvPage}> 
      <div>
        <h1 className={styles.title}>NINA SPIO QUANSAH </h1>
        <h2 className={styles.subtitle}>Expert Frontend developer and a Social Entrepreneur.</h2>
        <h3 className={styles.subtitle2}>
        Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and scalable products regardless of stack.
        </h3>
        <hr className={styles.line}/>
        <h2 className={styles.subtitle3}>Experience</h2>
        <hr className={styles.line2}/>

{/* first job */}

        <p className={styles. jobparagraph}>
          <h3 className={styles.subtitle4}><span className={styles.jobtitle}>Topdog Africa</span> - Client Service Executive.<span className={styles.date}>2021 - Present</span></h3>
        <ul>
          <li className={styles.list}>Drove client satisfaction by producing
          high-quality products/services.</li>
          <li className={styles.list}>Collaborated closely with internal teams
          to deliver services aligned with client
          objectives.</li>
          <li className={styles.list}> Guided new clients through seamless on-
          boarding for a comprehensive understanding of our services.</li>
          <li className={styles.list}>Crafted detailed reports and dynamic
          presentations to keep clients informed of
          campaign progress.</li>
        </ul>
        </p>
{/* second job */}
        <p className={styles. jobparagraph}>
        <h3 className={styles.subtitle4}><span className={styles.jobtitle}>MEDA GHANA</span> - Enumerator.<span className={styles.date}>Jan 2016 – October 2016</span></h3>
        <ul>
          <li className={styles.list}>Conduct surveys or interviews following
          established protocols and guidelines.</li>
          <li className={styles.list}>Report any encountered issues or challenges during data collection to
          supervisors.</li>
          <li className={styles.list}> Ensure confidentiality and privacy of survey participants' information.</li>
          <li className={styles.list}>Utilize technology or digital tools as necessary for data collection and
          recording.</li>
        </ul>
        </p>

{/* third job */}
        <p className={styles. jobparagraph}>
        <h3 className={styles.subtitle4}><span className={styles.jobtitle}>Topdog Africa</span> - Client Service Executive.<span className={styles.date}>2021 - Present</span></h3>
        <ul>
          <li className={styles.list}>Drove client satisfaction by producing
          high-quality products/services.</li>
          <li className={styles.list}>Collaborated closely with internal teams
          to deliver services aligned with client
          objectives.</li>
          <li className={styles.list}> Guided new clients through seamless on-
          boarding for a comprehensive understanding of our services.</li>
          <li className={styles.list}>Crafted detailed reports and dynamic
          presentations to keep clients informed of
          campaign progress.</li>
        </ul>
        </p>
{/* fourth job */}
        <p className={styles. jobparagraph}>
        <h3 className={styles.subtitle4}><span className={styles.jobtitle}>PhytoScience Limited Ghana</span> - Customer care.<span className={styles.date}>2021 - Present</span></h3>
        <ul>
          <li className={styles.list}>Drove client satisfaction by producing
          high-quality products/services.</li>
          <li className={styles.list}>Collaborated closely with internal teams
          to deliver services aligned with client
          objectives.</li>
          <li className={styles.list}> Guided new clients through seamless on-
          boarding for a comprehensive understanding of our services.</li>
          <li className={styles.list}>Crafted detailed reports and dynamic
          presentations to keep clients informed of
          campaign progress.</li>
        </ul>

{/* fifth job */}
        </p><p className={styles. jobparagraph}>
        <h3 className={styles.subtitle4}><span className={styles.jobtitle}>Lead for Ghana</span> - Educator / community developer.<span className={styles.date}>2021 - Present</span></h3>
        <ul>
          <li className={styles.list}>Drove client satisfaction by producing
          high-quality products/services.</li>
          <li className={styles.list}>Collaborated closely with internal teams
          to deliver services aligned with client
          objectives.</li>
          <li className={styles.list}> Guided new clients through seamless on-
          boarding for a comprehensive understanding of our services.</li>
          <li className={styles.list}>Crafted detailed reports and dynamic
          presentations to keep clients informed of
          campaign progress.</li>
        </ul>
        </p>
        
      </div>
    </div>
  )
}

export default CvPage