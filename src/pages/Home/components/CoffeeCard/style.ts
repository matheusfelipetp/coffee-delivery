import { styled } from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  padding: 1.5rem;
  box-shadow: inset 0 48px ${(props) => props.theme['gray-100']};

  img {
    width: 120px;
  }

  .tags {
    display: flex;
    gap: 0.5rem;

    span {
      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-300']};
      padding: 0.3rem;
      border-radius: ${(props) => props.theme.radius};
      font-size: 0.75rem;
      font-weight: 700;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;

    h3 {
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-600']};
    }
  }

  .price {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-700']};

      &::before {
        content: 'R$';
        font-family: 'Roboto', sans-serif;
        font-size: 0.8rem;
        margin-right: 2px;
        color: ${(props) => props.theme['gray-600']};
      }
    }
  }
`;

export const AddCartContainer = styled.div`
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

  .btn-add {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: none;
    background: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['gray-100']};
    border-radius: ${(props) => props.theme.radius};
    transition: background 0.1s ease-in;

    &:hover {
      background: ${(props) => props.theme['purple-200']};
    }
  }
`;
