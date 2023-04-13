import { BurgerOrder } from '../../components/BurgerOrder/BurgerOrder';
import { IngredientsList } from '../../components/IngredientsList/IngredientsList';
import styles from './BurgerCreator.module.css';

export const BurgerCreator = () => {
  console.log('BurgerCreator Page');

  return <div className={styles.burgerCreatorContainer}>
    <IngredientsList />
    <BurgerOrder />
  </div>;
};
