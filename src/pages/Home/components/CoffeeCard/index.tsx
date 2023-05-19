import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { AddCartContainer, CardStyled } from './style';

interface ICoffee {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

interface ICoffeeCard {
  coffee: ICoffee;
}

export default function CoffeeCard({ coffee }: ICoffeeCard) {
  return (
    <CardStyled>
      <img src={coffee.image} alt={coffee.name} />

      <div className="tags">
        {coffee.tags.map((tag) => (
          <span>{tag}</span>
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
            <button>
              <Minus size={20} />
            </button>
            <span>1</span>
            <button>
              <Plus size={20} />
            </button>
          </div>

          <button className="btn-add">
            <ShoppingCart size={20} />
          </button>
        </AddCartContainer>
      </div>
    </CardStyled>
  );
}
