import React from 'react'
import { cards } from '../data/Images';
import { StyleDivCard, StyleCard, StyleContainer } from './StylesCreation';
import Button from '../button/Button';
const MainCreation = () => {
  return (
    <section className="creations">
      <StyleContainer>
        <Button/>
        <StyleDivCard>
          {cards.map((card)=>(
            <StyleCard className='card'>
              <figure>
                <img src={card.desktopImg} alt={card.alt}/>
              </figure>
              <span>{card.title}</span>
            </StyleCard>
          ))}
        </StyleDivCard>
      </StyleContainer>
    </section>
  )
}

export default MainCreation
