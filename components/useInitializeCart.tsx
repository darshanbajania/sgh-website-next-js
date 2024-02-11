"use client";
import { GET_CART_DATA } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
export const useCartInitialize = () => {
  const { intializeCart } = useCart((state) => state);
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const fetchCurrentSession = async () => {
      const session = await getSession();

      setSessionData(session);
    };
    // if (status === "authenticated") {
    fetchCurrentSession();
    // }
  }, []);
  const { data, loading, error } = useQuery(GET_CART_DATA, {
    variables: {
      customerId: sessionData?.user.id,
    },
    skip: !sessionData,
    onCompleted: (data) => {
      if (data?.users_cartProduct.length > 0) {
        const newCartData = data?.users_cartProduct.map((item) => {
          return {
            id: item.productId,
            quantity: item.quantity,
            ...item.product,
          };
        });
        console.log("🚀 ~ newCartData ~ newCartData:", newCartData);
        intializeCart(newCartData);
      }
    },
  });
};
