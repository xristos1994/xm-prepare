import { useState } from 'react';
import { IIngredient } from './useIngredients';

export interface IBurgerOrder {
  orderedBurger: IIngredient['id'][];
  orderAddIngredient: (ingredientId: IIngredient['id']) => void;
  orderRemoveIngredient: (ingredientIndex: number) => void;
  removeAllIngredients: () => void
}

export const useBurgerOrder: () => IBurgerOrder = () => {
  const [orderedBurger, setOrderedBurger] = useState<IBurgerOrder['orderedBurger']>([]);

  const orderAddIngredient = (ingredientId: IIngredient['id'] ) =>
    setOrderedBurger((ingredients) => [ingredientId, ...ingredients]);

  const orderRemoveIngredient = (ingredientIndex: number) =>
    setOrderedBurger((ingredients) =>
      ingredients
        .slice(0, ingredientIndex)
        .concat(ingredients.slice(ingredientIndex + 1))
    );

  const removeAllIngredients = () => {
    setOrderedBurger([]);
  };

  return {
    orderedBurger,
    orderAddIngredient,
    orderRemoveIngredient,
    removeAllIngredients
  };
}