import { coffees } from '../../../../mocks/coffees';
import CoffeeCard from '../CoffeeCard';
import { CoffeeSection } from './style';

export default function Coffees() {
  return (
    <CoffeeSection>
      <h2>Nossos cafés</h2>

      <div className="container">
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} />
        ))}
      </div>
    </CoffeeSection>
  );
}
