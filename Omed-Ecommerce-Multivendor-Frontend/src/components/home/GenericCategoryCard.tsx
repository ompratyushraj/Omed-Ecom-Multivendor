import React from "react";
import type { HomeCategory } from "../../type/HomeCategoryType";

const GenericCategoryCard = ({item}:{item:HomeCategory}) => {
  return (
    <div className="mx-5 flex flex-col gap-2 justify-center">
      <img
        className="object-contain h-10 rounded-md ms-0.5 ps w-10 bg-slate-400"
        src={item.image}
        alt="Generic Category Icon"
      />
      <h2 className="font-semibold text-sm text-center">{item.name}</h2>
    </div>
  );
};

export default GenericCategoryCard;
