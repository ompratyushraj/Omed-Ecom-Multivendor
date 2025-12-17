import React from "react";
import GenericCategory from "../../components/home/GenericCategory";
import CategoryGrid from "../../components/home/CategoryGrid";
import Deals from "../../components/home/Deals";
import ShopByCategory from "../../components/home/ShopByCategory";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";

const Home = () => {
  return (
    <div>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <GenericCategory />
        <CategoryGrid />

        <section className="pt-20">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center">
            TODAY'S DEALS
          </h1>
          <Deals />
        </section>
        <section className="pt-10 pb-10">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </section>

        <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover ">
          <img
            className="w-full h-full"
            src="https://plus.unsplash.com/premium_vector-1697729778014-ec218cb447a7?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
            <h1 className="text-center">Sell your Product</h1>
            <p className="text-lg md:text-2xl text-center">
              With<span className="logo text-2xl"> OMED </span>
            </p>
            <div className="pt-1 flex justify-center">
              <Button
                startIcon={<Storefront />}
                variant="contained"
                size="large"
                sx={{ borderRadius: '50px', px:4, py:2, fontSize: "1.1rem" }}
                color="success"
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
