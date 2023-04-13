import { useContext } from 'react';
import { useIngredients } from '../../models/burger/useIngredients';
import { xmAssetsBaseUrl } from '../../config';
import { classnames } from '../../utils/classnames/classnames';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';
import styles from './BurgerOrder.module.css';

export function BurgerOrder() {
  const query = useIngredients();

  console.log(query)

  const { orderedBurger, orderRemoveIngredient } =
    useContext(OrderedBurgerContext);

  return (
    <div className={styles.burgerOrderContainer}>
      <img src={`${xmAssetsBaseUrl}/${'bun_top.png'}`} alt={'Bun Top'} />
      <div className={styles.ingredients}>
        {orderedBurger.map((ingredientId, index) => {
          const { name, src } = query.data?.[ingredientId];

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
