import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { AddCartContainer, CardStyled } from './style';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { CoffeesContext } from '../../../../context/CoffeesContext';

export interface ICoffee {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  quantity: number;
}

interface ICoffeeCard {
  coffee: ICoffee;
  coffeeId: number;
}

export default function CoffeeCard({ coffee, coffeeId }: ICoffeeCard) {
  const { addQuantityInCoffee, removeQuantityInCoffee, addCoffeeInCart } =
    useContext(CoffeesContext);

  return (
    <CardStyled>
      <img src={coffee.image} alt={coffee.name} />

      <div className="tags">
        {coffee.tags.map((tag) => (
          <span key={uuidv4()}>{tag}</span>
        ))}
      </div>

      <div className="text">
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </div>

      <div className="price">
        <span>{coffee.price}</span>

        <AddCartContainer>
          <div className="quantity">
            <button onClick={() => removeQuantityInCoffee(coffeeId)}>
              <Minus size={20} />
            </button>
            <span>{coffee.quantity}</span>
            <button onClick={() => addQuantityInCoffee(coffeeId)}>
              <Plus size={20} />
            </button>
          </div>

          <button className="btn-add" onClick={() => addCoffeeInCart(coffeeId)}>
            <ShoppingCart size={20} />
          </button>
        </AddCartContainer>
      </div>
    </CardStyled>
  );
}
