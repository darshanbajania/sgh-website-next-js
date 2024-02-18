"use client";
import Button from "@/components/Button";
import CheckoutProductCard from "@/components/cart/checkoutProductCard";
import {
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import React from "react";

const Checkout = () => {
  const citiesData = [
    {
      label: "Mumbai",
      value: "mumbai",
    },
  ];
  return (
    <div>
      <div className="mx-auto  flex flex-wrap">
        {/* Column 1 */}

        <div className="w-full md:w-2/3 p-4 ">
          <div className="border-1 rounded-lg p-4">
            <h1 className="text-lg">
              Please fill following details for checkout
            </h1>
            <div className="p-4 rounded-lg border-1">
              <h3>Shipping Address</h3>
              <Input
                isRequired
                type="text"
                label="Full Name"
                placeholder="Your Name"
                className="my-4"
              />
              <Input
                isRequired
                type="email"
                label="Email"
                placeholder="junior@nextui.org"
                className="my-4"
              />
              <Input
                isRequired
                type="phone"
                label="Phone Number"
                placeholder="XXXXXXXXXXX"
                className="my-4"
              />
              <Input
                isRequired
                type="phone"
                label="Address Line 1"
                placeholder=""
                className="my-4"
              />
              <Input
                isRequired
                type="phone"
                label="Address Line 2"
                placeholder=""
                className="my-4"
              />
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
                <Input
                  isRequired
                  type="phone"
                  label="City"
                  placeholder="Ahmedabad"
                  className="max-w-xs"
                />
                <Input
                  isRequired
                  type="phone"
                  label="State"
                  placeholder="Gujarat"
                  className="max-w-xs"
                />
              </div>

              <Input
                isRequired
                type="phone"
                label="Pincode"
                placeholder="xxxxxx"
                className="max-w-xs"
              />
            </div>
            <div className="p-4 rounded-lg border-1 mt-4">
              <h3>Payment Details</h3>
              <p className="text-xl">
                Currently we are accepting only Cash on delivery
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/3 p-4 ">
          <div className="border-1 rounded-lg p-4">
            <h2>Your Order</h2>
            <CheckoutProductCard />
            <CheckoutProductCard />
            <CheckoutProductCard />
            <CheckoutProductCard />

            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm">Subtotal</p>
                <p>₹2500.00</p>
              </div>

              <Divider className="my-4" />
              <div className="flex justify-between items-center">
                <p className="text-sm">Grand Total</p>
                <p className="text-xl">₹2500.00</p>
              </div>
              <Button className="w-full mt-4" size="lg">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
