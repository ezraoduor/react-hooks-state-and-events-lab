import React, { useState } from 'react';

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleClick = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name} ({category})</span>
      <button onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
