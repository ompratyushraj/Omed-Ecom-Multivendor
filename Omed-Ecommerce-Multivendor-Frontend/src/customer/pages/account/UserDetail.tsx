import React from "react";
import ProfileFieldCard from "../../../components/static/ProfileFieldCard";
import { Divider } from "@mui/material";

const UserDetail = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Detail</h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="Name" value={"R.N.Kao"} />
          <Divider />
          <ProfileFieldCard keys="Eamill" value={"rnkao@gmail.com"} />
          <Divider />
          <ProfileFieldCard keys="Mobile" value={"8765487701"} />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
