import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 2rem 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    .location {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-300']};
      font-size: 14px;
      font-weight: 600;
      padding: 0.5rem;
      border-radius: ${(props) => props.theme.radius};
    }

    .btn-cart {
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-300']};
      padding: 0.5rem;
      border-radius: ${(props) => props.theme.radius};
      position: relative;

      span {
        font-size: 14px;
        font-weight: 600;
        position: absolute;
        text-align: center;
        top: -8px;
        right: -8px;
        color: ${(props) => props.theme['yellow-100']};
        background: ${(props) => props.theme['yellow-300']};
        padding: 0.1rem;
        border-radius: 50%;
        width: 20px;
      }
    }
  }
`;
