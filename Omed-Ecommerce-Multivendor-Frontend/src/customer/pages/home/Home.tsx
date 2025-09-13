import React from "react";
import GenericCategory from "./GenericCategory";
import CategoryGrid from "./categorygrid/CategoryGrid";

const Home = () => {
  return (
    <div>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <GenericCategory />
        <CategoryGrid />
      </div>
    </div>
  );
};

export default Home;
