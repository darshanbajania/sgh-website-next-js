"use client";
import React, { useState } from "react";

import CounterStrip from "../CounterStrip";
import Button from "../Button";
import { useCart } from "@/hooks/useCart";

const QuantityStrip = ({ itemId }) => {
  const getCartValue = JSON.parse(sessionStorage.getItem("cart"));
  const { incrementItemCart, cart, decrementItemQuantity } = useCart();
  const onIncrementQuantity = async (quantity) => {
    incrementItemCart({ id: itemId, quantity: quantity });
  };
  const onDecrementQuantity = (quantity) => {
    decrementItemQuantity({ id: item, quantity: quantity });
  };
  return (
    <>
      <CounterStrip
        onIncrementQuantity={onIncrementQuantity}
        onDecrementQuantity={onDecrementQuantity}
        defaultValue={
          getCartValue?.filter((item) => item.id === itemId)[0]?.quantity
        }
      />
      <div className="flex gap-4 mt-4">
        <Button>Buy Now</Button>
        <Button variant="bordered">Add to Cart</Button>
      </div>
    </>
  );
};

export default QuantityStrip;
