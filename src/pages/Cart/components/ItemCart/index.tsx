import { Minus, Plus, Trash } from '@phosphor-icons/react';
import { useContext } from 'react';
import { CoffeesContext } from '../../../../context/CoffeesContext';
import { ICoffee } from '../../../Home/components/CoffeeCard';
import { ButtonContainer, ItemCartContainer, ItemCartInfo } from './style';

interface IItemCart {
  coffee: ICoffee;
}

export default function ItemCart({ coffee }: IItemCart) {
  const { addQuantityInCart, removeQuantityInCart, clearCoffeeInCart } =
    useContext(CoffeesContext);

  return (
    <ItemCartContainer>
      <img src={coffee.image} alt={coffee.name} />

      <ItemCartInfo>
        <h4>{coffee.name}</h4>

        <ButtonContainer>
          <div className="quantity">
            <button onClick={() => removeQuantityInCart(coffee.id)}>
              <Minus size={20} />
            </button>
            <span>{coffee.quantity}</span>
            <button onClick={() => addQuantityInCart(coffee.id)}>
              <Plus size={20} />
            </button>
          </div>

          <button
            className="remove"
            onClick={() => clearCoffeeInCart(coffee.id)}
          >
            <Trash size={20} />
            Remover
          </button>
        </ButtonContainer>

        <span className="price">R$ {coffee.price}</span>
      </ItemCartInfo>
    </ItemCartContainer>
  );
}
