import styled from "styled-components";
/**
 * Styled-Components é uma biblioteca capaz de gerar CSS-IN-JS (pesquisar mais sobre), isso dá um ganho enorme em questão de themificação da aplicação pois aqui podemos criar lógica no css de acordo com o que quisermos
 */
export const Container = styled.div`
  border: 2px solid black;
  margin-bottom: 30px;
  p:not(:first-child) {
      margin-top: 20px;
  }
`;
