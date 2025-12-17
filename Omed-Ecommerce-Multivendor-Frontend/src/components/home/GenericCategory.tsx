import React from "react";
import GenericCategoryCard from "./GenericCategoryCard";
import { useAppSelector } from "../../state/Store";

const GenericCategory = () => {
  const {customer} = useAppSelector(store => store);
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b bg-slate-500">
      {customer.homePageData?.electricCategories.slice(0,7).map((item) => (
        <GenericCategoryCard item={item}/>
      ))}
    </div>
  );
};

export default GenericCategory;
