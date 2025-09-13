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
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && <IconButton>
                <MenuIcon />
              </IconButton>}
              <h1 className="logo cursor-pointer text-lg md:text-2xl">OMED</h1>
            </div>
            <ul className="flex items-center font-medium text-grey-800">
              {["Men", "Women", "Children", "Elder"].map((item) => (
                <li className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center ">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {true ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="http://cdn.pixabay.com/photo/2015/04/09/28/head-723540_640.jpg"
                />
                <h1 className="font-semibold hidden lg:block text-primary-color">
                  OMED
                </h1>
              </Button>
            ) : (
              <Button variant="contained" className="text-primary-color">
                Login
              </Button>
            )}

            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <IconButton>
              <LocalGroceryStoreIcon
                className="text-grey-700"
                sx={{ fontSize: 29 }}
                color="success"
              />
              
            </IconButton>

            {isLarge && (<Button color="success" startIcon={<Storefront />} variant="outlined">Become Seller</Button> )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
