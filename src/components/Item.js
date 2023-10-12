import React from "react";
import Container from "./Container";

const Item = ({ searchTerm, sortByPrice, filterBySource, setUniqueSources }) => {
  console.log("Item sortByPrice:", sortByPrice);
  
  return (
    <div>
      <h2> Items related to {searchTerm}(s) for sale :)</h2>
      <Container 
        searchTerm={searchTerm} 
        sortByPrice={sortByPrice} 
        filterBySource={filterBySource}
        setUniqueSources={setUniqueSources}  // Pass the callback to Container
      />
    </div>
  );
};

export default Item;
