import React from "react";

const CheckoutProductCard = () => {
  return (
    <div className="flex gap-4 my-4">
      <div
        className="bg-gray-100 items-center flex justify-center"
        style={{ height: 100, width: 100 }}
      >
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
          width={"100%"}
          width={"100%"}
        />
      </div>
      <div className="flex justify-between " style={{ flex: 1 }}>
        <div>
          <p className="text-xl">Product Label</p>
          <p>x1</p>
        </div>
        <div>
          <p className="text-lg">₹2500.00</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
