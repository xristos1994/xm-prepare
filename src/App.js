import { useState, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContext } from './models/auth/AuthContext';
import { OrderedBurgerContext } from './models/burger/OrderedBurgerContext';
import { Routing } from './pages/Routing/Routing';
import { useBurgerOrder } from './models/burger/useBurgerOrder';

export function App() {
  const queryClient = new QueryClient();
  const [token, setToken] = useState(localStorage.getItem('auth_token') || '');

  const {
    orderedBurger,
    orderAddIngredient,
    orderRemoveIngredient,
    removeAllIngredients,
  } = useBurgerOrder();

  console.log(222);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ token, setToken }}>
        <OrderedBurgerContext.Provider
          value={{
            orderedBurger,
            orderAddIngredient,
            orderRemoveIngredient,
            removeAllIngredients
          }}
        >
          <Routing />
        </OrderedBurgerContext.Provider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
