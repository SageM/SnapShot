import React from "react";
import Container from "./Container";

const Search = ({ searchTerm, sortByPrice, filterBySource }) => {
  return (
    <div>
      <h2>{searchTerm} Images</h2>
      {/* Pass sortByPrice and filterBySource as props to Container */}
      <Container
        searchTerm={searchTerm}
        sortByPrice={sortByPrice}
        filterBySource={filterBySource}
      />
    </div>
  );
};

export default Search;
