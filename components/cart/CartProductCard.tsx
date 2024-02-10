import React from "react";
import CounterStrip from "../CounterStrip";

const CartProductCard = ({ item }) => {
  console.log("🚀 ~ CartProductCard ~ item:", item);
  return (
    <div className="flex border-2 p-4 rounded-lg mb-5">
      <div className="p-4 w-1/3" style={{ width: 200 }}>
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
      <div className="pl-4  w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl">{item.label}</h2>
          <p className="text-current text-justify">{item.description}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="text-2xl">₹2000</p>

          <CounterStrip defaultValue={5} />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
