import React from 'react'
import styles from './style.module.css';


// read json file from data folder


const CardsData = JSON.parse('../../data/CardsData.json')


const Cards = ({ title, content, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt='project' />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
// export const ProjectCard = () => {
//   return (
//     CardsData.map((card, index) => (
//       <Cards
//         key={index}
//         title={card.title}
//         content={card.content}
//         imageUrl={card.imageUrl}
//       />
//     ))

   
//   )
// }
// export default ProjectCard;
}


const Project = ({data}) => {
  return (
    <div className={styles.cardsContainer}>
      {data.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          content={card.content}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export const ProjectCard = () => {
  return (
    <Project data={CardsData} />
  );
}
export default ProjectCard;
