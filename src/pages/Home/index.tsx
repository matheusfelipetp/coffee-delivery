import Coffees from './components/Coffees';
import MainContent from './components/MainContent';
import { HomeContainer } from './style';

export default function HomePage() {
  return (
    <HomeContainer>
      <MainContent />
      <Coffees />
    </HomeContainer>
  );
}
