 
import styled from 'styled-components';
import ImgStyledMainInterctive from '../../assets/img/thumbnail.jpg';


export const StyleImageInteractive = styled.div`
background-image: url(${ImgStyledMainInterctive});
background-size: cover;
height: 550px;
width: 750px;
margin: 120px;
position: relative;
`;
export const StyleTextoInteractive = styled.div`
    padding: 6rem;
    display: block;
    justify-content: center;
    max-width: 30rem;
    background: white;
    box-sizing: content-box;
    height: auto;
    position: relative;
    top: -430px;
    left: 750px;
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
      top: -50px;
      left: 180px;
      padding: 70px;

}
`;









