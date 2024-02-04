"use client";
import React, { useState } from "react";

import CounterStrip from "../CounterStrip";
import Button from "../Button";

const QuantityStrip = ({ itemId }) => {
  const getCartValue = JSON.parse(sessionStorage.getItem("cart"));

  const onIncrementQuantity = async (quantity) => {
    const getCurrentCartValue = JSON.parse(sessionStorage.getItem("cart"));

    if (getCurrentCartValue) {
      if (getCurrentCartValue?.length > 0) {
        getCurrentCartValue?.map((item) => {
          if (item?.id === itemId) {
            item.quantity = item.quantity + 1;
            return { id: item.id, quantity: item.quantity };
          } else {
            return item;
          }
        });
      }
      sessionStorage.setItem("cart", JSON.stringify(getCurrentCartValue));
    } else {
      sessionStorage.setItem(
        "cart",
        JSON.stringify([{ id: itemId, quantity: 1 }])
      );
    }
  };
  const onDecrementQuantity = (quantity) => {
    const getCurrentCartValue = JSON.parse(sessionStorage.getItem("cart"));

    if (getCurrentCartValue) {
      if (getCurrentCartValue?.length > 0) {
        getCurrentCartValue?.map((item) => {
          if (item?.id === itemId) {
            item.quantity = item.quantity - 1;
            return { id: item.id, quantity: item.quantity };
          } else {
            return item;
          }
        });
      }
      sessionStorage.setItem("cart", JSON.stringify(getCurrentCartValue));
    } else {
      sessionStorage.removeItem("cart");
    }
    console.log("decrement", quantity);
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
