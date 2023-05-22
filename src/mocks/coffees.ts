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
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    tags: ['Tradicional'],
    image: Tradicional,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    tags: ['Tradicional'],
    image: Americano,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    tags: ['Tradicional'],
    image: Cremoso,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    tags: ['Tradicional', 'Gelado'],
    image: Gelado,
    quantity: 1,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: CafeComLeite,
    quantity: 1,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: Latte,
    quantity: 1,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: Capuccino,
    quantity: 1,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: Macchiato,
    quantity: 1,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    tags: ['Tradicional', 'Com leite'],
    image: Mocaccino,
    quantity: 1,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    tags: ['Especial', 'Com leite'],
    image: ChocolateQuente,
    quantity: 1,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    tags: ['Especial', 'Alcoólico', 'Com leite'],
    image: Cubano,
    quantity: 1,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    tags: ['Especial'],
    image: Havaiano,
    quantity: 1,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    tags: ['Especial'],
    image: Arabe,
    quantity: 1,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    tags: ['Especial', 'Alcoólico'],
    image: Irlandes,
    quantity: 1,
  },
];
