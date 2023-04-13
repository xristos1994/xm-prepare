import { useState } from 'react';
import { IIngredient, IBurgerOrder } from './interfaces';

export const useBurgerOrder: () => IBurgerOrder = () => {
  const [orderedBurger, setOrderedBurger] = useState<
    IBurgerOrder['orderedBurger']
  >([]);

  const orderAddIngredient = (ingredientId: IIngredient['id']) =>
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
    removeAllIngredients,
  };
};
