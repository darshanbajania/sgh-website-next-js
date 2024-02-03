"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ProductCard = ({
  label,
  price = 0,
}: {
  label: string;
  price: number;
}) => {
  const router = useRouter();

  const handleOnPress = () => {
    router.push("/viewProduct");
  };
  return (
    <div
      onClick={handleOnPress}
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
    >
      <img
        className="w-full h-80 object-cover"
        src="https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
        alt="Card 1"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-l font-semibold">{label}</h3>
          <h3 className="text-l ">Rs {price}</h3>
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