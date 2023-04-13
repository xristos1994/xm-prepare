import { useContext, FC } from 'react';
import { xmAssetsBaseUrl } from '../../config';
import { OrderedBurgerContext } from '../../models/burger/OrderedBurgerContext';
import { useIngredients } from '../../models/burger/useIngredients';
import { StyledIngredientsList } from './StyledIngredientsList';

export const IngredientsList: FC = () => {
  const { ingredients: _ingredients, isLoading } = useIngredients();

  const { orderAddIngredient, removeAllIngredients } =
    useContext(OrderedBurgerContext);

  const ingredients = Object.entries(_ingredients || {}).map(
    ([, ingredient]) => ingredient
  );

  return (
    <StyledIngredientsList>
      <div className='title'>Ingredients</div>

      <div className='ingredients'>
        {isLoading && <div>Loading Ingredients...</div>}

        {ingredients.length > 0 &&
          !isLoading &&
          ingredients.map((ingredient) => (
            <button
              key={ingredient.id}
              onClick={() => orderAddIngredient(ingredient.id)}
              className='ingredientBtn'
              title={`${ingredient.name} Click to add`}
            >
              <span className='info'>
                <img
                  src={`${xmAssetsBaseUrl}/${ingredient.src}`}
                  alt={ingredient.name}
                />
                <span className='name'>{ingredient.name}</span>
              </span>
              <span>+</span>
            </button>
          ))}
      </div>

      <button
        className='linkBtn clearBurgerBtn'
        onClick={removeAllIngredients}
      >
        Clear Burger
      </button>
      <div className='userHelp'>
        &#x261E; Click on ingredient image in order to remove it from burger.
      </div>
    </StyledIngredientsList>
  );
};
