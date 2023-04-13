export interface IIngredient {
  id: number;
  src: string;
  name: string;
}

export type TIngredient = Record<IIngredient['id'], IIngredient>;

export interface IIngredients {
  ingredients: TIngredient;
  isLoading: boolean;
}

export interface IBurgerOrder {
  orderedBurger: IIngredient['id'][];
  orderAddIngredient: (ingredientId: IIngredient['id']) => void;
  orderRemoveIngredient: (ingredientIndex: number) => void;
  removeAllIngredients: () => void;
}
