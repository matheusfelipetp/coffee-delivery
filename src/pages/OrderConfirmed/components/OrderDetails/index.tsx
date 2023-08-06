import { Clock, MapPin, Money } from '@phosphor-icons/react';
import { useContext } from 'react';
import { CoffeesContext } from '../../../../context/CoffeesContext';
import {
  DetailsOrder,
  DetailsOrderContainer,
  OrderDetailsStyled,
  TitleOrder,
} from './style';

const OrderDetails = () => {
  const { order } = useContext(CoffeesContext);

  return (
    <OrderDetailsStyled>
      <TitleOrder>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleOrder>

      <DetailsOrderContainer>
        <DetailsOrder>
          <MapPin size={32} />
          <div>
            <p>
              Entrega em{' '}
              <span>
                {order?.fields?.street}, {order?.fields?.number}
              </span>
            </p>
            <p>
              {order?.fields?.province}, {order?.fields?.city} -{' '}
              {order?.fields?.state}
            </p>
          </div>
        </DetailsOrder>

        <DetailsOrder>
          <Clock size={32} />
          <div>
            <p>Previsão de entrega</p>
            <span>20 min - 30 min</span>
          </div>
        </DetailsOrder>

        <DetailsOrder>
          <Money size={32} />
          <div>
            <p>Pagamento na entrega</p>
            <span>{order?.optionSelected}</span>
          </div>
        </DetailsOrder>
      </DetailsOrderContainer>
    </OrderDetailsStyled>
  );
};

export default OrderDetails;
