import { Button } from "@mui/material";
import React, { useState } from "react";
import AdminDealTable from "../../components/admin/AdminDealTable";
import AdminCreateDealForm from "../../components/admin/AdminCreateDealForm";
import AdminDealCategoryTable from "./AdminDealCategoryTable";

const tabs = ["Deals", "Category", "Create Deal"];

const AdminDeal = () => {
  const [activeTab, setActiveTab] = useState("Deals");
  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((item) => (
          <Button color="success" sx={{borderRadius:"50px", py:"9px", px:"30px"}}
            key={item}
            variant={activeTab === item ? "contained" : "outlined"}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="my-7">
        {activeTab == "Deals" ? (
          <AdminDealTable />
        ) : activeTab == "Category" ? (
           <AdminDealCategoryTable />
        ) : (
          <div className="mt-5 flex flex-col justify-center items-center h-[60vh] border-2">
            <AdminCreateDealForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDeal;
