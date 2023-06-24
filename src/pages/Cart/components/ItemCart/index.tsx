import { Minus, Plus, Trash } from '@phosphor-icons/react';
import { ICoffee } from '../../../Home/components/CoffeeCard';
import { ButtonContainer, ItemCartContainer, ItemCartInfo } from './style';

interface IItemCart {
  coffee: ICoffee;
}

export default function ItemCart({ coffee }: IItemCart) {
  return (
    <ItemCartContainer>
      <img src={coffee.image} alt={coffee.name} />

      <ItemCartInfo>
        <h4>{coffee.name}</h4>

        <ButtonContainer>
          <div className="quantity">
            <button>
              <Minus size={20} />
            </button>
            <span>{coffee.quantity}</span>
            <button>
              <Plus size={20} />
            </button>
          </div>

          <button className="remove">
            <Trash size={20} />
            Remover
          </button>
        </ButtonContainer>

        <span className="price">R$ {coffee.price}</span>
      </ItemCartInfo>
    </ItemCartContainer>
  );
}
