import { Divider } from "@mui/material";
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Order from "./Order";
import UserDetail from "./UserDetail";
import Address from "./Address";
import OrderDetail from "./OrderDetail";
import { useAppDispatch } from "../../state/Store";
import { logout } from "../../state/AuthSlice";

const menu = [
  { name: "Orders", path: "/account/order" },
  { name: "Profile", path: "/account" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/address" },
  { name: "Logout", path: "/" }
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleClick = (item: any) => {
    if(item.path === "/"){
      dispatch(logout(navigate))
    }
    navigate(item.path)
  };
  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10 pb-20">
      <div>
        <h1 className="text-2xl font-bold pb-5 ps-4">Chatrapati Shivaji Maharaj</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className="col-span-1 lg:border-r lg:pr-5 ps-5 py-5 h-full w-[90%]">
          {menu.map((item) => (
            <div
              onClick={() => handleClick(item)}
              key={item.name}
              className={`${
                item.path === location.pathname
                  ? "bg-primary-color text-white"
                  : ""
              } py-3 mb-3 cursor-pointer hover:text-white hover:bg-primary-color px-5 rounded-3xl border`}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className="col-span-1 lg:col-span-2 py-6 w-[95%]">
          <Routes>
            <Route path='/' element={<UserDetail />} />
            <Route path='/order' element={<Order />} />
            <Route path='/order/:orderId/:orderItemId' element={<OrderDetail />} />
            <Route path='/address' element={<Address />} />

          </Routes>
          {/* <Order /> */}
          {/* <OrderDetails /> */}
          {/* <UserDetail /> */}
          </section>
      </div>
    </div>
  );
};

export default Account;
