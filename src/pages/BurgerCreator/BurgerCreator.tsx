import { FC } from 'react';
import { BurgerOrder } from '../../components/BurgerOrder/BurgerOrder';
import { IngredientsList } from '../../components/IngredientsList/IngredientsList';

// @ts-ignore
import styles from './BurgerCreator.module.css';

export const BurgerCreator: FC = () => {
  console.log('BurgerCreator Page');

  return <div className={styles.burgerCreatorContainer}>
    <IngredientsList />
    <BurgerOrder />
  </div>;
};