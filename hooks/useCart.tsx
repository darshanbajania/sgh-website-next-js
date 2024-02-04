export const useCart = () => {
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  const incrementItemCart = async (item) => {
    const itemId = item?.id;
    const quantity = item?.quantity;
    const getCurrentCartValue = JSON.parse(sessionStorage.getItem("cart"));

    if (getCurrentCartValue) {
      if (getCurrentCartValue?.length > 0) {
        if (getCurrentCartValue?.find((item) => item?.id === itemId)) {
          getCurrentCartValue?.map((item) => {
            if (item?.id === itemId) {
              item.quantity = item.quantity + 1;
              return { id: item.id, quantity: item.quantity };
            } else {
              return item;
            }
          });
          sessionStorage.setItem("cart", JSON.stringify(getCurrentCartValue));
        } else {
          sessionStorage.setItem(
            "cart",
            JSON.stringify([
              ...getCurrentCartValue,
              { id: itemId, quantity: 1 },
            ])
          );
        }
      }
    } else {
      sessionStorage.setItem(
        "cart",
        JSON.stringify([{ id: itemId, quantity: 1 }])
      );
    }
  };
  const decrementItemQuantity = (item) => {
    const itemId = item?.id;
    const quantity = item?.quantity;
    const getCurrentCartValue = JSON.parse(sessionStorage.getItem("cart"));

    if (getCurrentCartValue) {
      if (getCurrentCartValue?.length > 0) {
        getCurrentCartValue?.map((item) => {
          if (item?.id === itemId) {
            item.quantity = item.quantity - 1;
            return { id: item.id, quantity: item.quantity };
          } else {
            return item;
          }
        });
      }
      sessionStorage.setItem("cart", JSON.stringify(getCurrentCartValue));
    } else {
      sessionStorage.removeItem("cart");
    }
    console.log("decrement", quantity);
  };
  return {
    incrementItemCart,
    decrementItemQuantity,
    cart,
  };
};
