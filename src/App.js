import { useState } from 'react';
import { AuthContext } from './models/auth/AuthContext';
import { OrderedBurgerContext } from './models/burger/OrderedBurgerContext';
import { IngredientsContext } from './models/burger/IngredientsContext';
import { Login } from './pages/Login/Login';
import { BurgerCreator } from './pages/BurgerCreator/BurgerCreator';

export function App() {
  const [token, setToken] = useState('');
  const [ingredients, setIngredients] = useState({});
  const [orderedBurger, setOrderedBurger] = useState([]);

  const orderAddIngredient = (ingredientId) =>
    setOrderedBurger((ingredients) => [...ingredients, ingredientId]);

  const orderRemoveIngredient = (ingredientIndex) =>
    setOrderedBurger((ingredients) =>
      ingredients
        .slice(0, ingredientIndex)
        .concat(ingredients.slice(ingredientIndex + 1))
    );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <OrderedBurgerContext.Provider
        value={{ orderedBurger, orderAddIngredient, orderRemoveIngredient }}
      >
        <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
          <div>
            {!token && <Login />}
            {token && <BurgerCreator />}
          </div>
        </IngredientsContext.Provider>
      </OrderedBurgerContext.Provider>
    </AuthContext.Provider>
  );
}
