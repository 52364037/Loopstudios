import styled from 'styled-components';

export const StyleHeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    h2{
    color: #000;
    font-weight: 400;
    font-size: 1.9rem;
    justify-content: center;
    text-transform: uppercase;
    }
    button{
        border: none;
        cursor: pointer;
        position: relative;
        letter-spacing: .125rem;
        border: solid 0.0625rem #000;
        text-transform: uppercase;
        padding: 0.4375rem 1.875rem;
        background-color: transparent;
        transition: all .3s ease-in-out;
    }
    
`;
export const StyleDivCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(12.5rem, 1fr));
    /* grid-template-columns: repeat(4,1fr); */
`;
export const StyleContainer = styled.div`
    padding: 0 3rem 20rem;
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
    
`;


