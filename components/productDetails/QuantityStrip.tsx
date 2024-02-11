"use client";
import React, { useState } from "react";

import CounterStrip from "../CounterStrip";
import Button from "../Button";
import { useCart } from "@/hooks/useCart";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT_QUANTITY } from "@/lib/mutations";
import { getSession } from "next-auth/react";

const QuantityStrip = ({ itemId }) => {
  // const getCartValue = JSON.parse(sessionStorage.getItem("cart"));
  const { incrementCartItem, cart, decrementCartItem } = useCart(
    (state) => state
  );
  const [updateProductQuantity, { loading }] = useMutation(
    UPDATE_PRODUCT_QUANTITY
  );
  const onIncrementQuantity = async (quantity) => {
    const session = await getSession();
    updateProductQuantity({
      variables: {
        itemId: itemId,
        quantity: quantity,
        customerId: session?.user?.id,
      },
      onCompleted: (data) => {
        incrementCartItem({ id: itemId, quantity: quantity });
      },
    });
  };
  const onDecrementQuantity = async (quantity) => {
    const session = await getSession();

    updateProductQuantity({
      variables: {
        itemId: itemId,
        quantity: quantity,
        customerId: session?.user?.id,
      },
      onCompleted: (data) => {
        decrementCartItem({ id: itemId, quantity: quantity });
      },
    });
  };
  return (
    <>
      <CounterStrip
        loading={loading}
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
