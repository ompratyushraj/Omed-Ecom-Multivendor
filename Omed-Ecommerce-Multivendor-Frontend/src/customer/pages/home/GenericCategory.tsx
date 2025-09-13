import React from "react";
import GenericCategoryCard from "./GenericCategoryCard";

const GenericCategory = () => {
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {[1, 1, 1, 1, 1, 1].map((item) => (
        <GenericCategoryCard />
      ))}
    </div>
  );
};

export default GenericCategory;
