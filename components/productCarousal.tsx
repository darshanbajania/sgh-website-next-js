"use client";
import React, { useState } from "react";

const ProductCarousal = ({ productData }) => {
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);

  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-white p-4 shadow-md rounded-md mb-4 md:mb-0 ">
        <div className="flex  justify-center">
          <div style={{ height: 350 }} className=" bg-gray-100 ">
            <img
              // src="https://www.theindiantoys.com/wp-content/uploads/woocommerce-placeholder.png"
              src={
                selectedProduct?.image ||
                "https://www.theindiantoys.com/wp-content/uploads/woocommerce-placeholder.png"
              }
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="" style={{ width: "100%" }}>
          <div
            className="flex  overflow-x-scroll align-middle"
            style={{
              width: "100%",
            }}
          >
            {productData?.map((item) => {
              return (
                <div
                  onClick={() => {
                    setSelectedProduct(item);
                  }}
                  key={item.id}
                  className="mr-5 mt-10"
                >
                  <div
                    className="flex justify-center bg-gray-100 rounded-md"
                    style={{
                      height: 100,
                      width: 100,

                      padding: 10,
                    }}
                  >
                    <img
                      src={item?.image}
                      style={{
                        alignSelf: "center",
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousal;
