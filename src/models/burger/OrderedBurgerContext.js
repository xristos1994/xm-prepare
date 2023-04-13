import { createContext } from 'react';
import { useBurgerOrder } from './useBurgerOrder';

export const OrderedBurgerContext = createContext();

export const OrderedBurgerContextProvider = ({ children }) => {
  const {
    orderedBurger,
    orderAddIngredient,
    orderRemoveIngredient,
    removeAllIngredients,
  } = useBurgerOrder();

  return (
    <OrderedBurgerContext.Provider
      value={{
        orderedBurger,
        orderAddIngredient,
        orderRemoveIngredient,
        removeAllIngredients,
      }}
    >
      {children}
    </OrderedBurgerContext.Provider>
  );
};