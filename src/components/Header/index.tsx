import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { HeaderContainer, HeaderStyled } from './style';

export default function Header() {
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
            <span>0</span>
            <ShoppingCart size={20} />
          </Link>
        </nav>
      </HeaderContainer>
    </HeaderStyled>
  );
}
