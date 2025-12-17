import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";
import type { CartItem } from "../../type/CartType";
import { useAppDispatch } from "../../state/Store";
import { updateCartItem } from "../../state/user/cartSlice";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();
  const handleUpdateQuantity = (value: number) => () => {
    dispatch(
      updateCartItem({
        jwt: localStorage.getItem("jwt"),
        cartItemId: item.cartItemId,
        cartItem: { quantity: item.quantity + value },
      })
    );
  };
  return (
    <>
      <div className="border rounded-md relative">
        <div className="p-5 flex gap-3">
          <div>
            <img
              className="w-[90px] bg-slate-400 h-full rounded-md"
              src={item.product.images[0]}
              alt="CartItemCardImage"
            />
          </div>
          <div className="space-y-2">
            <h1 className="font-semibold text-lg">
              {item.product.seller?.businessDetails.businessName}
            </h1>
            <p className="text-gray-600 font-medium text-sm">
              {item.product.productTitle}
            </p>

            <p className="text-gray-400 text-xs">
              <strong>Sold by:</strong>
              Tata Motors{" "}
            </p>
            <p className="text-sm"> All time service available</p>
            <p className="text-sm text-gray-500">
              <strong>Quantity in showroom: </strong>
              {item.quantity}
            </p>
          </div>
        </div>
        <Divider />
        <div className="flex justify-between items-center">
          <div className="px-5 py-2 flex justify-between items-center">
            <div
              className="flex items-center gap-2 w-[140px]
justify-between"
            >
              <Button disabled={item.quantity <= 1} onClick={handleUpdateQuantity(-1)}>
                <Remove />
              </Button>
              <span>{item.quantity}</span>
              <Button onClick={handleUpdateQuantity(1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="pr-5">
            <p className="text-gray-700 font-medium">₹{item.sellingPrice}</p>
          </div>
        </div>
        <div className="absolute top-1 right-1">
          <IconButton color="primary">
            <Close />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
