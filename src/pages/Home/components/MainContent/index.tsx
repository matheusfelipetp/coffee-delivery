import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import ImgBackground from '../../../../assets/Home.svg';
import { ContainerInfo, ContainerTitle, MainStyled } from './style';

export default function MainContent() {
  return (
    <MainStyled>
      <ContainerTitle>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ContainerInfo>
          <span>
            <ShoppingCart size={32} />
            Compra simples e segura
          </span>
          <span>
            <Package size={32} />
            Embalagem mantém o café intacto
          </span>
          <span>
            <Timer size={32} />
            Entrega rápida e rastreada
          </span>
          <span>
            <Coffee size={32} />O café chega fresquinho até você
          </span>
        </ContainerInfo>
      </ContainerTitle>

      <img
        src={ImgBackground}
        alt="Copo de café com a logo da Coffee Delivery e diversos grãos ao redor."
      />
    </MainStyled>
  );
}
