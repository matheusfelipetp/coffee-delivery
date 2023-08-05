import { MapPinLine } from '@phosphor-icons/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { IFields } from '../..';
import {
  AddressContainer,
  DivDetailsStyled,
  DivInfoStyled,
  FormContainer,
  FormContent,
  HeaderForm,
} from './style';

interface IAddressForm {
  handleFields: (values: IFields) => void;
}

export default function AddressForm({ handleFields }: IAddressForm) {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [province, setProvince] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleCep = (event: ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleStreet = (event: ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };

  const handleNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const handleProvince = (event: ChangeEvent<HTMLInputElement>) => {
    setProvince(event.target.value);
  };

  const handleComplement = (event: ChangeEvent<HTMLInputElement>) => {
    setComplement(event.target.value);
  };

  const handleCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleState = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  useEffect(() => {
    handleFields({ cep, street, number, province, complement, city, state });
  }, [cep, street, number, province, complement, city, state]);

  return (
    <AddressContainer>
      <h3>Complete seu pedido</h3>
      <FormContainer>
        <HeaderForm>
          <div className="location">
            <MapPinLine size={20} />
            Endereço de entrega
          </div>

          <p>Informe o endereço onde deseja receber o pedido</p>
        </HeaderForm>

        <FormContent>
          <input
            type="text"
            placeholder="CEP"
            className="cep"
            maxLength={8}
            value={cep}
            onChange={handleCep}
          />
          <input
            type="text"
            placeholder="Rua"
            value={street}
            onChange={handleStreet}
          />

          <DivDetailsStyled>
            <input
              type="number"
              placeholder="Número"
              value={number}
              onChange={handleNumber}
            />
            <input
              type="text"
              placeholder="Complemento"
              value={complement}
              onChange={handleComplement}
            />
            <span>Opcional</span>
          </DivDetailsStyled>

          <DivInfoStyled>
            <input
              type="text"
              placeholder="Bairro"
              value={province}
              onChange={handleProvince}
            />
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={handleCity}
            />
            <input
              type="text"
              placeholder="UF"
              maxLength={2}
              value={state}
              onChange={handleState}
            />
          </DivInfoStyled>
        </FormContent>
      </FormContainer>
    </AddressContainer>
  );
}
