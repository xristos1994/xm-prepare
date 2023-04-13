import axios from 'axios';
import { xmServiceBaseUrl } from '../../config';

export function fetchIngredients (token) {
  return axios
  .get(`${xmServiceBaseUrl}/ingredients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) =>
    res.data.reduce((acc, ingredient) => {
      acc[ingredient.id] = { ...ingredient };

      return acc;
    }, {})
  )
}