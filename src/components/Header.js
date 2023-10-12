import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit, toggleSortByPrice, setFilterBySource, sortByPrice, uniqueSources }) => {
  return (
    <div>
      <h1>Home Horizon</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
      <div>
        <button onClick={toggleSortByPrice}>
          {sortByPrice ? "Sort by Price Descending" : "Sort by Price Ascending"}
        </button>
        
        <select onChange={(e) => setFilterBySource(e.target.value)}>
            <option value="">All Sources</option>
            {uniqueSources.map((source) => (
                <option key={source} value={source}>{source}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
