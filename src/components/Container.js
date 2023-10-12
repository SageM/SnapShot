import React, { useContext, useEffect, useMemo } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm, sortByPrice, filterBySource, setUniqueSources }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);

  //Run search and get data
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  //Get the unique company names
  useEffect(() => {
    if (images && images.length > 0) {
        const uniqueSourcesList = [...new Set(images.map(img => img.source))];
        console.log("Extracted unique sources in Container:", uniqueSourcesList);
        setUniqueSources(uniqueSourcesList);
    }
}, [images, setUniqueSources]);

  //Extract prices for sorting
  const extractPrice = (priceStr) => {
    const match = priceStr.match(/\$(\d+(\.\d+)?)/);  // regex to match $ followed by digits and optionally a dot and more digits
    if (match) {
      return parseFloat(match[1]);
    } else {
      return 0;  // default value if price is not extractable
    }
  };

  // Apply sorting and filtering logic using useMemo to optimize performance
  const displayedImages = useMemo(() => {
    let filteredImages = images.slice(); // Create a copy of the images array

    // Filter by source if filterBySource is not null or empty
    if (filterBySource && filterBySource !== "") {
      filteredImages = filteredImages.filter(
        (image) => image.source === filterBySource
      );
    }

    // Sort by price if sortByPrice is true
    if (sortByPrice) {
      filteredImages.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
    }

    return filteredImages;
  }, [images, filterBySource, sortByPrice]);

  //render
  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={displayedImages} />}
    </div>
  );
};

export default Container;
