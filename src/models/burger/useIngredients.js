import { useQuery } from '@tanstack/react-query';
import { fetchIngredients } from './fetchIngredients';
import { useAuth } from '../auth/useAuth';

export const useIngredients = () => {
  const { logout, token } = useAuth();

  const query = useQuery({
    queryKey: ['ingredients'],
    queryFn: () => fetchIngredients(token),
    retry: false,
    onError: (error) => {
      if(error.response?.status === 401) {
        logout();
      }
    }
  });

  return query
}