import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import { CartContainer } from './style';

export default function CartPage() {
  return (
    <CartContainer>
      <div className="form-container">
        <AddressForm />
        <PaymentForm />
      </div>

      <h1>Cart</h1>
    </CartContainer>
  );
}
