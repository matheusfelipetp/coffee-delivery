import { ReactNode, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { coffees } from '../mocks/coffees';
import { IFields } from '../pages/Cart';
import { ITotalCart } from '../pages/Cart/components/TotalCart';
import { ICoffee } from '../pages/Home/components/CoffeeCard';

interface ICoffeesContext {
  addQuantityInCoffee: (id: number) => void;
  removeQuantityInCoffee: (id: number) => void;
  removeQuantityInCart: (id: number) => void;
  addCoffeeInCart: (id: number) => void;
  addQuantityInCart: (id: number) => void;
  coffeeList: ICoffee[];
  cart: ICoffee[];
  clearCoffeeInCart: (id: number) => void;
  confirmOrder: (fields: IFields, option: string) => void;
  order: ITotalCart | null;
}

interface ICoffeesProvider {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as ICoffeesContext);

export const CoffeesProvider = ({ children }: ICoffeesProvider) => {
  const [coffeeList, setCoffeeList] = useState<ICoffee[]>(coffees);
  const [cart, setCart] = useState<ICoffee[]>([]);
  const [order, setOrder] = useState<ITotalCart | null>(null);

  const navigate = useNavigate();

  const addQuantityInCoffee = (id: number) => {
    const foundCoffee = coffeeList.find((elem) => elem.id === id);

    if (foundCoffee) {
      const updatedCoffee = coffeeList.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            quantity: elem.quantity + 1,
          };
        }
        return elem;
      });
      setCoffeeList(updatedCoffee);
    }
  };

  const removeQuantityInCoffee = (id: number) => {
    const foundCoffee = coffeeList.find((elem) => elem.id === id);

    if (foundCoffee) {
      const updatedCoffee = coffeeList.map((elem) => {
        if (elem.id === id && elem.quantity > 1) {
          return {
            ...elem,
            quantity: elem.quantity - 1,
          };
        }
        return elem;
      });
      setCoffeeList(updatedCoffee);
    }
  };

  const addCoffeeInCart = (id: number) => {
    const foundCoffee = coffeeList.find((elem) => elem.id === id);

    if (foundCoffee) {
      const existingItem = cart?.find((item) => item.id === id);

      if (existingItem) {
        const updatedCart = cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + foundCoffee.quantity,
            };
          }
          return item;
        });
        setCart(updatedCart);

        localStorage.setItem(
          '@coffee-delivery-cart-1.0.0',
          JSON.stringify(updatedCart),
        );
      } else {
        setCart((state) => {
          localStorage.setItem(
            '@coffee-delivery-cart-1.0.0',
            JSON.stringify([...state, foundCoffee]),
          );

          return [...state, foundCoffee];
        });
      }
    }
  };

  useEffect(() => {
    const cartJSON = localStorage.getItem('@coffee-delivery-cart-1.0.0');

    if (cartJSON) {
      const cartFormatted = JSON.parse(cartJSON);
      setCart(cartFormatted);
    }
  }, []);

  const addQuantityInCart = (id: number) => {
    const foundCoffee = cart.find((elem) => elem.id === id);

    if (foundCoffee) {
      const updatedCartCoffee = cart.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            quantity: elem.quantity + 1,
          };
        }
        return elem;
      });

      setCart(updatedCartCoffee);

      localStorage.setItem(
        '@coffee-delivery-cart-1.0.0',
        JSON.stringify(updatedCartCoffee),
      );
    }
  };

  const removeQuantityInCart = (id: number) => {
    const foundCoffee = cart.find((elem) => elem.id === id);

    if (foundCoffee) {
      const updatedCartCoffee = cart.map((elem) => {
        if (elem.id === id && elem.quantity > 1) {
          return {
            ...elem,
            quantity: elem.quantity - 1,
          };
        }
        return elem;
      });

      setCart(updatedCartCoffee);

      localStorage.setItem(
        '@coffee-delivery-cart-1.0.0',
        JSON.stringify(updatedCartCoffee),
      );
    }
  };

  const clearCoffeeInCart = (id: number) => {
    const updatedCartCoffee = cart.filter((elem) => elem.id !== id);
    setCart(updatedCartCoffee);

    localStorage.setItem(
      '@coffee-delivery-cart-1.0.0',
      JSON.stringify(updatedCartCoffee),
    );
  };

  const confirmOrder = (fields: IFields, option: string) => {
    const { complement, ...rest } = fields;
    const values = Object.values(rest).every((valor) => valor !== '');

    if (!values) {
      toast.error('Preencha os campos do formulário corretamente');
    } else if (!option) {
      toast.error('Selecione uma opção de pagamento');
    } else {
      const newOrder = {
        fields: { ...fields, complement: complement },
        optionSelected: option,
      };

      setOrder(newOrder);
      setCart([]);
      setCoffeeList([]);

      localStorage.removeItem('@coffee-delivery-cart-1.0.0');
      navigate('/order-confirmed');
    }
  };

  return (
    <CoffeesContext.Provider
      value={{
        addQuantityInCoffee,
        removeQuantityInCoffee,
        coffeeList,
        cart,
        addCoffeeInCart,
        addQuantityInCart,
        removeQuantityInCart,
        clearCoffeeInCart,
        confirmOrder,
        order,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
};
