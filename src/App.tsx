import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './models/auth/AuthContext';
import { OrderedBurgerContextProvider } from './models/burger/OrderedBurgerContext';
import { Routing } from './pages/Routing/Routing';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeStyle } from './styles/ThemeStyle';
import { UtilStyle } from './styles/UtilStyle';

export const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <ThemeStyle />
      <UtilStyle />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <OrderedBurgerContextProvider>
            <Routing />
          </OrderedBurgerContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
};
