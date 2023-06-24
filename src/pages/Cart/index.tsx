import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import TotalCart from './components/TotalCart';
import { CartContainer } from './style';

export default function CartPage() {
  return (
    <CartContainer>
      <div className="form-container">
        <AddressForm />
        <PaymentForm />
      </div>

      <TotalCart/>
    </CartContainer>
  );
}
