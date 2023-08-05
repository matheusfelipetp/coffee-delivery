import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import CartPage from '../pages/Cart';
import HomePage from '../pages/Home';
import OrderConfirmedPage from '../pages/OrderConfirmed';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  );
}
