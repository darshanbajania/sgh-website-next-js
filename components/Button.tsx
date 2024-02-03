import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";
const Button = ({ label = "button", variant = "solid" }) => {
  return (
    <NextUIButton color="primary" variant={variant}>
      {label}
    </NextUIButton>
  );
};

export default Button;
