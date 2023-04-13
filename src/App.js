import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './models/auth/AuthContext';
import { OrderedBurgerContextProvider } from './models/burger/OrderedBurgerContext';
import { Routing } from './pages/Routing/Routing';

export function App() {
  const queryClient = new QueryClient();

  console.log('App');

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <OrderedBurgerContextProvider>
          <Routing />
        </OrderedBurgerContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
