import { styled } from 'styled-components';

export const OrderDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TitleOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-300']};
  }

  p {
    font-size: 1.25rem;
  }
`;

export const DetailsOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem;
  background: linear-gradient(
        ${(props) => props.theme['gray-100']},
        ${(props) => props.theme['gray-100']}
      )
      padding-box,
    linear-gradient(to right, rgb(219, 172, 44), rgb(128, 71, 248)) border-box;
  border-radius: 0.5rem 2rem;
  border: 1px solid transparent;
`;

export const DetailsOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  span {
    font-weight: 800;
  }

  svg {
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    padding: 0.5rem;
  }

  &:nth-child(1) svg {
    background: ${(props) => props.theme['purple-200']};
  }

  &:nth-child(2) svg {
    background: ${(props) => props.theme['yellow-200']};
  }

  &:nth-child(3) svg {
    background: ${(props) => props.theme['yellow-300']};
  }
`;
