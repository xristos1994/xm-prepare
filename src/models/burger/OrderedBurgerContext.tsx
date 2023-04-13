import { createContext, Context, ReactNode, FC } from 'react';
import { useBurgerOrder, IBurgerOrder } from './useBurgerOrder';

interface IProps {
  children: ReactNode
}

export const OrderedBurgerContext: Context<IBurgerOrder> = createContext({} as IBurgerOrder);

export const OrderedBurgerContextProvider: FC<IProps> = ({ children }) => {
  const {
    orderedBurger,
    orderAddIngredient,
    orderRemoveIngredient,
    removeAllIngredients
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