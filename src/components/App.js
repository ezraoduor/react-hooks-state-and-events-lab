import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items'; // Ensure this is correctly imported

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleTheme}>Toggle Mode</button>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

