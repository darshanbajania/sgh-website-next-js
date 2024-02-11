"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { PlusIcon } from "@/assets/PlusIcon";
import { MinusIcon } from "@/assets/MinusIcon";

const CounterStrip = ({
  onIncrementQuantity,
  onDecrementQuantity,
  defaultValue,
}) => {
  const [quantity, setQuantity] = useState(defaultValue || 0);
  useEffect(() => {
    setQuantity(defaultValue || 0);
  }, [defaultValue]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    onIncrementQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onDecrementQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="flex items-center">
        <Button
          size="sm"
          onClick={incrementQuantity}
          style={{ padding: 0 }}
          isIconOnly
        >
          <PlusIcon />
        </Button>
        <div className="w-6 md:w-10 mx-2">
          <p className="text-xl md:text-2xl text-center">{quantity}</p>
        </div>
        <Button size="sm" onClick={decrementQuantity} isIconOnly>
          <MinusIcon />
        </Button>
      </div>
    </>
  );
};

export default CounterStrip;
