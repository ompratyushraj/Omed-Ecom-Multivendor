import React from "react";

const GenericCategoryCard = () => {
  return (
    <div className="mx-5">
      <img
        className="object-contain h-10 rounded-md ms-0.5 ps"
        src="https://plus.unsplash.com/premium_vector-1721742955283-254051f8127b?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Generic Category Icon"
      />
      <h2 className="font-semibold text-sm">Generics</h2>
    </div>
  );
};

export default GenericCategoryCard;
