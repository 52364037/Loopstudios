 
import styled from 'styled-components';
import ImgStyledMainInterctive from '../../assets/img/thumbnail.jpg';


export const StyleImageInteractive = styled.div`
background-image: url(${ImgStyledMainInterctive});
background-size: cover;
height: 550px;
width: 750px;
margin: 100px;
position: relative;
/* Media query for 375px */
@media (max-width: 375px) {
      display: flex;
      top: 0px;
      left: 0px;
      padding: 10px;
      width: auto;
      height: 300px;
      margin: 1rem;
      justify-content: center;
      margin-top: 3rem;

}
`;
export const StyleTextoInteractive = styled.div`
    padding: 6rem;
    display: block;
    justify-content: center;
    max-width: 30rem;
    background: white;
    box-sizing: content-box;
    height: auto;
    position: absolute;
    bottom: -42%;
    left: 43%;
    h2 {
        display: flex;
        text-align: start;
        font-weight: 10px; 
        font-family: 'Josefin Sans', sans-serif;
        font-size: 50px;
        margin-bottom: 1rem; 
        line-height: 1;  
        color: #212529;
        
    }
    p {
        font-family: 'Alata', sans-serif;
        color: #696969;
    }
/* Media query for 375px */
@media (max-width: 375px) {
      display: block;
      position: unset;
      text-align: center;
      padding: 1.5rem;
      margin: 1rem;
      max-width: 350px;
      h2 {
        font-size: 2rem;
        text-align: center;
      }

}
`;









