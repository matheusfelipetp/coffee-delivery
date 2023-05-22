import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { HeaderContainer, HeaderStyled } from './style';
import { CoffeesContext } from '../../context/CoffeesContext';
import { useContext } from 'react';

export default function Header() {
  const { cart } = useContext(CoffeesContext);

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link to="/">
          <img
            src={Logo}
            alt="Logomarca da empresa Coffee Delivery, representando um copo de café."
          />
        </Link>

        <nav>
          <div className="location">
            <MapPin size={20} />
            Rio de Janeiro, RJ
          </div>
          <Link to="/cart" className="btn-cart">
            <span>{cart.length}</span>
            <ShoppingCart size={20} />
          </Link>
        </nav>
      </HeaderContainer>
    </HeaderStyled>
  );
}
