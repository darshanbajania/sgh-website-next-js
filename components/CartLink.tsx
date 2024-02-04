"use client";

import CartIcon from "@/assets/CartIcon";
import { useCart } from "@/hooks/useCart";
import React from "react";

const CartLink = () => {
  const { cart } = useCart((state) => state);
  return (
    <div className="flex items-center justify-center gap-2">
      {cart?.length} Carts <CartIcon />
    </div>
  );
};

export default CartLink;
