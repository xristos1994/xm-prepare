import { useContext } from 'react';
import { classnames } from '../../utils/classnames/classnames';
import { xmAssetsBaseUrl } from '../../config';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';
import { IngredientsContext } from '../../models/burger/IngredientsContext';
import styles from './BurgerOrder.module.css';

export function BurgerOrder() {
  const { orderedBurger, orderRemoveIngredient } =
    useContext(OrderedBurgerContext);
  const { ingredients = {} } = useContext(IngredientsContext);

  return (
    <div className={styles.burgerOrderContainer}>
      <img src={`${xmAssetsBaseUrl}/${'bun_top.png'}`} alt={'Bun Top'} />
      <div className={styles.ingredients}>
        {orderedBurger.map((ingredientId, index) => {
          const { name, src } = ingredients[ingredientId];

          return (
            <button
              key={index}
              onClick={() => orderRemoveIngredient(index)}
              title={`${name}: Click to remove`}
              className={classnames(
                styles.burgerMarginAdjustment,
                styles.ingredient
              )}
            >
              <img src={`${xmAssetsBaseUrl}/${src}`} alt={name} />
            </button>
          );
        })}
      </div>
      <img
        src={`${xmAssetsBaseUrl}/${'bun_bottom.png'}`}
        alt={'Bun Buttom'}
        className={classnames({
          [styles.burgerMarginAdjustment]: orderedBurger.length,
        })}
      />
    </div>
  );
}
