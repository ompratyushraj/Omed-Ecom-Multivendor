import React from "react";
import ProfileFieldCard from "../../components/profile/ProfileFieldCard";
import { Divider } from "@mui/material";
import { useAppSelector } from "../../state/Store";

const UserDetail = () => {
  const {auth} = useAppSelector(store => store);

  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Detail</h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="Name" value={auth.user?.fullName || ""} />
          <Divider />
          <ProfileFieldCard keys="Eamill" value={auth.user?.email || "" } />
          <Divider />
          <ProfileFieldCard keys="Mobile" value={auth.user?.mobile || "9835671631"} />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
