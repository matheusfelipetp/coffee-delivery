import { MapPinLine } from '@phosphor-icons/react';
import {
  AddressContainer,
  DivDetailsStyled,
  DivInfoStyled,
  FormContainer,
  FormContent,
  HeaderForm,
} from './style';

export default function AddressForm() {
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
          <input type="text" placeholder="CEP" className="cep" maxLength={8} />
          <input type="text" placeholder="Rua" />

          <DivDetailsStyled>
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <span>Opcional</span>
          </DivDetailsStyled>

          <DivInfoStyled>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" maxLength={2} />
          </DivInfoStyled>
        </FormContent>
      </FormContainer>
    </AddressContainer>
  );
}
