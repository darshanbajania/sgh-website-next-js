"use client";
import Button from "@/components/Button";
import CartProductCard from "@/components/cart/cartProductCard";
import { useCart } from "@/hooks/useCart";
import { GET_CART_DATA } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useCart((state) => state);
  const router = useRouter();

  return (
    <div>
      <div>
        <h1 className="text-xl font-regular  mt-4">Cart</h1>
      </div>
      <div className=" flex flex-wrap justify-between">
        {/* Column 1 */}
        <div className="w-full md:w-[30%] p-4">
          {cart.map((item, index) => {
            return <CartProductCard key={index} item={item} />;
          })}
        </div>
        {/* Column 2 */}
        <div className="w-full md:w-1/3 p-4">
          <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Item</TableColumn>
              <TableColumn>Qty</TableColumn>
              <TableColumn>Amount (₹)</TableColumn>
            </TableHeader>
            <TableBody>
              {cart.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.label}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {Number(item.price) * Number(item.quantity)}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow key="3" className="bg-gray-100">
                <TableCell>Delivery Charge</TableCell>
                <TableCell colSpan={0}></TableCell>
                <TableCell>150</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell></TableCell>
                <TableCell colSpan={0}></TableCell>
                <TableCell className="text-lg">
                  {cart.reduce((a, b) => a + b.quantity * b.price, 0)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-center mt-4">
            <Button
              onPress={() => {
                router.push("/checkout");
              }}
            >
              Checkout Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
