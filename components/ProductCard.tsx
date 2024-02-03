import React from "react";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-80 object-cover"
        src="https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
        alt="Card 1"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-l font-semibold">Laddu Gopal Wagha</h3>
          <h3 className="text-l ">Rs 100</h3>
        </div>
        <p className="text-gray-700">Size 5</p>
        <div className="mt-4 flex justify-between">
          <Button label="Add to cart" variant="bordered" />
          <Button label="Buy now" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
