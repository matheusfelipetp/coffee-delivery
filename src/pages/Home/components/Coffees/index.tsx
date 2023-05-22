import { CoffeesContext } from '../../../../context/CoffeesContext';
import CoffeeCard from '../CoffeeCard';
import { CoffeeSection } from './style';
import { useContext } from 'react';

export default function Coffees() {
  const { coffeeList } = useContext(CoffeesContext);

  return (
    <CoffeeSection>
      <h2>Nossos cafés</h2>

      <div className="container">
        {coffeeList.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee.id} coffeeId={coffee.id} />
        ))}
      </div>
    </CoffeeSection>
  );
}
