"use client";
import React, { useState } from "react";
import Button from "./Button";
import { PlusIcon } from "@/assets/PlusIcon";
import { MinusIcon } from "@/assets/MinusIcon";

const CounterStrip = ({
  onIncrementQuantity,
  onDecrementQuantity,
  defaultValue,
}) => {
  const [quantity, setQuantity] = useState(defaultValue || 0);
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
      <div className="flex items-center mt-5">
        <Button onClick={incrementQuantity} style={{ padding: 0 }} isIconOnly>
          <PlusIcon />
        </Button>
        <div className="w-10 mx-2">
          <p className="text-2xl text-center">{quantity}</p>
        </div>
        <Button onClick={decrementQuantity} isIconOnly>
          <MinusIcon />
        </Button>
      </div>
    </>
  );
};

export default CounterStrip;
