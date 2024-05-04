"use client";
import Button from "@/components/Button";
import CheckoutProductCard from "@/components/cart/checkoutProductCard";
import {
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const [isShippingDataValid, setIsShippingDataValid] = useState({
    fullName: true,
    email: true,
    phoneNumber: true,
    addressLine1: true,
    addressLine2: true,
    city: true,
    state: true,
    pinCode: true,
  });
  const isDataValid = (fieldValue, fieldType) => {
    switch (fieldType) {
      case "name":
        return /^[A-Za-z\s]+$/.test(fieldValue);

      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue);

      case "phone":
        return /^\d+$/.test(fieldValue);

      case "address":
        return fieldValue.trim() !== "";

      case "pin-code":
        return /^\d+$/.test(fieldValue);

      case "text":
        return fieldValue.trim() !== "";

      default:
        return false;
    }
  };
  console.log("🚀 ~ Checkout ~ shippingAddress:", shippingAddress);

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const citiesData = [
    {
      label: "Mumbai",
      value: "mumbai",
    },
  ];
  const isShippingAddressValid =
    isDataValid(shippingAddress.fullName, "name") &&
    isDataValid(shippingAddress.email, "email") &&
    isDataValid(shippingAddress.phoneNumber, "phone") &&
    isDataValid(shippingAddress.addressLine1, "address") &&
    isDataValid(shippingAddress.city, "text") &&
    isDataValid(shippingAddress.email, "text") &&
    isDataValid(shippingAddress.pinCode, "pin-code");
  const onSubmit = () => {
    handleOpen("opaque");
  };
  return (
    <div>
      <div className="mx-auto  flex flex-wrap">
        {/* Column 1 */}

        <div className="w-full md:w-2/3 p-4 ">
          <div className="border-1 rounded-lg p-4">
            <h1 className="text-lg">
              Please fill following details for checkout
            </h1>
            <div className="p-4 rounded-lg border-1 mt-4">
              <h3>Shipping Address</h3>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-4">
                <Input
                  isRequired
                  variant="bordered"
                  radius="sm"
                  labelPlacement="outside"
                  size="sm"
                  type="text"
                  label="Full Name"
                  placeholder="Your Name"
                  defaultValue={shippingAddress.fullName}
                  value={shippingAddress.fullName}
                  onValueChange={(value) => {
                    setShippingAddress((prev) => ({
                      ...prev,
                      fullName: value,
                    }));
                  }}
                  isInvalid={!isShippingDataValid.fullName}
                  errorMessage={
                    !isShippingDataValid.fullName
                      ? "Please enter a valid name"
                      : null
                  }
                />
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  size="sm"
                  variant="bordered"
                  radius="sm"
                  labelPlacement="outside"
                  placeholder="junior@nextui.org"
                  defaultValue={shippingAddress.email}
                  value={shippingAddress.email}
                  onValueChange={(value) => {
                    setShippingAddress((prev) => ({
                      ...prev,
                      email: value,
                    }));
                  }}
                  isInvalid={!isShippingDataValid.email}
                  errorMessage={
                    !isShippingDataValid.email
                      ? "Please enter a valid email"
                      : null
                  }
                />
                <Input
                  isRequired
                  type="phone"
                  label="Phone Number"
                  size="sm"
                  labelPlacement="outside"
                  variant="bordered"
                  radius="sm"
                  placeholder="XXXXXXXXXXX"
                  className=""
                  defaultValue={shippingAddress.phoneNumber}
                  value={shippingAddress.phoneNumber}
                  onValueChange={(value) => {
                    setShippingAddress((prev) => ({
                      ...prev,
                      phoneNumber: value,
                    }));
                  }}
                  isInvalid={!isShippingDataValid.phoneNumber}
                  errorMessage={
                    !isShippingDataValid.phoneNumber
                      ? "Please enter a valid phone"
                      : null
                  }
                />
              </div>
              <div className="pt-2 flex flex-wrap gap-x-4">
                <Input
                  isRequired
                  type="text"
                  label="Address Line 1"
                  labelPlacement="outside"
                  variant="bordered"
                  radius="sm"
                  size="sm"
                  placeholder="sada"
                  className="mt-4 pb-4 md:w-[40%]"
                  defaultValue={shippingAddress.addressLine1}
                  value={shippingAddress.addressLine1}
                  onValueChange={(value) => {
                    setShippingAddress((prev) => ({
                      ...prev,
                      addressLine1: value,
                    }));
                  }}
                  isInvalid={!isShippingDataValid.addressLine1}
                  errorMessage={
                    !isShippingDataValid.addressLine1
                      ? "Please enter a valid address"
                      : null
                  }
                />
                <Input
                  type="text"
                  label="Address Line 2"
                  labelPlacement="outside"
                  placeholder=""
                  variant="bordered"
                  radius="sm"
                  size="sm"
                  className="my-4 md:w-[40%]"
                  defaultValue={shippingAddress.addressLine2}
                  value={shippingAddress.addressLine2}
                  onValueChange={(value) => {
                    setShippingAddress((prev) => ({
                      ...prev,
                      addressLine2: value,
                    }));
                  }}
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
                <Input
                  isRequired
                  type="text"
                  label="City"
                  labelPlacement="outside"
                  variant="bordered"
                  radius="sm"
                  size="sm"
                  placeholder="Ahmedabad"
                  className="max-w-xs"
                  defaultValue={shippingAddress.city}
                  value={shippingAddress.city}
                  onValueChange={(value) => {
                    setShippingAddress((prev) => ({
                      ...prev,
                      city: value,
                    }));
                  }}
                  isInvalid={!isShippingDataValid.city}
                  errorMessage={
                    !isShippingDataValid.city
                      ? "Please enter a valid city"
                      : null
                  }
                />
                <Input
                  isRequired
                  type="phone"
                  label="State"
                  variant="bordered"
                  radius="sm"
                  size="sm"
                  labelPlacement="outside"
                  placeholder="Gujarat"
                  className="max-w-xs"
                  defaultValue={shippingAddress.state}
                  value={shippingAddress.state}
                  onValueChange={(value) => {
                    setShippingAddress((prev) => ({
                      ...prev,
                      state: value,
                    }));
                  }}
                  isInvalid={!isShippingDataValid.state}
                  errorMessage={
                    !isShippingDataValid.state
                      ? "Please enter a valid state"
                      : null
                  }
                />
                <Input
                  isRequired
                  type="text"
                  label="Pincode"
                  placeholder="xxxxxx"
                  labelPlacement="outside"
                  variant="bordered"
                  radius="sm"
                  size="sm"
                  defaultValue={shippingAddress.pinCode}
                  value={shippingAddress.pinCode}
                  onValueChange={(value) => {
                    setShippingAddress((prev) => ({
                      ...prev,
                      pinCode: value,
                    }));
                  }}
                  isInvalid={!isShippingDataValid.pinCode}
                  errorMessage={
                    !isShippingDataValid.pinCode
                      ? "Please enter a valid pinCode"
                      : null
                  }
                />
              </div>
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
              <Button
                isDisabled={!isShippingAddressValid}
                onClick={onSubmit}
                className="w-full mt-4"
                size="lg"
              >
                Place Order
              </Button>
              <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 text-black">
                        Order Placed
                      </ModalHeader>
                      <ModalBody className="text-black">
                        <div className="flex justify-center">
                          <div style={{ height: 100, width: 100 }}>
                            <img
                              src="./correct.png"
                              height={"100%"}
                              width={"100%"}
                            />
                          </div>
                        </div>
                        <p className="mt-4">
                          Order Placed Successfully. Your Order Id is 123456789
                        </p>
                        <p className="text-sm text-center">
                          A copy of your order will be sent to your email{" "}
                          {isShippingAddressValid.toString()}
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onPress={onClose}>
                          Got it
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
