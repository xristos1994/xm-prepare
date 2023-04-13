import { useContext, FC } from 'react';
import { xmAssetsBaseUrl } from '../../config';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';
import { classnames } from '../../utils/classnames/classnames';
import { useIngredients } from '../../models/burger/useIngredients';
// @ts-ignore
import styles from './IngredientsList.module.css';

export const IngredientsList: FC = () => {
  const { ingredients } = useIngredients();

  const { orderAddIngredient, removeAllIngredients } =
    useContext(OrderedBurgerContext);

    console.log('IngredientsList');

  return (
    <div className={styles.ingredientsListContainer}>
      <div className={styles.title}>Ingredients</div>

      <div className={styles.ingredients}>

        {Object.entries(ingredients || {}).map(([, ingredient]) => (
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

      <button
        className={classnames('linkBtn', styles.clearBurgerBtn)}
        onClick={removeAllIngredients}
      >
        Clear Burger
      </button>
      <div className={styles.userHelp}>
        &#x261E; Click on ingredient image in order to remove it from burger.
      </div>
    </div>
  );
};