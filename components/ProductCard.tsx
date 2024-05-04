"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ProductCard = ({ item }: { label: string; price: number }) => {
  const router = useRouter();

  const handleOnPress = () => {
    router.push("/viewProduct/" + item.id);
  };
  return (
    <div
      onClick={handleOnPress}
      className="w-[15rem] rounded overflow-hidden shadow-md cursor-pointer"
    >
      <div className="w-full h-[8rem]   flex items-center justify-center bg-gray-50 p-2">
        <img
          className=" object-contain w-full h-full "
          src={
            item.productImages[0]?.image ||
            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          }
          alt="Card 1"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-l font-semibold">{item.label}</h3>
          <h3 className="text-l ">Rs {item.price}</h3>
        </div>
        <p className="text-gray-700">Size 5</p>
        <div className="mt-4 flex justify-between">
          <Button variant="bordered">Add to Cart</Button>
          <Button onClick={handleOnPress}>View</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
