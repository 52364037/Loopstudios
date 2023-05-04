import styled from 'styled-components';
import imgHeader from '../../assets/img/imagen-header.jpg';
export const StyleImage = styled.div`
background-image: url(${imgHeader});
background-size: cover;
height: 650px;
h1 {
  border: 1px solid #fff;
  color: #fff;
  width: 35%;
  font-family: 'Alata', sans-serif !important;
  font-weight: 300;
  font-size: 45px;
  padding: 2rem;
  margin-left: 10rem;
  margin-top: 5rem;
}
`;
