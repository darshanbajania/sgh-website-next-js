"use client";
import React, { useState } from "react";
import Button from "./Button";
import { PlusIcon } from "@/assets/PlusIcon";
import { MinusIcon } from "@/assets/MinusIcon";

const CounterStrip = ({ onIncrementQuantity, onDecrementQuantity }) => {
  const [quantity, setQuantity] = useState(0);
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
    <div className="flex items-center mt-5">
      <Button onClick={incrementQuantity} style={{ padding: 0 }} isIconOnly>
        <PlusIcon />
      </Button>
      <div className="w-10 mx-4">
        <input
          className="text-2xl"
          placeholder="0"
          type="number"
          value={quantity}
          min={0}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Button onClick={decrementQuantity} isIconOnly>
        <MinusIcon />
      </Button>
    </div>
  );
};

export default CounterStrip;
