import { styled } from 'styled-components';

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;

  h3 {
    font-size: 1.125rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    grid-column: -1/1;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: ${(props) => props.theme.radius};
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-800']};

    svg {
      color: ${(props) => props.theme['yellow-300']};
    }
  }

  p {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-700']};
    margin-left: 1.875rem;
  }
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  input {
    background: ${(props) => props.theme['gray-300']};
    border-radius: ${(props) => props.theme.radius};
    border: 1px solid ${(props) => props.theme['gray-400']};
    padding: 0.75rem;
    width: 100%;

    &.cep {
      max-width: 12.5rem;
    }

    &::placeholder {
      font-size: 0.875rem;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['gray-600']};
    }
  }
`;

export const DivDetailsStyled = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 0.8rem;
  position: relative;

  span {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 0.75rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-600']};
  }
`;

export const DivInfoStyled = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr 3.75rem;
  gap: 0.8rem;
`;
