import { ReactNode, createContext, useEffect, useState } from 'react';
import { ICoffee } from '../pages/Home/components/CoffeeCard';
import { coffees } from '../mocks/coffees';

interface ICoffeesContext {
  addQuantityInCoffee: (id: number) => void;
  removeQuantityInCoffee: (id: number) => void;
  addCoffeeInCart: (id: number) => void;
  coffeeList: ICoffee[];
  cart: ICoffee[];
}

interface ICoffeesProvider {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as ICoffeesContext);

export const CoffeesProvider = ({ children }: ICoffeesProvider) => {
  const [coffeeList, setCoffeeList] = useState<ICoffee[]>(coffees);
  const [cart, setCart] = useState<ICoffee[]>([]);

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
      const existingItem = cart.find((item) => item.id === id);

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

  return (
    <CoffeesContext.Provider
      value={{
        addQuantityInCoffee,
        removeQuantityInCoffee,
        coffeeList,
        cart,
        addCoffeeInCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
};
