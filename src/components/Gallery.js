import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let url = image.url;
      let title = image.title;
      let price = image.price;
      let source = image.source
      return <Image url={url} price={price} title={title} source={source} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
