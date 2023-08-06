import ImgBackground from '../../assets/Illustration.svg';
import OrderDetails from './components/OrderDetails';
import { OrderConfirmedContainer } from './style';

export default function OrderConfirmedPage() {
  return (
    <OrderConfirmedContainer>
      <OrderDetails />

      <img
        src={ImgBackground}
        alt="Copo de café com a logo da Coffee Delivery e diversos grãos ao redor."
        style={{ justifySelf: 'end' }}
      />
    </OrderConfirmedContainer>
  );
}
