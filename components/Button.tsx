import React from "react";
import { ButtonProps, Button as NextUIButton } from "@nextui-org/react";
const Button = ({
  children = "button",
  variant = "solid",
  ...props
}: ButtonProps) => {
  return (
    <NextUIButton
      size="md"
      color="primary"
      variant={variant}
      {...props}
      radius="sm"
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
