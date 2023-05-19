import { styled } from 'styled-components';

export const MainStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    max-width: 20ch;
  }

  p {
    font-size: 1.25rem;
    max-width: 50ch;
  }
`;

export const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 3rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme['gray-700']};

    svg {
      color: ${(props) => props.theme.white};
      border-radius: 50%;
      padding: 0.5rem;
    }

    &:nth-child(1) svg {
      background: ${(props) => props.theme['yellow-300']};
    }

    &:nth-child(2) svg {
      background: ${(props) => props.theme['gray-700']};
    }

    &:nth-child(3) svg {
      background: ${(props) => props.theme['yellow-200']};
    }

    &:nth-child(4) svg {
      background: ${(props) => props.theme['purple-200']};
    }
  }
`;
