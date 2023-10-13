import React from "react";
import Container from "./Container";

const Search = ({ searchTerm, sortByPrice, filterBySource, setUniqueSources }) => {
  return (
    <div>
      <h2>{searchTerm} Images</h2>
      {/* Pass sortByPrice and filterBySource as props to Container */}
      <Container
        searchTerm={searchTerm}
        sortByPrice={sortByPrice}
        filterBySource={filterBySource}
        setUniqueSources={setUniqueSources}  // Pass the callback to Container
      />
    </div>
  );
};

export default Search;
