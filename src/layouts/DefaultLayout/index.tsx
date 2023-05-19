import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import { ContainerStyled, LayoutStyled } from './styles';

export default function DefaultLayout() {
  return (
    <LayoutStyled>
      <Header />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </LayoutStyled>
  );
}
