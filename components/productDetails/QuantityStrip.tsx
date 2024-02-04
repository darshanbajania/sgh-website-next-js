"use client";
import React, { useState } from "react";

import CounterStrip from "../CounterStrip";
import Button from "../Button";

const QuantityStrip = ({}) => {
  const onIncrementQuantity = (quantity) => {
    console.log("increment", quantity);
  };
  const onDecrementQuantity = (quantity) => {
    console.log("decrement", quantity);
  };
  return (
    <>
      <CounterStrip
        onIncrementQuantity={onIncrementQuantity}
        onDecrementQuantity={onDecrementQuantity}
      />
      <div className="flex gap-4 mt-4">
        <Button>Buy Now</Button>
        <Button variant="bordered">Add to Cart</Button>
      </div>
    </>
  );
};

export default QuantityStrip;
