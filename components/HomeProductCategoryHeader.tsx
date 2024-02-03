import React from "react";
import { Link } from "@nextui-org/react";
const HomeProductCategoryHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 m-4">
      <div>
        <h1>Our Products</h1>
      </div>
      <div>
        <Link href="#" underline="always">
          View All
        </Link>
      </div>
    </div>
  );
};

export default HomeProductCategoryHeader;
