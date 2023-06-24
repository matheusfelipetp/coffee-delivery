import { Bank, Cardholder, CurrencyDollar, Money } from '@phosphor-icons/react';
import {
  HeaderForm,
  PaymentCard,
  PaymentContainer,
  PaymentContent,
} from './style';
import { ChangeEvent, useState } from 'react';

export default function PaymentForm() {
  const [optionSelected, setOptionSelected] = useState('');

  const handleOption = (event: ChangeEvent<HTMLInputElement>) => {
    setOptionSelected(event.target.value);
  };

  return (
    <PaymentContainer>
      <HeaderForm>
        <div className="payment">
          <CurrencyDollar size={20} />
          Pagamento
        </div>

        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </HeaderForm>

      <PaymentContent>
        <input
          type="radio"
          id="option-credit"
          value="Cartão de crédito"
          name="option"
          checked={optionSelected === 'Cartão de crédito'}
          onChange={handleOption}
        />

        <label htmlFor="option-credit">
          <PaymentCard isSelect={optionSelected === 'Cartão de crédito'}>
            <Cardholder size={20} />
            Cartão de crédito
          </PaymentCard>
        </label>

        <input
          type="radio"
          id="option-debit"
          value="Cartão de débito"
          name="option"
          checked={optionSelected === 'Cartão de débito'}
          onChange={handleOption}
        />
        <label htmlFor="option-debit">
          <PaymentCard isSelect={optionSelected === 'Cartão de débito'}>
            <Bank size={20} />
            Cartão de débito
          </PaymentCard>
        </label>

        <input
          type="radio"
          id="option-money"
          value="Dinheiro"
          name="option"
          checked={optionSelected === 'Dinheiro'}
          onChange={handleOption}
        />
        <label htmlFor="option-money">
          <PaymentCard isSelect={optionSelected === 'Dinheiro'}>
            <Money size={20} />
            Dinheiro
          </PaymentCard>
        </label>
      </PaymentContent>
    </PaymentContainer>
  );
}
