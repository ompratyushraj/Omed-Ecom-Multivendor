import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../state/Store";
import { mainCategory } from "../../data/category/mainCategory";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAppSelector(store => store);
 
  return (
    <>
      <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1  onClick={()=>navigate("/")} className="logo cursor-pointer text-2xl md:text-4xl">OMED</h1>
            </div>
            <ul className="flex items-center font-medium text-grey-800">
              {mainCategory.map((item) => (
                <li
                  key={item.categoryId}
                  onMouseLeave={() => {
                    setShowCategorySheet(false);
                  }}
                  onMouseEnter={() => {
                    setShowCategorySheet(true);
                    setSelectedCategory(item.categoryId);
                  }}
                  className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {auth.user ? (
              <Button onClick={()=>navigate("/account/order")} className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="http://cdn.pixabay.com/photo/2015/04/09/28/head-723540_640.jpg"
                />
                <h1 className="font-semibold hidden lg:block text-primary-color">
                  {/* {auth.user?.firstName} */}
                  {(auth.user?.firstName || "") + " " + (auth.user?.lastName || "")}

                </h1>
              </Button>
            ) : (
              <Button variant="contained" onClick={() => navigate("/login")} className="text-primary-color">
                Login
              </Button>
            )}

            <IconButton onClick={()=>navigate("/wishlist")}>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <IconButton>
              <LocalGroceryStoreIcon
                onClick={()=>navigate("/cart")}
                className="text-grey-700"
                sx={{ fontSize: 29 }}
                color="success"
              />
            </IconButton>

            {isLarge && (
              <Button
                color="success"
                sx={{ borderRadius: "50px" }}
                startIcon={<Storefront />}
                variant="outlined"
                onClick={()=> navigate("/becomeseller")}
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
        {showCategorySheet && (
          <div
            onMouseLeave={() => {
              setShowCategorySheet(false);
            }}
            onMouseEnter={() => {
              setShowCategorySheet(true);
            }}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </>
  );
};

export default Navbar;
