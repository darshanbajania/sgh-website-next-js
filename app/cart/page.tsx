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
import { SessionProvider, getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useCart((state) => state);
  return (
    <div>
      <SessionProvider>
        <div className="mx-auto p-4  flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/2 p-4">
            {cart.map((item) => {
              return <CartProductCard key={item.id} item={item} />;
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
                <TableRow key="1">
                  <TableCell>Tony Reichert asdadadasdadsa</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>100</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>150</TableCell>
                </TableRow>
                <TableRow key="3" className="bg-gray-100">
                  <TableCell>Delivery Charge</TableCell>
                  <TableCell colSpan={0}></TableCell>
                  <TableCell>150</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell></TableCell>
                  <TableCell colSpan={0}></TableCell>
                  <TableCell className="text-lg">150</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex justify-center mt-4">
              <Button>Checkout Now</Button>
            </div>
          </div>
        </div>
      </SessionProvider>
    </div>
  );
};

export default Cart;
