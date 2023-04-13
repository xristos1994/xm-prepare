import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './models/auth/AuthContext';
import { OrderedBurgerContextProvider } from './models/burger/OrderedBurgerContext';
import { Routing } from './pages/Routing/Routing';

export const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <OrderedBurgerContextProvider>
          <Routing />
        </OrderedBurgerContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};
