import { Outlet } from 'react-router-dom';
import { LayoutStyled } from './styles';

export default function DefaultLayout() {
  return (
    <LayoutStyled>
      <Outlet />
    </LayoutStyled>
  );
}
