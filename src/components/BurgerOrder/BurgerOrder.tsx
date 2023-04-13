import { memo, useContext } from 'react';
import { useIngredients } from '../../models/burger/useIngredients';
import { xmAssetsBaseUrl } from '../../config';
import { classnames } from '../../utils/classnames/classnames';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';
import styles from './BurgerOrder.module.css';

export const BurgerOrder = memo(() => {
  const { ingredients } = useIngredients();

  const { orderedBurger, orderRemoveIngredient } =
    useContext(OrderedBurgerContext);

  return (
    <div className={styles.burgerOrderContainer}>
      <img
        src={`${xmAssetsBaseUrl}/${'bun_top.png'}`}
        alt={'Bun Top'}
        className={styles.bun}
      />
      <div className={styles.ingredients}>
        {orderedBurger.map((ingredientId, index) => {
          const { name, src } = ingredients?.[ingredientId];

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
        className={classnames(styles.bun, {
          [styles.burgerMarginAdjustment]: orderedBurger.length,
        })}
      />
    </div>
  );
});
