import styled from 'styled-components';

export const StylesNav = styled.nav`
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.padding};
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
  gap: 20px;
  .line {
    width: 40px;
    height: 2px;
    background-color: white;
    margin: auto;
    padding: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    transition: width 400ms cubic-bezier(.075, .82, .165, 1);
    margin-top: 1rem;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    li:hover {
      .line {
      visibility: visible;
      margin-top: 1rem;
      }
    }
  }

  img {
    margin: ${props => props.margin};
  }
  .burguer-btn {
    display: none;
  }

  /* Media query for 375px */
  @media (max-width: 375px) {
    padding: 1.5rem;
    ul {
      display: none;
    }
    .burguer-btn {
    display: flex;
  }

  }
`;

export const StylesMenuBurger = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 100;
  padding: 2rem;
  ul {
    font-family: 'Josefin Sans', sans-serif;
    list-style: none;
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 3rem;
    li {
      margin-bottom: 1rem;
    }
}
`;

export const StylesNavCloseBtn = styled.div`
display: flex;
justify-content: space-between;
`
