import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payments } from "@mui/icons-material";

const OrderDetail = () => {
  const navigate = useNavigate();
  return (
    <Box className="space-y-5 ms-7 ">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px] rounded-md"
          src="https://plus.unsplash.com/premium_vector-1683141533721-d648d0bec730?q=80&w=681&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">{"Virani Clothing"}</h1>
          <p>
            Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI
            Voice | Split Screen Smartwatch (Black Strap, Free Size)
          </p>
          <p>
            <strong>Size:</strong>M
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>
            Write Review
          </Button>
        </div>
      </section>
      <section className="border p-5 rounded-2xl">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>

      <div className="border p-5 rounded-2xl">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{"Zosh"}</p>
            <Divider flexItem orientation="vertical" />
            <p>{9283834840}</p>
          </div>

          <p>Ambavadi choke, Banglor, karnataka - 530068</p>
        </div>
      </div>

      <div className="border space-y-4 rounded-2xl">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{" "}
              <span className="text-green-500 font-medium text-xs">
                ₹{699}.00
              </span>{" "}
              on this item
            </p>
          </div>

          <p className="font-medium">₹ {799}.00</p>
        </div>

        <div className="px-5 ">
          <div
            className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center
gap-3 "
          >
            <Payments />
            <p>Pay On Delivery</p>
          </div>
        </div>
      </div>

      <Divider />
      <div>
        <p className="text-xs ms-1">
          <strong>Sold by : </strong>
          {"Virani Clothing"}
        </p>
      </div>

      <div className="p-10">
        <Button
          disabled={false}
          // onClick={handleCancelOrder}
          color="error"
          sx={{ py: "0.7rem", borderRadius:"50px" }}
          className=""
          variant="contained"
          fullWidth
        >
          {true ? "order canceled" : "Cancel Order"}
        </Button>
      </div>
    </Box>
  );
};

export default OrderDetail;
