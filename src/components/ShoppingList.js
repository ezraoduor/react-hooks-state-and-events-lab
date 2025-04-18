import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
