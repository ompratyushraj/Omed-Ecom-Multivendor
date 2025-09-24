import { useFormik } from "formik";
import React from "react";
import AdminHomeCategoryTable from "./AdminHomeCategoryTable";
import { useAppSelector } from "../../../state/Store";

const AdminDealCategoryTable = () => {
const {customer} = useAppSelector(store => store)
  return (
    <div>
      <AdminHomeCategoryTable data={customer.homePageData?.dealCategories || []}/>
    </div>
  );
};

export default AdminDealCategoryTable;
