import React from "react";

const Image = ({ url, title, price, source}) => {
  return (
    <li>
      <p>{price} - {source} - {title}</p>
      <img src={url} alt={title} />
    </li>
    );
};

export default Image;
