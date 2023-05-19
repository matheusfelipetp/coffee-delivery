import styled from 'styled-components';

export const LayoutStyled = styled.div`
  background: ${(props) => props.theme['gray-100']};
  height: 100vh;
  width: 100%;
`;

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
