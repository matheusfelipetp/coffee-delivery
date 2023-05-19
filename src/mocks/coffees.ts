import Americano from '../assets/Americano.svg';
import Arabe from '../assets/Arabe.svg';
import CafeComLeite from '../assets/Cafe-com-leite.svg';
import Capuccino from '../assets/Capuccino.svg';
import ChocolateQuente from '../assets/Chocolate-quente.svg';
import Cremoso from '../assets/Cremoso.svg';
import Cubano from '../assets/Cubano.svg';
import Gelado from '../assets/Gelado.svg';
import Havaiano from '../assets/Havaiano.svg';
import Irlandes from '../assets/Irlandes.svg';
import Latte from '../assets/Latte.svg';
import Macchiato from '../assets/Macchiato.svg';
import Mocaccino from '../assets/Mocaccino.svg';
import Tradicional from '../assets/Tradicional.svg';

export const coffees = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    tags: ['Tradicional'],
    image: Tradicional,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    tags: ['Tradicional'],
    image: Americano,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    tags: ['Tradicional'],
    image: Cremoso,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    tags: ['Tradicional', 'Gelado'],
    image: Gelado,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: CafeComLeite,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: Latte,
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: Capuccino,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: Macchiato,
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: Mocaccino,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    tags: ['Especial', 'Com leite'],
    image: ChocolateQuente,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    tags: ['Especial', 'Alcoólico', 'Com leite'],
    image: Cubano,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    tags: ['Especial'],
    image: Havaiano,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    tags: ['Especial'],
    image: Arabe,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    tags: ['Especial', 'Alcoólico'],
    image: Irlandes,
  },
];
