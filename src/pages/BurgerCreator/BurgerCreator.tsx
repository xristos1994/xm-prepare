import { FC } from 'react';
import { BurgerOrder } from '../../components/BurgerOrder/BurgerOrder';
import { IngredientsList } from '../../components/IngredientsList/IngredientsList';
import { StyledBurgerCreator } from './StyledBurgerCreator'

export const BurgerCreator: FC = () => {
  return (
    <StyledBurgerCreator>
      <IngredientsList />
      <BurgerOrder />
    </StyledBurgerCreator>
  );
};
