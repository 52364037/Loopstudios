import styled from 'styled-components';
import imgHeader from '../../assets/img/imagen-header.jpg';
import imgHeaderMobile from '../../assets/img/mobile/image-hero.jpg';

export const StyleImage = styled.div`
  background-image: url(${imgHeader});
  background-size: cover;
  height: 650px;
  background-position: center;
  h1 {
    border: 1px solid rgb(255, 255, 255);
    display: flex;
    align-items: center;
    color: rgb(255, 255, 255);
    width: 44%;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    font-size: 63px;
    padding: 2rem;
    margin-left: 10rem;
    margin-top: 5rem;
  }
      /* Media query for 375px */
      @media (max-width: 375px) {
        background-image: url(${imgHeaderMobile});
        h1 {
          font-size: 35px;
          margin-left: 1.5rem;
          margin-right: 1.5rem;
          width: auto;
          margin-top: 9rem;
        }
      }
`;
