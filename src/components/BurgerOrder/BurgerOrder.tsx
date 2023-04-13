import { memo, useContext } from 'react';
import { useIngredients } from '../../models/burger/useIngredients';
import { xmAssetsBaseUrl } from '../../config';
import { classnames } from '../../utils/classnames/classnames';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';
import { StyledBurgerOrder } from './StyledBurgerOrder';

export const BurgerOrder = memo(() => {
  const { ingredients } = useIngredients();

  const { orderedBurger, orderRemoveIngredient } =
    useContext(OrderedBurgerContext);

  return (
    <StyledBurgerOrder>
      <img
        src={`${xmAssetsBaseUrl}/${'bun_top.png'}`}
        alt={'Bun Top'}
        className='bun'
      />
      <div className='ingredients'>
        {orderedBurger.map((ingredientId, index) => {
          const { name, src } = ingredients?.[ingredientId];

          return (
            <button
              key={index}
              onClick={() => orderRemoveIngredient(index)}
              title={`${name}: Click to remove`}
              className='burgerMarginAdjustment ingredient'
            >
              <img src={`${xmAssetsBaseUrl}/${src}`} alt={name} />
            </button>
          );
        })}
      </div>
      <img
        src={`${xmAssetsBaseUrl}/${'bun_bottom.png'}`}
        alt={'Bun Buttom'}
        className={classnames('bun', {
          burgerMarginAdjustment: orderedBurger.length,
        })}
      />
    </StyledBurgerOrder>
  );
});
