import styled from 'styled-components';
export const StylesNav = styled.nav`
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;

