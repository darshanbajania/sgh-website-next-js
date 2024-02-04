// import { Image } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { GET_PRODUCT_DETAILS } from "@/lib/queries";
import { getClient } from "@/lib/client";

const page = async ({ params }) => {
  const client = getClient();
  const { data, loading, error } = await client.query({
    query: GET_PRODUCT_DETAILS,
    variables: {
      productId: params.id,
    },
  });
  return (
    <div>
      <div className="mx-auto p-4  flex flex-wrap">
        {/* Column 1 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-4 shadow-md rounded-md mb-4 md:mb-0 ">
            <div className="flex  justify-center">
              <img
                className="w-full md:w-2/3  "
                // src="https://www.theindiantoys.com/wp-content/uploads/woocommerce-placeholder.png"
                src={data?.products_product_by_pk?.productImages?.[0]?.image}
                width={"80%"}
                style={{ alignSelf: "center" }}
              />
            </div>
            <div className="" style={{ width: "100%" }}>
              <div
                className="flex  overflow-x-scroll align-middle"
                style={{
                  width: "100%",
                }}
              >
                {data?.products_product_by_pk?.productImages?.map((item) => {
                  return (
                    <div key={item.id} className="mr-5 mt-10">
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

        {/* Column 2 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            <h1>{data?.products_product_by_pk?.label}</h1>
            <p>{data?.products_product_by_pk?.description}</p>
            <p>₹{data?.products_product_by_pk?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
