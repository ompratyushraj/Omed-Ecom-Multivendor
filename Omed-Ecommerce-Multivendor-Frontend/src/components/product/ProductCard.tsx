import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../type/ProductType";
import { useAppDispatch } from "../../state/Store";
import { addProductToWishlist } from "../../state/user/wishlistSlice";


const ProductCard = ({item}:{item:Product}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, item.images.length]);

  const handleWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (item.productId) {
      dispatch(addProductToWishlist({ productId: item.productId }));
    }
  }

  return (
    <>
      <div onClick={() => navigate(`/productdetail/${item.category?.categoryId}/${item.productTitle}/${item.productId}`)} className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.images.map((item, index) => (
            <img
              key={index}
              className="card-media object-top"
              src={item}
              alt="cardimages"
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`, backgroundColor:"lightgrey", borderRadius:"20px"
              }}
            />
          ))}

          {isHovered &&
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button onClick={handleWishlist} variant="contained" color="primary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button variant="contained" color="primary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          }
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>{item.seller?.businessDetails.businessName}</h1>
            <p>{item.productTitle}</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">₹ {item.sellingPrice}</span>
            <span className="thin-line-through text-gray-400">₹ {item.mrpPrice}</span>
            <span className="text-primary-color font-semibold">{item.discountPercent}%</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductCard;
