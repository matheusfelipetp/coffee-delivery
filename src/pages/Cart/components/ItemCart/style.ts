import { styled } from 'styled-components';

export const ItemCartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    max-width: 60px;
  }
`;

export const ItemCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  width: 100%;

  h4 {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-800']};
  }

  .price {
    position: absolute;
    right: 0;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-700']};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  .quantity {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    background: ${(props) => props.theme['gray-400']};
    border-radius: ${(props) => props.theme.radius};

    button {
      display: flex;
      align-items: center;
      border: none;
      background: ${(props) => props.theme['gray-400']};
      color: ${(props) => props.theme['purple-200']};
      font-size: 1.125rem;
    }
  }

  .remove {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    background: ${(props) => props.theme['gray-400']};
    border-radius: ${(props) => props.theme.radius};
    border: none;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};

    svg {
      color: ${(props) => props.theme['purple-200']};
    }
  }
`;
