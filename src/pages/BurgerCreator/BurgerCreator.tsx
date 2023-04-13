import { FC } from 'react';
import { BurgerOrder } from '../../components/BurgerOrder/BurgerOrder';
import { IngredientsList } from '../../components/IngredientsList/IngredientsList';
import styles from './BurgerCreator.module.css';

export const BurgerCreator: FC = () => {
  return (
    <div className={styles.burgerCreatorContainer}>
      <IngredientsList />
      <BurgerOrder />
    </div>
  );
};
