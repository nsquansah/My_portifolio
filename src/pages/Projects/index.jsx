import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import barbsal from '../../assets/images/barbsal.jpeg';
import kcoat from '../../assets/images/kcoat.png';
import travelapp from '../../assets/images/travelapp.png';

const CardsData = [
  {
    title: "BarbSal _MS",
    content: "View more",
    backContent: "This application serves as a digital platform that connects customers with salons, spas, or hairdressers, facilitating the booking process and enhancing the overall customer experience.",
    imageUrl: barbsal,
    linkUrl: "https://github.com/nsquansah/BarbSal_Ms"
  },
  {
    title: "KCOAT E-COMMERCE",
    content: "View more",
    backContent: "A dynamic Website created to solve the constraints of KCOAT's WhatsApp-centric sales model. Utilizing React.js for frontend development and MYSQL for back-end database.",
    imageUrl: kcoat,
    linkUrl: "https://kcoat-ecommerce-react-app.vercel.app/"
  },
  {
    title: "VIDEOVERSE",
    content: "View more",
    backContent: "A dynamic platform where users can upload videos, engage with one another, and connect with fellow learners. Powered by Bootstrap for front-end design, PHP, and Postgres for backend functionality, it offers essential features such as video uploading, commenting, and liking.",
    imageUrl: "https://via.placeholder.com/150",
    linkUrl: "https://github.com/mdahwireng/video_verse"
  },
  {
    title: "TRAVEL APP LANDING PAGE",
    content: "View more",
    backContent: "Crafted a visually appealing landing page for a travel app, employing CSS and HTML. This involved blending creativity with technical precision to create an engaging user interface.",
    imageUrl: travelapp,
    linkUrl: "https://example.com/project4"
  }
];

const Cards = ({ title, content, backContent, imageUrl, linkUrl, animate, highlight }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div 
      className={`${styles.card} ${flipped ? styles.flipped : ''} ${animate ? styles.wiggle : ''} ${highlight ? styles.highlight : ''}`}
      onClick={handleFlip}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={imageUrl} className={styles.cardimage} alt='project' />
          <h3 className={styles.cardtitle}>{title}</h3>
          <p className={styles.frontcontent}>{content}</p>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardBackLeft}></div>
          <div className={styles.cardBackRight}>
            <p className={styles.backcontent}>{backContent}</p>
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              <button className={styles.cardButton}>Link</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = ({ data, currentIndex }) => {
  return (
    <div className={styles.cardsContainer}>
      {data.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          content={card.content}
          backContent={card.backContent}
          imageUrl={card.imageUrl}
          linkUrl={card.linkUrl}
          animate={index === 0} // Animate the first card
          highlight={index === 0} // Highlight the next card
        />
      ))}
    </div>
  );
};

export const ProjectCard = () => {
  const [cardsData, setCardsData] = useState(CardsData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardsData(prevCards => {
        const newCards = [...prevCards];
        const firstCard = newCards.shift();
        newCards.push(firstCard);
        return newCards;
      });

      // Update the current index to trigger animations
      setCurrentIndex(prevIndex => (prevIndex + 1) % CardsData.length);
    }, 5000); // 30 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <Project data={cardsData} currentIndex={currentIndex} />;
};

export default ProjectCard;
