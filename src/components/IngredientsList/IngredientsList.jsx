import { useEffect, useContext } from 'react';
import { IngredientsContext } from '../../models/burger/IngredientsContext';
import { xmAssetsBaseUrl, xmServiceBaseUrl } from '../../config';
import styles from './IngredientsList.module.css';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';
import { useAuth } from '../../models/auth/useAuth';
import { classnames } from '../../utils/classnames/classnames';

export function IngredientsList() {
  const { logout, token } = useAuth();
  const { ingredients, setIngredients } = useContext(IngredientsContext);
  const { orderAddIngredient, removeAllIngredients } = useContext(OrderedBurgerContext);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const res = await fetch(`${xmServiceBaseUrl}/ingredients`, {
          headers: new Headers({
            Authorization: `Bearer ${token}`,
          }),
        });

        if (res.status === 401) {
          logout();
          return;
        }

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.ingredientsListContainer}>
      <div className={styles.title}>Ingredients</div>

      <div className={styles.ingredients}>
        {Object.entries(ingredients).map(([, ingredient]) => (
          <button
            key={ingredient.id}
            onClick={() => orderAddIngredient(ingredient.id)}
            className={styles.ingredientBtn}
            title={`${ingredient.name} Click to add`}
          >
            <span className={styles.info}>
              <img
                src={`${xmAssetsBaseUrl}/${ingredient.src}`}
                alt={ingredient.name}
              />
              <span className={styles.name}>{ingredient.name}</span>
            </span>
            <span>+</span>
          </button>
        ))}
      </div>

      <button className={classnames('linkBtn', styles.clearBurgerBtn)} onClick={removeAllIngredients}>Clear Burger</button>
      <div className={styles.userHelp}>
        &#x261E; Click on ingredient image in order to remove it from burger.
      </div>
    </div>
  );
}
