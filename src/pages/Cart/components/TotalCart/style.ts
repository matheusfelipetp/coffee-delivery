import { styled } from 'styled-components';

export const TotalCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 80px;

  h3 {
    font-size: 1.125rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    grid-column: -1/1;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;

  .empty {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      color: ${(props) => props.theme['yellow-300']};
    }
  }
`;

export const TotalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Roboto', sans-serif;

    &.total {
      p,
      span {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }

  button {
    border: none;
    background: ${(props) => props.theme['yellow-200']};
    color: ${(props) => props.theme['gray-100']};
    padding: 1rem;
    border-radius: ${(props) => props.theme.radius};
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
