import styled from 'styled-components';

export const StylesButton = styled.div`
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
  text-transform: uppercase;
  button {
    text-transform: uppercase;
    font-family: 'Alata', sans-serif;
    font-size: 15px;
    padding: 0.9rem 2.5rem 0.75rem;
    align-items: center;
    border: 1px solid #000;
    background-color: #fff;
    transition: all 300ms cubic-bezier(.215, .61, .355, 1);
    cursor: pointer;
    letter-spacing: 5px;
    :hover {
      color: #fff;
      background-color: #000;
    }
  }
`;
