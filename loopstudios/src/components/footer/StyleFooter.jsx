import styled from 'styled-components';

export const StylesFooter = styled.div`
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 3rem 10rem;
  ul {
    list-style: none;
    display: flex;
    justify-content: end;
    gap: 15px;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
  }
    /* Media query for 375px */
    @media (max-width: 375px) {
      display: block;
      text-align: center;
      padding: 15px;
      ul {
        gap: 15px;
        display: inline;
        li {
          display: inline;
          gap: 15px;
          img {
            padding: 10px;
          }
        }
      }
      .burguer-btn {
    display: none;
  }

    }
`;
