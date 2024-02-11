import { create } from "zustand";

export const useCart = create((set) => ({
  cart: JSON.parse(sessionStorage.getItem("cart")) || [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  incrementCartItem: async (item) => {
    const itemId = item?.id;
    const quantity = item?.quantity;
    const getCurrentCartValue = JSON.parse(sessionStorage.getItem("cart"));

    if (getCurrentCartValue) {
      if (getCurrentCartValue?.length >= 0) {
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
          set((state) => ({ cart: getCurrentCartValue }));
        } else {
          sessionStorage.setItem(
            "cart",
            JSON.stringify([
              ...getCurrentCartValue,
              { id: itemId, quantity: 1 },
            ])
          );
          set((state) => ({
            cart: [...getCurrentCartValue, { id: itemId, quantity: 1 }],
          }));
        }
      }
    } else {
      sessionStorage.setItem(
        "cart",
        JSON.stringify([{ id: itemId, quantity: 1 }])
      );
      set((state) => ({
        cart: [{ id: itemId, quantity: 1 }],
      }));
    }
  },
  decrementCartItem: async (item) => {
    const itemId = item?.id;
    const quantity = item?.quantity;
    const getCurrentCartValue = JSON.parse(sessionStorage.getItem("cart"));

    if (getCurrentCartValue) {
      const currentItem = getCurrentCartValue?.find(
        (item) => item?.id === itemId
      );
      if (currentItem) {
        if (currentItem?.quantity > 1) {
          const updatedValue = [
            ...getCurrentCartValue.filter((item) => item?.id !== itemId),
            { id: currentItem.id, quantity: currentItem.quantity - 1 },
          ];
          sessionStorage.setItem("cart", JSON.stringify(updatedValue));
          set((state) => ({ cart: updatedValue }));
        } else if (currentItem?.quantity === 1) {
          const updatedItems = getCurrentCartValue?.filter(
            (item) => item?.id !== itemId
          );
          sessionStorage.setItem("cart", JSON.stringify(updatedItems));
          set((state) => ({ cart: updatedItems }));
        }
      }
    }
  },
  intializeCart: async (cartData) => {
    if (cartData) {
      set((state) => ({ cart: cartData }));
    }
  },
}));
// export const useCart = () => {
//   const cart = JSON.parse(sessionStorage.getItem("cart"));
//   const incrementItemCart = async (item) => {
//     const itemId = item?.id;
//     const quantity = item?.quantity;
//     const getCurrentCartValue = JSON.parse(sessionStorage.getItem("cart"));

//     if (getCurrentCartValue) {
//       if (getCurrentCartValue?.length > 0) {
//         if (getCurrentCartValue?.find((item) => item?.id === itemId)) {
//           getCurrentCartValue?.map((item) => {
//             if (item?.id === itemId) {
//               item.quantity = item.quantity + 1;
//               return { id: item.id, quantity: item.quantity };
//             } else {
//               return item;
//             }
//           });
//           sessionStorage.setItem("cart", JSON.stringify(getCurrentCartValue));
//         } else {
//           sessionStorage.setItem(
//             "cart",
//             JSON.stringify([
//               ...getCurrentCartValue,
//               { id: itemId, quantity: 1 },
//             ])
//           );
//         }
//       }
//     } else {
//       sessionStorage.setItem(
//         "cart",
//         JSON.stringify([{ id: itemId, quantity: 1 }])
//       );
//     }
//   };
//   const decrementItemQuantity = (item) => {
//   const itemId = item?.id;
//   const quantity = item?.quantity;
//   const getCurrentCartValue = JSON.parse(sessionStorage.getItem("cart"));

//   if (getCurrentCartValue) {
//     if (getCurrentCartValue?.length > 0) {
//       getCurrentCartValue?.map((item) => {
//         if (item?.id === itemId) {
//           item.quantity = item.quantity - 1;
//           return { id: item.id, quantity: item.quantity };
//         } else {
//           return item;
//         }
//       });
//     }
//     sessionStorage.setItem("cart", JSON.stringify(getCurrentCartValue));
//   } else {
//     sessionStorage.removeItem("cart");
//   }
//   console.log("decrement", quantity);
// };
// return {
//   incrementItemCart,
//   decrementItemQuantity,
//   cart,
// };
// };
