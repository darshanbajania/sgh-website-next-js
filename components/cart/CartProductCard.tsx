"use client";
import React from "react";
import CounterStrip from "../CounterStrip";
import { useCart } from "@/hooks/useCart";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT_QUANTITY } from "@/lib/mutations";
import { getSession } from "next-auth/react";

const CartProductCard = ({
  item,
  label,
  description,
  price,
  quantity,
  cartProductId,
}) => {
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
        object: {
          id: item.id,
          productId: cartProductId,
          quantity: quantity,
          customerId: session?.user?.id,
        },
      },
      onCompleted: (data) => {
        // incrementCartItem({ id: item.id, quantity: quantity });
      },
    });
  };
  const onDecrementQuantity = async (quantity) => {
    const session = await getSession();

    updateProductQuantity({
      variables: {
        object: {
          id: item.id,
          productId: cartProductId,
          quantity: quantity,
          customerId: session?.user?.id,
        },
      },
      onCompleted: (data) => {
        // decrementCartItem({ id: item.id, quantity: quantity });
      },
    });
  };
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
          <h2 className="text-xl font-medium">{label}</h2>
          <p className="text-current text-justify">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-5  w-full">
          <p className="text-xl font-medium">₹{price}</p>

          <CounterStrip
            loading={loading}
            onIncrementQuantity={onIncrementQuantity}
            onDecrementQuantity={onDecrementQuantity}
            defaultValue={quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
