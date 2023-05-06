import React from 'react'
import { cards } from '../data/Images';
import { StyleDivCard, StyleCard, StyleContainer } from './StylesCreation';
import Button from '../button/Button';
import { useState } from 'react';
import { useEffect } from 'react';

const MainCreation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getImageSource = (image) => {
    return windowWidth <= 375 ? image.mobileImg : image.desktopImg;
  };

  return (
    <section className="creations">
      <StyleContainer>
        <Button/>
        <StyleDivCard>
          {cards.map((card, index)=>(
            <StyleCard key={index}>
              <div className='card__container'>
                <figure>
                  <img src={getImageSource(card)} alt={card.alt}/>
                </figure>
                <span>{card.title}</span>
              </div>
            </StyleCard>
          ))}
        </StyleDivCard>
      </StyleContainer>
    </section>
  )
}

export default MainCreation
