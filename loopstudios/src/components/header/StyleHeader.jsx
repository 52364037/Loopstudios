import styled from 'styled-components';
import imgHeader from '../../assets/img/imagen-header.jpg';
import imgHeaderMobile from '../../assets/img/mobile/image-hero.jpg';

export const StyleImage = styled.div`
  background-image: url(${imgHeader});
  background-size: cover;
  height: 650px;
  h1 {
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    color: #fff;
    width: 45%;
    font-family: 'Alata', sans-serif !important;
    font-weight: 300;
    font-size: 45px;
    padding: 2rem;
    margin-left: 10rem;
    margin-top: 5rem;
  }
      /* Media query for 375px */
      @media (max-width: 375px) {
        background-image: url(${imgHeaderMobile});
        h1 {
          font-size: 35px;
          margin-left: 10px;
          margin-right: 10px;
          width: auto;
          margin-top: 9rem;
        }
      }
`;
