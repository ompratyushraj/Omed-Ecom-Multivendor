import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../state/Store";
import { createDeal } from "../../state/admin/dealSlice";

const AdminCreateDealForm = () => {
  const dispatch = useAppDispatch();
  const {customer} = useAppSelector(store=> store);
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    onSubmit: (values) => {
      console.log("submit", values)
      const dealData = {
        discount: values.discount,
        category: {
          categoryId: values.category,
          image: "", // Provide the image URL or path here
        }
      };
      const jwt = localStorage.getItem("jwt") || "";
      dispatch(createDeal({ deal: dealData, jwt }));
    },
  });
  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      className="space-y-6"
    >
      <Typography variant="h4" className="text-center">
        Create Deal
      </Typography>

      <TextField
        fullWidth
        name="discount"
        label="discount"
        value={formik.values.discount}
        onChange={formik.handleChange}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.category}
          label="Category"
          onChange={formik.handleChange}
        >
          {customer.homePageData?.dealCategories.map((item) => <MenuItem value={item.categoryId}>{item.name}
          </MenuItem>)}
        </Select>
      </FormControl>

      <Button fullWidth sx={{py:".9rem", borderRadius:"50px",backgroundColor:"green"}} type="submit" variant="contained">Create Deal</Button>
    </Box>
  );
};

export default AdminCreateDealForm;
