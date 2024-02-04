"use client";

import CartIcon from "@/assets/CartIcon";
import { useCart } from "@/hooks/useCart";
import React from "react";

const CartLink = () => {
  const { cart } = useCart((state) => state);
  return (
    <div className="flex items-center justify-center gap-2">
      Cart{" "}
      <div>
        {cart?.length > 0 && (
          <div className="bg-red-500 rounded-full	h-5 w-5 flex justify-center items-center absolute -top-2 -right-3">
            {" "}
            <p className="text-xs text-white">{cart?.length}</p>
          </div>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default CartLink;
