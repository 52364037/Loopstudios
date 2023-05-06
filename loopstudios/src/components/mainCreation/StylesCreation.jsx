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
    h3{
        font-family: 'Josefin Sans', sans-serif;
        font-size: 3rem;
        font-weight: 300;
        text-transform: uppercase;
    } 
    
    @media screen and (max-width: 375px) {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0;
        gap: 0;
        margin: 3rem 1rem 1rem;
        h3{
            font-size: 2rem;
        }
        .card__container span{
            position: absolute;
            bottom: 20%;
            left: 4%;
            z-index: 10;
            color: rgb(255, 255, 255);
            font-family: "Josefin Sans", sans-serif;
            font-size: 23px;
            line-height: 28px;
            text-transform: uppercase;
            transition: all 0.3s ease 0s;
            max-width: 45%;
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
        font-size: 30px;
        line-height: 35px;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;
        max-width: 70%;
    }
    .card__container img{
        border-radius: 0.25rem;
        box-shadow: 0 0.3125rem 0.3125rem -0.0625rem rgba(0,0,0,0.6);;
    }
    .card__container:hover{
        opacity: 0.6;
        cursor: pointer;
        img{
            filter: blur(1px);
        }
        span{
            opacity: 2;
            transform: translate(9%, 14%) scale(1.1);
        }
    }
`;

export const StyleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 375px) {
        .boton__mobile{
            display: none;
        }
        justify-content: center;
    }
`;

export const StyleButtonMobile = styled.div`
    display: none;
    @media screen and (max-width: 375px){
        display: flex;
        justify-content: center;
    }
`;


