import styled from 'styled-components';
export const StylesNav = styled.nav`
  display: ${props => props.display};
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.padding};
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
  gap: 20px;
  .line {
    width: 40px;
    height: 2px;
    background-color: white;
    margin: auto;
    padding: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    transition: width 400ms cubic-bezier(.075, .82, .165, 1);
    margin-top: 15px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
    cursor: pointer;
    li:hover {
      .line {
      visibility: visible;
      margin-top: 15px;
      }
    }
  }

  img {
    margin: ${props => props.margin};
  }
  .burguer-btn {
    display: none;
  }
  /* Media query for 375px */
  @media (max-width: 375px) {
    padding: 10px;
    ul {
      display: none;
    }
    .burguer-btn {
    display: flex;
  }
  }
`;
