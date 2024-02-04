"use client";
import React, { useState } from "react";

import CounterStrip from "../CounterStrip";
import Button from "../Button";
import { useCart } from "@/hooks/useCart";

const QuantityStrip = ({ itemId }) => {
  // const getCartValue = JSON.parse(sessionStorage.getItem("cart"));
  const { incrementCartItem, cart, decrementCartItem } = useCart(
    (state) => state
  );
  const onIncrementQuantity = async (quantity) => {
    incrementCartItem({ id: itemId, quantity: quantity });
  };
  const onDecrementQuantity = (quantity) => {
    decrementCartItem({ id: itemId, quantity: quantity });
  };
  return (
    <>
      <CounterStrip
        onIncrementQuantity={onIncrementQuantity}
        onDecrementQuantity={onDecrementQuantity}
        defaultValue={cart?.filter((item) => item.id === itemId)[0]?.quantity}
      />
      <div className="flex gap-4 mt-4">
        <Button>Buy Now</Button>
        <Button variant="bordered">Add to Cart</Button>
      </div>
    </>
  );
};

export default QuantityStrip;
