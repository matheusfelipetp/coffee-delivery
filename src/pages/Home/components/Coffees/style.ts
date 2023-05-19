import { styled } from 'styled-components';

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 80px;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;
