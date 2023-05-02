import styled from 'styled-components';

export const StylesButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 9rem;
  button {
    padding: 0.9rem 3rem 0.75rem;
    align-items: center;
    border: 1px solid #000;
    background-color: #fff;
    transition: all 300ms cubic-bezier(.215, .61, .355, 1);
    cursor: pointer;
    :hover {
      color: #fff;
      background-color: #000;
    }
  }
`;
