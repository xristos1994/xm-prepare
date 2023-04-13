import { useState } from 'react';

export const useBurgerOrder = () => {
  const [orderedBurger, setOrderedBurger] = useState([]);

  const orderAddIngredient = (ingredientId) =>
    setOrderedBurger((ingredients) => [ingredientId, ...ingredients]);

  const orderRemoveIngredient = (ingredientIndex) =>
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