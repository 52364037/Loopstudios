import React from 'react'
import { cards } from '../data/Images';
import { StyleDivCard, StyleCard, StyleHeaderMain, StyleContainer } from './StylesCreation';
const MainCreation = () => {
  return (
    <section className="creations">
      <StyleContainer>
        <StyleHeaderMain>
          <h2>our creations</h2>
          <button>see all</button>
        </StyleHeaderMain>
        <StyleDivCard>
          {cards.map((card)=>(
            <StyleCard>
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
