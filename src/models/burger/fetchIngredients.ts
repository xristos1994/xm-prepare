import axios from 'axios';
import { xmServiceBaseUrl } from '../../config';
import { TIngredient, IIngredient } from './useIngredients';

export function fetchIngredients (token: string): Promise<TIngredient> {
  return axios
  .get(`${xmServiceBaseUrl}/ingredients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) =>
    res.data.reduce((acc: TIngredient, ingredient:IIngredient) => {
      acc[ingredient.id] = { ...ingredient };

      return acc;
    }, {})
  )
}