import { useContext } from 'react';
import { CartContent, TotalCartContainer, TotalInfoContainer } from './style';
import { CoffeesContext } from '../../../../context/CoffeesContext';
import { Coffee } from '@phosphor-icons/react';
import ItemCart from '../ItemCart';

export default function TotalCart() {
  const { cart } = useContext(CoffeesContext);

  console.log(cart);

  const total = () => {
    const totalPrice = cart.reduce((total, coffee) => {
      const coffeePrice = parseFloat(coffee.price.replace(',', '.'));
      return total + coffeePrice;
    }, 0);

    return totalPrice.toFixed(2).replace('.', ',');
  };

  return (
    <TotalCartContainer>
      <h3>Cafés selecionados</h3>
      <CartContent>
        {cart.length ? (
          <div>
            {cart.map((coffee) => (
              <ItemCart key={coffee.id} coffee={coffee} />
            ))}

            <TotalInfoContainer>
              <div>
                <p>Total de itens</p>
                <span>R$ {total()}</span>
              </div>

              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>

              <div className="total">
                <p>Total</p>
                <span>R$ 33,20</span>
              </div>

              <button>Confirmar pedido</button>
            </TotalInfoContainer>
          </div>
        ) : (
          <p className="empty">
            <Coffee size={20} />
            Não há itens adicionados ao carrinho
          </p>
        )}
      </CartContent>
    </TotalCartContainer>
  );
}
