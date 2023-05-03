import styled from 'styled-components';

export const StylesFooter = styled.div`
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;
