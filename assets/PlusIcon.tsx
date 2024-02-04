import React from "react";
export const PlusIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8H8M8 8H15M8 8V1M8 8V15"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
