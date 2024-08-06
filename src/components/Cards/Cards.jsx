import React from 'react';
import styles from './Cards.module.css';
import { CardsData } from './CardsData';

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      {CardsData.map((card, index) => (
        <CardsData
          key={index}
          title={card.title}
          content={card.content}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default Cards;
