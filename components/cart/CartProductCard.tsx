"use client";
import React from "react";
import CounterStrip from "../CounterStrip";

const CartProductCard = ({ item }) => {
  return (
    <div className="flex border-2 p-1 rounded-lg mb-5">
      <div className="p-1 w-[10rem]">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
      <div className="pl-4  flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-medium">{item.label}</h2>
          <p className="text-current text-justify">{item.description}</p>
        </div>
        <div className="flex justify-between items-center mt-5  w-full">
          <p className="text-xl font-medium">₹{item.price}</p>

          <CounterStrip defaultValue={item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
