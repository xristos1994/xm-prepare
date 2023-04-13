import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { fetchIngredients } from './fetchIngredients';
import { useAuth } from '../auth/useAuth';
import { IIngredients } from './interfaces';

export const useIngredients: () => IIngredients = () => {
  const { logout, token } = useAuth();

  const query = useQuery({
    queryKey: ['ingredients'],
    queryFn: () => fetchIngredients(token),
    retry: false,
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        logout();
      }
    },
  });

  return { ingredients: query?.data || {} };
};
