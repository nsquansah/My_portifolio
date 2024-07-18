// src/pages/CvPage/index.jsx

import styles from './style.module.css';
import DownloadButton from '../../components/DownloadButton';

import React from 'react'

export const CvPage = () => {
  return (
    <div className={styles.CvPage}> 
      <div className={styles.leftpart}>
        <h1 className={styles.title}>NINA SPIO QUANSAH </h1>
        <h2 className={styles.subtitle}>Expert Frontend developer and a Social Entrepreneur.</h2>
        <h3 className={styles.subtitle2}>
        Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and scalable products regardless of stack.
        </h3>
        <hr className={styles.line}/>
        <h2 className={styles.subtitle3}>Experience</h2>
        <hr className={styles.line2}/>
        <p className={styles. jobparagraph1}>
         A highly skilled and motivated individual with a background in Chemistry, transitioned into  tech and thriving as a Frontend Developer. I have a passion for creating user-friendly and accessible web experiences.  
        </p>
        

{/* curent job */}
<p className={styles. jobparagraph}>
          <h3 className={styles.subtitle4}><span className={styles.jobtitle}>Women Empowerment League</span> - Social Entrepreneur.<span className={styles.date1}> Ongoing</span></h3>
        <ul>
          <li className={styles.list}>Conduct entrepreneurial skill training, financial literacy and soft skill training to girls and youth in rural
          or marginalized communities.</li>
          <li className={styles.list}> Assist girls to start a sustainable business by mentoring girls, home visiting frequently to ensure they
          are thriving.</li>
          <li className={styles.list}>Build long lasting and impactful relationships in various communities to drive talents to the
          organization.</li>
          <li className={styles.list}>Manage and mentor talents through their startup businesses to foster independency and decrease
          poverty.</li>
        </ul>
        </p>


{/* first job */}

        <p className={styles. jobparagraph}>
          <h3 className={styles.subtitle4}><span className={styles.jobtitle}>Topdog Africa</span> - Client Service Executive.<span className={styles.date2}>2021 - Present</span></h3>
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
        <h3 className={styles.subtitle4}><span className={styles.jobtitle}>PhytoScience Limited Ghana</span> - Customer care.<span className={styles.date3}>2021 - Present</span></h3>
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



{/* third */}
<p className={styles. jobparagraph}>
        <h3 className={styles.subtitle4}><span className={styles.jobtitle}>Lead for Ghana</span> - Educator / community developer.<span className={styles.date4}>2017 - 2019</span></h3>
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
        


{/* fourth */}
        <p className={styles. jobparagraph}>
        <h3 className={styles.subtitle4}><span className={styles.jobtitle}>MEDA GHANA</span> - Enumerator.<span className={styles.date5}> 2016</span></h3>
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
        <h3 className={styles.subtitle4}><span className={styles.jobtitle}>Dufie Memorial Hospital</span> - Administrator.<span className={styles.date6}>2015 - 2017</span></h3>
        <ul>
          <li className={styles.list}>Providing strategic and lucrative ideas to maintain and repair the physical facility and represent the
          hospital at investors meeting.</li>
          <li className={styles.list}>Supporting various sectors under the hospitals administration to work productively and manage the
          hospitals internal revenue, customer care and office management, increasing the productivity in the
          hospital by 80%, leading to effective healthcare, encouraging frequent visitation of pregnant women and
          indigenes in rural areas to the hospital decreasing maternal mortality by 70% at the end of 2017.</li>
          <li className={styles.list}> Recruit credible and talented health personnel to join the team.</li>
          <li className={styles.list}>Collaborate with community stakeholders to work together to ensure the development of the lives of the
          youth in the locality through organizing educative programs for sensitization and skill development</li>
          <li className={styles}>Drawing budgets for procurements needed for the effective running of the hospital.</li>
        </ul>
        </p>

      </div>
      <div className={styles.rightpart}>
        <DownloadButton />
        {/* <h2 className={styles.subtitle5}>Ghana.</h2> */}
        {/* <hr className={styles.line3}/> */}

        
      <ul className={styles.skills}>
        <h2 className={styles.coretech}>Core Technologies</h2>
        <hr className={styles.line3}/>
        <li className={styles.skill}>HTML</li>
        <li className={styles.skill}>CSS</li>
        <li className={styles.skill}>JavaScript</li>
        <li className={styles.skill}>React</li>
        <li className={styles.skill}>Node.js</li>
        <li className={styles.skill}>Typescript</li>
        {/* <li className={styles.skill}>MongoDB</li> */}
        <li className={styles.skill}>Git</li>
        <li className={styles.skill}>GitHub</li>
        </ul>

        <ul className={styles.otherskills}>
        <h2 className={styles.otherskill}>Others:</h2>
        <hr className={styles.line3}/>

        <li className={styles.skill}>Bootstrap</li>
        <li className={styles.skill}>Design Systems</li>
        <li className={styles.skill}>SE Optimization</li>
        <li className={styles.skill}>Web Accessibility</li>
        <li className={styles.skill}>Responsive Design</li>
        <li className={styles.skill}>APIs Integration</li>
        </ul>
      </div>
    
    </div>
  );
}

export default CvPage