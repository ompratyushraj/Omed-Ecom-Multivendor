import React from "react";
import type { Product } from "../../type/ProductType";
import { useAppDispatch } from "../../state/Store";
import { addProductToWishlist } from "../../state/user/wishlistSlice";
import { Close } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const WishlistProductCard = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();
  const handleWishlist = () => {
    item.productId &&
      dispatch(addProductToWishlist({ productId: item.productId }));
  };
  return (
    <div className="w-60 relative">
      <div className="w-full">
        <img src={item.images[0]} className="object-top w-full" alt="" />
      </div>
      <div className="pt-3 space-y-1 ">
        <p>{item.productTitle}</p>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>{item.seller?.businessDetails.businessName}</h1>
            <p>{item.productTitle}</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">
              ₹ {item.sellingPrice}
            </span>
            <span className="thin-line-through text-gray-400">
              ₹ {item.mrpPrice}
            </span>
            <span className="text-primary-color font-semibold">
              {item.discountPercent}%
            </span>
          </div>
        </div>
        <div className="absolute top-1 right-1">
          <button onClick={handleWishlist}>
            <Close
              className="cursor-pointer bg-white rounded-full p-1"
              sx={{ color: teal }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
