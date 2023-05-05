import styled from 'styled-components';

export const StyleDivCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.7rem;
    @media screen and (max-width: 375px) {
        grid-template-columns: repeat(1, 1fr);
    }
    
`;
export const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 7.5rem 11.5rem;
    gap: 1.8rem;   
    
    @media screen and (max-width: 375px) {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0;
        h3{
            font-size: 2rem;
        }
        button{
            display: none;
        }
    }
`;
export const StyleCard = styled.div`
    width: 100%;
    cursor: pointer;
    figure{
        width: 100%;
    }
    img{
        width: 100%;
    }
    position: relative;
    span{
        position: absolute;
        bottom: 9%;
        left: 14%;
        z-index: 10;
        color: rgb(255, 255, 255);
        font-family: "Josefin Sans", sans-serif;
        font-size: 35px;
        line-height: 35px;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;
    }
    /* .card:nth-child(2){
        width: 10rem;
    } */
`;


