"use client";
import CartProductCard from "@/components/cart/cartProductCard";
import { useCart } from "@/hooks/useCart";
import React from "react";

const Cart = () => {
  const { cart } = useCart((state) => state);
  return (
    <div>
      <div className="mx-auto p-4  flex flex-wrap">
        {/* Column 1 */}
        <div className="w-full md:w-1/2 p-4">
          {cart.map((item) => {
            return <CartProductCard key={item.id} item={item} />;
          })}
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2 p-4">asdasda</div>
      </div>
    </div>
  );
};

export default Cart;
