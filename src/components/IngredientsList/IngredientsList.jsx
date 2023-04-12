import { useEffect, useContext } from 'react';
import { AuthContext } from '../../models/auth/AuthContext';
import { IngredientsContext } from '../../models/burger/IngredientsContext';
import { xmServiceBaseUrl } from '../../config';
import styles from './IngredientsList.module.css';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';

export function IngredientsList() {
  const { token } = useContext(AuthContext);
  const { ingredients, setIngredients } = useContext(IngredientsContext);
  const { orderAddIngredient } = useContext(OrderedBurgerContext);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const res = await fetch(`${xmServiceBaseUrl}/ingredients`, {
          headers: new Headers({
            Authorization: `Bearer ${token}`,
          }),
        });

        const ingredientsRes = await res.json();

        const ingredientsMap = ingredientsRes.reduce((acc, ingredient) => {
          acc[ingredient.id] = { ...ingredient };

          return acc;
        }, {});

        setIngredients(ingredientsMap);
      } catch (error) {
        console.log(error);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <div className={styles.IngredientsListContainer}>
      {Object.entries(ingredients).map(([, ingredient]) => (
        <div key={ingredient.id} onClick={() => orderAddIngredient(ingredient.id)}>{ingredient.name}</div>
      ))}
    </div>
  );
}
