import { Coffee } from '@phosphor-icons/react';
import { useContext } from 'react';
import { IFields } from '../..';
import { CoffeesContext } from '../../../../context/CoffeesContext';
import ItemCart from '../ItemCart';
import { CartContent, TotalCartContainer, TotalInfoContainer } from './style';

export interface ITotalCart {
  fields: IFields | null;
  optionSelected: string;
}

export default function TotalCart({ fields, optionSelected }: ITotalCart) {
  const { cart, confirmOrder } = useContext(CoffeesContext);

  const sendValue = 3.5;
  const sendValueFormatted = sendValue.toFixed(2).replace('.', ',');

  const totalCoffee = () => {
    const totalPrice = cart.reduce((total, coffee) => {
      const coffeePrice = parseFloat(coffee.price.replace(',', '.'));
      return total + coffeePrice * coffee.quantity;
    }, 0);

    return totalPrice.toFixed(2).replace('.', ',');
  };

  const totalCart = () => {
    const totalValue = totalCoffee();
    const formattedTotalValue = Number(totalValue.replace(',', '.'));
    const sumTotal = formattedTotalValue + sendValue;

    return sumTotal.toFixed(2).replace('.', ',');
  };

  const confirmeAndValidateOrder = () => {
    if (fields) {
      confirmOrder(fields, optionSelected);
    }
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
                <span>R$ {totalCoffee()}</span>
              </div>

              <div>
                <p>Entrega</p>
                <span>R$ {sendValueFormatted}</span>
              </div>

              <div className="total">
                <p>Total</p>
                <span>R$ {totalCart()}</span>
              </div>

              <button onClick={confirmeAndValidateOrder}>
                Confirmar pedido
              </button>
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
