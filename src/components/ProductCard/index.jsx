import React from "react";
import "./styles.css";

export const ProductCard = ({onAddToCard}) => {
  return (
    <div className="product-card">
      <div className="product-card__title">Coffee</div>
      <div className="product-card__picture">
        <img alt="Product" src="http://placeimg.com/150/150/tech" />
      </div>
      <div className="product-card__price">10.000</div>
      <button onClick={onAddToCard} className="product-card__add">Add to card</button>
    </div>
  );
};
