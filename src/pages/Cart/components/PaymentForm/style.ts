import { DefaultTheme, styled } from 'styled-components';

interface PaymentCardProps {
  selected: boolean;
  theme: DefaultTheme;
}

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: ${(props) => props.theme.radius};
  margin-bottom: 80px;
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .payment {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-800']};

    svg {
      color: ${(props) => props.theme['purple-200']};
    }
  }

  p {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-700']};
    margin-left: 1.875rem;
  }
`;

export const PaymentContent = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;

  input {
    display: none;
  }
`;

export const PaymentCard = styled.div<PaymentCardProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: ${(props) => props.theme.radius};
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-700']};
  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme['purple-200']}`
      : `1px solid ${props.theme['gray-400']}`};
  background: ${(props) =>
    props.selected ? props.theme['purple-100'] : props.theme['gray-400']};
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme['purple-200']};
    background: ${(props) => props.theme['purple-100']};
  }

  svg {
    color: ${(props) => props.theme['purple-200']};
  }
`;
