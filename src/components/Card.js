import React from "react";

const Card = (props) => {
  const { title, image, description } = props.concepts;
  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default Card;
