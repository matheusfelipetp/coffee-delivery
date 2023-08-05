import { ChangeEvent, useState } from 'react';
import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import TotalCart from './components/TotalCart';
import { CartContainer } from './style';

export interface IFields {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  province: string;
  city: string;
  state: string;
}

export default function CartPage() {
  const [optionSelected, setOptionSelected] = useState('');
  const [fields, setFields] = useState<IFields | null>(null);

  const handleOption = (event: ChangeEvent<HTMLInputElement>) => {
    setOptionSelected(event.target.value);
  };

  const handleFields = (values: IFields) => {
    setFields(values);
  };

  return (
    <CartContainer>
      <div className="form-container">
        <AddressForm handleFields={handleFields} />
        <PaymentForm
          optionSelected={optionSelected}
          handleOption={handleOption}
        />
      </div>

      <TotalCart fields={fields} optionSelected={optionSelected} />
    </CartContainer>
  );
}
