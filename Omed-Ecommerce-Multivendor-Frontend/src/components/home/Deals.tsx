import React from "react";
import DealCard from "./DealCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useAppDispatch, useAppSelector } from "../../state/Store";

const Deals = () => {
  const dispatch = useAppDispatch();
  const {customer} = useAppSelector(store => store);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className="py-5 lg:px-20">
        <Slider {...settings}>
          {customer.homePageData?.deals.slice(0,6).map((item, index) => (
            <div key={index} className="px-2">
              <DealCard item={item} />
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default Deals;
