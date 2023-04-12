import { useContext } from 'react';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';
import { IngredientsContext } from '../../models/burger/IngredientsContext';
import styles from './BurgerOrder.module.css';

export function BurgerOrder() {
  const { orderedBurger, orderRemoveIngredient } = useContext(OrderedBurgerContext);
  const { ingredients } = useContext(IngredientsContext);

  if (!orderedBurger.length || !Object.entries(ingredients).length ) {
    return null;
  }

  return (
    <div className={styles.burgerOrderContainer}>
      {orderedBurger.map((ingredientId, index) => (
        <div key={index} onClick={() => orderRemoveIngredient(index)}>{ingredients[ingredientId].name}</div>
      ))}
    </div>
  );
}