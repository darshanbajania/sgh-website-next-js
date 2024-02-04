// import { Image } from "@nextui-org/react";
import React from "react";
import { GET_PRODUCT_DETAILS } from "@/lib/queries";
import { getClient } from "@/lib/client";
import ProductCarousal from "@/components/productCarousal";
import QuantityStrip from "@/components/productDetails/QuantityStrip";

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
        <ProductCarousal
          productData={data?.products_product_by_pk?.productImages}
        />

        {/* Column 2 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-4 ">
            <h1 className="text-3xl">{data?.products_product_by_pk?.label}</h1>
            <p className="text-base text-current">
              {data?.products_product_by_pk?.description || "description"}
            </p>
            <p className="text-2xl mt-8">
              ₹{data?.products_product_by_pk?.price}
            </p>
            <QuantityStrip itemId={params?.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
